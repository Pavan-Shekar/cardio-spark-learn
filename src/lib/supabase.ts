import { createClient } from '@supabase/supabase-js';
import { Database } from '@/integrations/supabase/types';

// Use the values from the Supabase integration
const supabaseUrl = "https://hhqwtikklidrlqhjrzcc.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhocXd0aWtrbGlkcmxxaGpyemNjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUxNDE0NjIsImV4cCI6MjA2MDcxNzQ2Mn0.tBX3xVBCgODbdZkVSXOKYknckkr5oNyXWvemZOudSsE";

// Create client with actual values and explicit configuration
export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  }
});

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
    
    // Check if tables exist by querying them directly
    const { data: profiles, error: profilesError } = await supabase
      .from('profiles')
      .select('id')
      .limit(1);
    
    if (profilesError) {
      console.error('Error checking profiles table:', profilesError);
    }
    
    const { data: tutorials, error: tutorialsError } = await supabase
      .from('tutorials')
      .select('id')
      .limit(1);
    
    if (tutorialsError) {
      console.error('Error checking tutorials table:', tutorialsError);
    }
    
    const { data: quizzes, error: quizzesError } = await supabase
      .from('quizzes')
      .select('id')
      .limit(1);
    
    if (quizzesError) {
      console.error('Error checking quizzes table:', quizzesError);
    }
    
    const { data: attempts, error: attemptsError } = await supabase
      .from('quiz_attempts')
      .select('id')
      .limit(1);
    
    if (attemptsError) {
      console.error('Error checking quiz_attempts table:', attemptsError);
    }
    
    const { data: progress, error: progressError } = await supabase
      .from('tutorial_progress')
      .select('id')
      .limit(1);
    
    if (progressError) {
      console.error('Error checking tutorial_progress table:', progressError);
    }
    
    // Log success or failure
    if (profiles && tutorials && quizzes && attempts && progress) {
      console.log('All tables exist and are accessible');
      return true;
    } else {
      console.log('One or more tables may not exist or are not accessible');
      return false;
    }
  } catch (error) {
    console.error('Error initializing database:', error);
    return false;
  }
}
