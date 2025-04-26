
import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase, getCurrentUser, Profile } from '@/lib/supabase';
import { Session } from '@supabase/supabase-js';

type AuthContextType = {
  user: Profile | null;
  session: Session | null;
  loading: boolean;
  isAdmin: boolean;
  signOut: () => Promise<void>;
  refreshUser: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  session: null,
  loading: true,
  isAdmin: false,
  signOut: async () => {},
  refreshUser: async () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<Profile | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  const refreshUser = async () => {
    try {
      const userData = await getCurrentUser();
      console.log('refreshUser - userData:', userData);
      setUser(userData);
    } catch (error) {
      console.error('Error fetching user data:', error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log('AuthProvider - initial load');
    
    // First set up the auth state listener
    const { data: authListener } = supabase.auth.onAuthStateChange((event, currentSession) => {
      console.log('Auth state changed:', event, 'session:', currentSession ? 'exists' : 'null');
      
      // Update session state immediately
      setSession(currentSession);
      
      if (event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED') {
        // Use setTimeout to avoid Supabase deadlocks
        setTimeout(() => {
          console.log('Refreshing user after sign in or token refresh');
          refreshUser();
        }, 0);
      } else if (event === 'SIGNED_OUT') {
        console.log('User signed out, clearing user state');
        setUser(null);
        setSession(null);
        setLoading(false);
      }
    });

    // Then check for existing session
    supabase.auth.getSession().then(({ data: { session: currentSession } }) => {
      setSession(currentSession);
      
      if (currentSession?.user) {
        setTimeout(() => {
          refreshUser();
        }, 0);
      } else {
        setLoading(false);
      }
    });

    return () => {
      console.log('Cleaning up auth listener');
      authListener.subscription.unsubscribe();
    };
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setSession(null);
  };

  const value = {
    user,
    session,
    loading,
    isAdmin: user?.role === 'admin',
    signOut: handleSignOut,
    refreshUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
