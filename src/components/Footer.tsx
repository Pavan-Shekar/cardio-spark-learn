
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-ecg-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-6 w-6 text-ecg-secondary" />
              <span className="text-xl font-bold">MyECGProject</span>
            </div>
            <p className="text-gray-300 text-sm">
              An interactive learning platform for ECG interpretation, designed for medical students and healthcare professionals.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Learn</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/tutorials" className="text-gray-300 hover:text-white transition-colors">
                  ECG Tutorials
                </Link>
              </li>
              <li>
                <Link to="/quizzes" className="text-gray-300 hover:text-white transition-colors">
                  Practice Quizzes
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-300 hover:text-white transition-colors">
                  External Resources
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Community</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/leaderboard" className="text-gray-300 hover:text-white transition-colors">
                  Leaderboard
                </Link>
              </li>
              <li>
                <Link to="/forum" className="text-gray-300 hover:text-white transition-colors">
                  Discussion Forum
                </Link>
              </li>
              <li>
                <Link to="/feedback" className="text-gray-300 hover:text-white transition-colors">
                  Feedback
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">About</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  Our Mission
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} MyECGProject. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
