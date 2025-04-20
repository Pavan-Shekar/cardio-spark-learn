
import React from 'react';
import StudentLayout from '@/components/layouts/StudentLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const MyProgress = () => {
  return (
    <StudentLayout>
      <div className="p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-ecg-dark">My Learning Progress</h1>
          <p className="text-gray-600 mt-2">
            Track your achievements and progress on your ECG learning journey
          </p>
        </div>

        <Tabs defaultValue="tutorials" className="w-full mb-8">
          <TabsList className="grid w-full max-w-md grid-cols-2 mb-6">
            <TabsTrigger value="tutorials">Tutorials</TabsTrigger>
            <TabsTrigger value="quizzes">Quizzes</TabsTrigger>
          </TabsList>
          
          <TabsContent value="tutorials">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Tutorial Completion</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">ECG Basics</span>
                        <span className="text-sm font-medium text-green-600">Completed</span>
                      </div>
                      <Progress value={100} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">P Waves & PR Interval</span>
                        <span className="text-sm font-medium text-green-600">Completed</span>
                      </div>
                      <Progress value={100} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">QRS Complex Analysis</span>
                        <span className="text-sm font-medium">50%</span>
                      </div>
                      <Progress value={50} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">ST Segment & T Waves</span>
                        <span className="text-sm font-medium">0%</span>
                      </div>
                      <Progress value={0} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Arrhythmia Recognition</span>
                        <span className="text-sm font-medium">0%</span>
                      </div>
                      <Progress value={0} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Myocardial Infarction Patterns</span>
                        <span className="text-sm font-medium">0%</span>
                      </div>
                      <Progress value={0} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="quizzes">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Quiz Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">ECG Basics Quiz</span>
                        <span className="font-medium">Score: 82%</span>
                      </div>
                      <Progress value={82} className="h-2" />
                      <div className="flex justify-between mt-1">
                        <span className="text-xs text-gray-500">Attempts: 2</span>
                        <span className="text-xs text-gray-500">Last attempt: 3 days ago</span>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">P Waves & PR Interval Quiz</span>
                        <span className="font-medium">Score: 75%</span>
                      </div>
                      <Progress value={75} className="h-2" />
                      <div className="flex justify-between mt-1">
                        <span className="text-xs text-gray-500">Attempts: 1</span>
                        <span className="text-xs text-gray-500">Last attempt: 5 days ago</span>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">QRS Complex Quiz</span>
                        <span className="font-medium">Score: 68%</span>
                      </div>
                      <Progress value={68} className="h-2" />
                      <div className="flex justify-between mt-1">
                        <span className="text-xs text-gray-500">Attempts: 2</span>
                        <span className="text-xs text-gray-500">Last attempt: 1 week ago</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        <Card>
          <CardHeader>
            <CardTitle>Overall Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">Course Completion</span>
                  <span className="font-medium">33%</span>
                </div>
                <Progress value={33} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">Average Quiz Score</span>
                  <span className="font-medium">75%</span>
                </div>
                <Progress value={75} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </StudentLayout>
  );
};

export default MyProgress;
