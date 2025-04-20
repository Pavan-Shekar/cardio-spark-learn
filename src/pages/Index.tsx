
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import TutorialList from '@/components/TutorialList';
import Leaderboard from '@/components/Leaderboard';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        <Features />
        
        {/* Featured Tutorials Section */}
        <section className="py-16 bg-ecg-light">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <div>
                <h2 className="text-3xl font-bold text-ecg-dark">Featured Tutorials</h2>
                <p className="text-gray-600 mt-2">
                  Begin your ECG learning journey with these comprehensive tutorials
                </p>
              </div>
              <Button asChild variant="outline" className="mt-4 md:mt-0 border-ecg-primary text-ecg-primary hover:bg-ecg-primary hover:text-white">
                <Link to="/tutorials">
                  View All Tutorials
                </Link>
              </Button>
            </div>
            
            {/* Show only 3 tutorials on the homepage */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <TutorialList />
            </div>
          </div>
        </section>
        
        {/* Leaderboard Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <div>
                <h2 className="text-3xl font-bold text-ecg-dark">Leaderboard</h2>
                <p className="text-gray-600 mt-2">
                  See how you compare with other learners
                </p>
              </div>
              <Button asChild variant="outline" className="mt-4 md:mt-0 border-ecg-primary text-ecg-primary hover:bg-ecg-primary hover:text-white">
                <Link to="/leaderboard">
                  Full Leaderboard
                </Link>
              </Button>
            </div>
            
            <Leaderboard />
          </div>
        </section>
        
        {/* Call to Action Section */}
        <section className="py-16 bg-ecg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Master ECG Interpretation?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Join thousands of students who are improving their ECG reading skills through our interactive platform.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button asChild size="lg" className="bg-white text-ecg-primary hover:bg-gray-100">
                <Link to="/signup">
                  Get Started
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-ecg-primary">
                <Link to="/tutorials">
                  Explore Tutorials
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
