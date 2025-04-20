
import React from 'react';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import LoginForm from '@/components/auth/LoginForm';
import { Heart } from 'lucide-react';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-ecg-light py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-lg">
        <div className="text-center">
          <div className="flex justify-center">
            <Heart className="h-12 w-12 text-ecg-secondary animate-pulse" />
          </div>
          <h2 className="mt-4 text-3xl font-bold text-ecg-primary">Welcome Back</h2>
          <p className="mt-2 text-gray-600">Sign in to continue learning ECGs</p>
        </div>
        
        <Tabs defaultValue="student" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="student">Student</TabsTrigger>
            <TabsTrigger value="admin">Administrator</TabsTrigger>
          </TabsList>
          <TabsContent value="student">
            <LoginForm isAdmin={false} />
          </TabsContent>
          <TabsContent value="admin">
            <LoginForm isAdmin={true} />
          </TabsContent>
        </Tabs>
        
        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <Link to="/register" className="text-ecg-primary hover:underline">
              Create an account
            </Link>
          </p>
          <Link to="/" className="text-sm text-gray-600 block mt-2 hover:text-ecg-primary">
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
