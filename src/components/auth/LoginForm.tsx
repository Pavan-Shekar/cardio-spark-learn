
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { supabase } from '@/lib/supabase';
import { useAuth } from '@/context/AuthContext';

const formSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters' }),
});

type FormValues = z.infer<typeof formSchema>;

export default function LoginForm({ isAdmin = false }: { isAdmin?: boolean }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { refreshUser } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  
  // Get the intended destination from location state, or use default routes
  const from = location.state?.from?.pathname || (isAdmin ? '/admin/dashboard' : '/student/dashboard');
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (values: FormValues) => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: values.email,
        password: values.password,
      });

      if (error) throw error;

      if (data.user) {
        // Check user role from metadata
        const { data: userData } = await supabase
          .from('profiles')
          .select('role')
          .eq('id', data.user.id)
          .single();

        if (isAdmin && userData?.role !== 'admin') {
          toast.error('Access denied. Admin privileges required.');
          await supabase.auth.signOut();
          setIsLoading(false);
          return;
        }

        // Update auth context with new user data
        await refreshUser();
        
        toast.success(`Welcome back, ${data.user.email}!`);
        
        // Determine which dashboard to redirect to based on role
        const redirectPath = userData?.role === 'admin' ? '/admin/dashboard' : '/student/dashboard';
        console.log('Redirecting to:', redirectPath);
        
        // Add a small delay to ensure auth state is fully updated
        setTimeout(() => {
          console.log('Executing delayed navigation to:', redirectPath);
          navigate(redirectPath, { replace: true });
          
          // Fallback: Force a page reload if navigation doesn't work
          setTimeout(() => {
            if (window.location.pathname === '/login') {
              console.log('Still on login page, forcing hard redirect');
              window.location.href = redirectPath;
            }
          }, 300);
        }, 200);
      }
    } catch (error: any) {
      toast.error(error.message || 'Failed to sign in');
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="your@email.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="••••••••" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button 
            type="submit" 
            className="w-full bg-ecg-primary hover:bg-ecg-dark"
            disabled={isLoading}
          >
            {isLoading ? 'Signing in...' : 'Sign In'}
          </Button>
        </form>
      </Form>
    </div>
  );
}
