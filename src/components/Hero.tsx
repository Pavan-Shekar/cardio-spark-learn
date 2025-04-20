
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-ecg-light to-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-ecg-dark mb-4">
              Master ECG Interpretation
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              Learn to read and interpret electrocardiograms through interactive tutorials, 
              animated explanations, and practice quizzes. Perfect for medical students 
              and healthcare professionals.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <Button asChild className="bg-ecg-primary text-white hover:bg-ecg-dark transition-colors">
                <Link to="/tutorials">
                  Start Learning
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-ecg-primary text-ecg-primary hover:bg-ecg-primary hover:text-white transition-colors">
                <Link to="/quizzes">
                  Test Your Knowledge
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="relative bg-white p-6 rounded-xl shadow-lg">
              <div className="w-full h-48 bg-black rounded-lg overflow-hidden">
                <div className="w-full h-full flex items-center justify-center relative">
                  <div className="absolute w-full h-px bg-ecg-secondary">
                    <div className="ecg-line w-full">
                      <div className="ecg-pulse"></div>
                    </div>
                  </div>
                  <span className="text-ecg-secondary relative z-10 text-xl">Interactive ECG Training</span>
                </div>
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-ecg-dark font-medium">Interactive Tutorials</h3>
                  <p className="text-sm text-gray-600">Visual learning with animations</p>
                </div>
                <div>
                  <h3 className="text-ecg-dark font-medium">Randomized Quizzes</h3>
                  <p className="text-sm text-gray-600">Practice with new questions each time</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
