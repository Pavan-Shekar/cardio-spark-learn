
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TutorialList from '@/components/TutorialList';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

const Tutorials = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header Section */}
        <section className="bg-ecg-light py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-ecg-dark mb-4">ECG Tutorials</h1>
            <p className="text-gray-700 max-w-3xl">
              Learn ECG interpretation at your own pace with our comprehensive tutorial library. 
              From basic concepts to advanced patterns, we've got you covered.
            </p>
            
            {/* Search bar */}
            <div className="mt-8 max-w-md">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search tutorials..."
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
        
        {/* Tutorials Content */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="all" className="w-full">
              <div className="flex justify-between items-center mb-6">
                <TabsList>
                  <TabsTrigger value="all">All Tutorials</TabsTrigger>
                  <TabsTrigger value="beginner">Beginner</TabsTrigger>
                  <TabsTrigger value="intermediate">Intermediate</TabsTrigger>
                  <TabsTrigger value="advanced">Advanced</TabsTrigger>
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
                <TutorialList />
              </TabsContent>
              <TabsContent value="beginner" className="mt-6">
                <TutorialList />
              </TabsContent>
              <TabsContent value="intermediate" className="mt-6">
                <TutorialList />
              </TabsContent>
              <TabsContent value="advanced" className="mt-6">
                <TutorialList />
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        {/* Related Resources */}
        <section className="py-12 bg-ecg-light">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-ecg-dark mb-6">Related Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-ecg-dark mb-3">External References</h3>
                <p className="text-gray-600 mb-4">
                  Additional learning materials from trusted medical sources to supplement your ECG studies.
                </p>
                <Button variant="outline" className="w-full border-ecg-primary text-ecg-primary hover:bg-ecg-primary hover:text-white">
                  View References
                </Button>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-ecg-dark mb-3">Video Library</h3>
                <p className="text-gray-600 mb-4">
                  Watch detailed video explanations of complex ECG patterns and case studies.
                </p>
                <Button variant="outline" className="w-full border-ecg-primary text-ecg-primary hover:bg-ecg-primary hover:text-white">
                  Browse Videos
                </Button>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-ecg-dark mb-3">Downloadable Resources</h3>
                <p className="text-gray-600 mb-4">
                  PDF guides, cheat sheets, and practice worksheets to help you master ECG interpretation.
                </p>
                <Button variant="outline" className="w-full border-ecg-primary text-ecg-primary hover:bg-ecg-primary hover:text-white">
                  Download Resources
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

export default Tutorials;
