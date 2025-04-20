
import { createClient } from '@supabase/supabase-js';

// Check if environment variables are available
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Validate environment variables
if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Supabase environment variables are missing. Please ensure VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are set.');
}

// Create client with fallback for development purposes
export const supabase = createClient(
  supabaseUrl || 'https://your-placeholder-url.supabase.co',
  supabaseAnonKey || 'your-placeholder-key'
);

export type UserRole = 'student' | 'admin';

export type Profile = {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  created_at?: string;
};

export async function getCurrentUser() {
  try {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) return null;
    
    const { data } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', session.user.id)
      .single();
      
    return data as Profile | null;
  } catch (error) {
    console.error('Error fetching current user:', error);
    return null;
  }
}

export async function isAdmin() {
  const user = await getCurrentUser();
  return user?.role === 'admin';
}

export async function signOut() {
  try {
    await supabase.auth.signOut();
  } catch (error) {
    console.error('Error signing out:', error);
  }
}

// Function to initialize database tables
export async function initializeDatabase() {
  try {
    console.log('Checking and creating database tables if needed...');
    
    // Check if profiles table exists
    const { error: profilesError } = await supabase
      .from('profiles')
      .select('id')
      .limit(1);
    
    if (profilesError) {
      console.log('Creating profiles table...');
      // Create profiles table
      const { error } = await supabase.rpc('create_profiles_table');
      if (error) throw error;
    }
    
    // Check if tutorials table exists
    const { error: tutorialsError } = await supabase
      .from('tutorials')
      .select('id')
      .limit(1);
    
    if (tutorialsError) {
      console.log('Creating tutorials table...');
      // Create tutorials table
      const { error } = await supabase.rpc('create_tutorials_table');
      if (error) throw error;
    }
    
    // Check if quizzes table exists
    const { error: quizzesError } = await supabase
      .from('quizzes')
      .select('id')
      .limit(1);
    
    if (quizzesError) {
      console.log('Creating quizzes table...');
      // Create quizzes table
      const { error } = await supabase.rpc('create_quizzes_table');
      if (error) throw error;
    }
    
    // Check if quiz_attempts table exists
    const { error: attemptsError } = await supabase
      .from('quiz_attempts')
      .select('id')
      .limit(1);
    
    if (attemptsError) {
      console.log('Creating quiz_attempts table...');
      // Create quiz_attempts table
      const { error } = await supabase.rpc('create_quiz_attempts_table');
      if (error) throw error;
    }
    
    // Check if tutorial_progress table exists
    const { error: progressError } = await supabase
      .from('tutorial_progress')
      .select('id')
      .limit(1);
    
    if (progressError) {
      console.log('Creating tutorial_progress table...');
      // Create tutorial_progress table
      const { error } = await supabase.rpc('create_tutorial_progress_table');
      if (error) throw error;
    }
    
    console.log('Database initialization completed successfully.');
    return true;
  } catch (error) {
    console.error('Error initializing database:', error);
    return false;
  }
}

// Function to create SQL functions in Supabase to create tables
export async function createDatabaseFunctions() {
  try {
    // Create stored procedure for profiles table
    await supabase.rpc('execute_sql', {
      sql_query: `
        CREATE OR REPLACE FUNCTION create_profiles_table()
        RETURNS void AS $$
        BEGIN
          CREATE TABLE IF NOT EXISTS profiles (
            id UUID PRIMARY KEY REFERENCES auth.users(id),
            name TEXT NOT NULL,
            email TEXT NOT NULL UNIQUE,
            role TEXT NOT NULL DEFAULT 'student',
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
          );
        END;
        $$ LANGUAGE plpgsql;
      `
    });
    
    // Create stored procedure for tutorials table
    await supabase.rpc('execute_sql', {
      sql_query: `
        CREATE OR REPLACE FUNCTION create_tutorials_table()
        RETURNS void AS $$
        BEGIN
          CREATE TABLE IF NOT EXISTS tutorials (
            id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            title TEXT NOT NULL,
            description TEXT NOT NULL,
            content TEXT NOT NULL,
            difficulty TEXT NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
          );
        END;
        $$ LANGUAGE plpgsql;
      `
    });
    
    // Create stored procedure for quizzes table
    await supabase.rpc('execute_sql', {
      sql_query: `
        CREATE OR REPLACE FUNCTION create_quizzes_table()
        RETURNS void AS $$
        BEGIN
          CREATE TABLE IF NOT EXISTS quizzes (
            id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            title TEXT NOT NULL,
            description TEXT NOT NULL,
            questions JSONB NOT NULL,
            difficulty TEXT NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
          );
        END;
        $$ LANGUAGE plpgsql;
      `
    });
    
    // Create stored procedure for quiz_attempts table
    await supabase.rpc('execute_sql', {
      sql_query: `
        CREATE OR REPLACE FUNCTION create_quiz_attempts_table()
        RETURNS void AS $$
        BEGIN
          CREATE TABLE IF NOT EXISTS quiz_attempts (
            id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            user_id UUID NOT NULL REFERENCES profiles(id),
            quiz_id UUID NOT NULL REFERENCES quizzes(id),
            score INTEGER NOT NULL,
            answers JSONB NOT NULL,
            completed_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
          );
        END;
        $$ LANGUAGE plpgsql;
      `
    });
    
    // Create stored procedure for tutorial_progress table
    await supabase.rpc('execute_sql', {
      sql_query: `
        CREATE OR REPLACE FUNCTION create_tutorial_progress_table()
        RETURNS void AS $$
        BEGIN
          CREATE TABLE IF NOT EXISTS tutorial_progress (
            id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            user_id UUID NOT NULL REFERENCES profiles(id),
            tutorial_id UUID NOT NULL REFERENCES tutorials(id),
            completed BOOLEAN NOT NULL DEFAULT false,
            last_viewed_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
            UNIQUE(user_id, tutorial_id)
          );
        END;
        $$ LANGUAGE plpgsql;
      `
    });
    
    // Create execute_sql function if it doesn't exist
    await supabase.rpc('execute_sql', {
      sql_query: `
        CREATE OR REPLACE FUNCTION execute_sql(sql_query TEXT)
        RETURNS void AS $$
        BEGIN
          EXECUTE sql_query;
        END;
        $$ LANGUAGE plpgsql SECURITY DEFINER;
      `
    });
    
    console.log('Database functions created successfully.');
    return true;
  } catch (error) {
    console.error('Error creating database functions:', error);
    return false;
  }
}
