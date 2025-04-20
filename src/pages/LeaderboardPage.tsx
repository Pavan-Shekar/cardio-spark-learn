
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Leaderboard from '@/components/Leaderboard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const LeaderboardPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header Section */}
        <section className="bg-ecg-light py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-ecg-dark mb-4">Leaderboard</h1>
            <p className="text-gray-700 max-w-3xl">
              See how you rank against other learners. Our leaderboard showcases the top performers
              based on quiz scores, accuracy, and participation.
            </p>
          </div>
        </section>
        
        {/* Leaderboard Content */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="overall" className="w-full">
              <TabsList className="mb-6">
                <TabsTrigger value="overall">Overall</TabsTrigger>
                <TabsTrigger value="monthly">Monthly</TabsTrigger>
                <TabsTrigger value="weekly">Weekly</TabsTrigger>
                <TabsTrigger value="beginners">Beginners</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overall" className="mt-6">
                <Leaderboard />
              </TabsContent>
              <TabsContent value="monthly" className="mt-6">
                <Leaderboard />
              </TabsContent>
              <TabsContent value="weekly" className="mt-6">
                <Leaderboard />
              </TabsContent>
              <TabsContent value="beginners" className="mt-6">
                <Leaderboard />
              </TabsContent>
            </Tabs>
            
            <div className="mt-12 bg-ecg-light p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-ecg-dark mb-4">Your Statistics</h2>
              <p className="text-gray-700 mb-6">
                Sign in to see your rank and track your performance on the leaderboard.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="text-3xl font-bold text-ecg-primary mb-2">--</div>
                  <div className="text-gray-600">Current Rank</div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="text-3xl font-bold text-ecg-primary mb-2">--</div>
                  <div className="text-gray-600">Total Score</div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="text-3xl font-bold text-ecg-primary mb-2">--</div>
                  <div className="text-gray-600">Quizzes Completed</div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="text-3xl font-bold text-ecg-primary mb-2">--</div>
                  <div className="text-gray-600">Accuracy Rate</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* How Leaderboard Works */}
        <section className="py-12 bg-ecg-light">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-ecg-dark mb-6">How the Leaderboard Works</h2>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-ecg-dark mb-3">Points System</h3>
                  <p className="text-gray-600">
                    Earn points based on quiz scores, with bonus points for accuracy and difficulty level.
                    Higher difficulty quizzes award more points for correct answers.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-ecg-dark mb-3">Rankings</h3>
                  <p className="text-gray-600">
                    Rankings are updated in real-time as users complete quizzes. Overall rankings are based
                    on cumulative points, while weekly and monthly rankings reset periodically.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-ecg-dark mb-3">Achievements</h3>
                  <p className="text-gray-600">
                    Unlock special achievements for consistent performance, milestone completions,
                    and maintaining high accuracy rates. Achievements contribute bonus points.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default LeaderboardPage;
