
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-ecg-secondary animate-pulse" />
            <span className="text-2xl font-bold text-ecg-primary">MyECGProject</span>
          </Link>
          
          <div className="hidden md:flex space-x-6 items-center">
            <Link to="/tutorials" className="text-ecg-dark hover:text-ecg-primary transition-colors">
              Tutorials
            </Link>
            <Link to="/quizzes" className="text-ecg-dark hover:text-ecg-primary transition-colors">
              Quizzes
            </Link>
            <Link to="/leaderboard" className="text-ecg-dark hover:text-ecg-primary transition-colors">
              Leaderboard
            </Link>
            <Link to="/about" className="text-ecg-dark hover:text-ecg-primary transition-colors">
              About
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="hidden md:inline-flex border-ecg-primary text-ecg-primary hover:bg-ecg-primary hover:text-white transition-colors">
              Log In
            </Button>
            <Button className="bg-ecg-primary text-white hover:bg-ecg-dark transition-colors">
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
