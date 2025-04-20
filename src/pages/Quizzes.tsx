
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import QuizList from '@/components/QuizList';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

const Quizzes = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header Section */}
        <section className="bg-ecg-light py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-ecg-dark mb-4">ECG Quizzes</h1>
            <p className="text-gray-700 max-w-3xl">
              Test your ECG interpretation skills with our comprehensive quiz library. 
              Each quiz offers randomly generated questions to help you practice and improve.
            </p>
            
            {/* Search bar */}
            <div className="mt-8 max-w-md">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search quizzes..."
                  className="pl-10 pr-4 py-2 border-ecg-primary focus:ring-ecg-primary"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Button className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-ecg-primary text-white px-4 py-1 rounded-md h-8">
                  Search
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Quizzes Content */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="all" className="w-full">
              <div className="flex justify-between items-center mb-6">
                <TabsList>
                  <TabsTrigger value="all">All Quizzes</TabsTrigger>
                  <TabsTrigger value="easy">Easy</TabsTrigger>
                  <TabsTrigger value="medium">Medium</TabsTrigger>
                  <TabsTrigger value="hard">Hard</TabsTrigger>
                </TabsList>
                
                <div className="flex space-x-2">
                  <Button variant="outline" className="text-ecg-primary border-ecg-primary">
                    Latest
                  </Button>
                  <Button variant="outline" className="text-ecg-primary border-ecg-primary">
                    Most Popular
                  </Button>
                </div>
              </div>
              
              <TabsContent value="all" className="mt-6">
                <QuizList />
              </TabsContent>
              <TabsContent value="easy" className="mt-6">
                <QuizList />
              </TabsContent>
              <TabsContent value="medium" className="mt-6">
                <QuizList />
              </TabsContent>
              <TabsContent value="hard" className="mt-6">
                <QuizList />
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        {/* Your Progress */}
        <section className="py-12 bg-ecg-light">
          <div className="container mx-auto px-4">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-ecg-dark mb-6">Your Progress</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-ecg-light p-6 rounded-lg text-center">
                  <div className="text-3xl font-bold text-ecg-primary mb-2">0</div>
                  <div className="text-gray-600">Quizzes Completed</div>
                </div>
                
                <div className="bg-ecg-light p-6 rounded-lg text-center">
                  <div className="text-3xl font-bold text-ecg-primary mb-2">0%</div>
                  <div className="text-gray-600">Average Score</div>
                </div>
                
                <div className="bg-ecg-light p-6 rounded-lg text-center">
                  <div className="text-3xl font-bold text-ecg-primary mb-2">0</div>
                  <div className="text-gray-600">Questions Answered</div>
                </div>
                
                <div className="bg-ecg-light p-6 rounded-lg text-center">
                  <div className="text-3xl font-bold text-ecg-primary mb-2">0</div>
                  <div className="text-gray-600">Leaderboard Rank</div>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-gray-600 mb-4">
                  Sign in to track your progress and compete on the leaderboard!
                </p>
                <Button className="bg-ecg-primary text-white hover:bg-ecg-dark">
                  Sign In to Track Progress
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Quizzes;
