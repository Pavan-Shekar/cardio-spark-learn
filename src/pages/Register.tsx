
import React from 'react';
import { Link } from 'react-router-dom';
import RegisterForm from '@/components/auth/RegisterForm';
import { Heart } from 'lucide-react';

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-ecg-light py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-lg">
        <div className="text-center">
          <div className="flex justify-center">
            <Heart className="h-12 w-12 text-ecg-secondary animate-pulse" />
          </div>
          <h2 className="mt-4 text-3xl font-bold text-ecg-primary">Create an Account</h2>
          <p className="mt-2 text-gray-600">Join our ECG learning platform</p>
        </div>
        
        <RegisterForm />
        
        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="text-ecg-primary hover:underline">
              Sign in
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

export default Register;
