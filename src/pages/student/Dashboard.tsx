
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import StudentLayout from '@/components/layouts/StudentLayout';
import { BookOpen, Award, CheckCircle, ClipboardList } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

const StudentDashboard = () => {
  const { user } = useAuth();

  return (
    <StudentLayout>
      <div className="p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-ecg-dark">Welcome, {user?.name || 'Student'}</h1>
          <p className="text-gray-600 mt-2">
            Track your progress and continue your ECG learning journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium text-gray-500">Tutorials Completed</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <BookOpen className="h-8 w-8 text-ecg-primary mr-3" />
                <span className="text-3xl font-bold">2/6</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium text-gray-500">Quizzes Taken</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <ClipboardList className="h-8 w-8 text-ecg-primary mr-3" />
                <span className="text-3xl font-bold">5</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium text-gray-500">Average Score</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <CheckCircle className="h-8 w-8 text-ecg-primary mr-3" />
                <span className="text-3xl font-bold">78%</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium text-gray-500">Leaderboard Rank</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <Award className="h-8 w-8 text-ecg-primary mr-3" />
                <span className="text-3xl font-bold">#12</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-2xl font-bold text-ecg-dark mb-6">Continue Learning</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Recommended Tutorials</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="p-2 hover:bg-gray-50 rounded">
                  <Link to="/tutorials" className="flex justify-between items-center">
                    <span>QRS Complex Analysis</span>
                    <Button variant="ghost" size="sm">Start</Button>
                  </Link>
                </li>
                <li className="p-2 hover:bg-gray-50 rounded">
                  <Link to="/tutorials" className="flex justify-between items-center">
                    <span>ST Segment & T Waves</span>
                    <Button variant="ghost" size="sm">Start</Button>
                  </Link>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recommended Quizzes</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="p-2 hover:bg-gray-50 rounded">
                  <Link to="/quizzes" className="flex justify-between items-center">
                    <span>ECG Basics Quiz</span>
                    <Button variant="ghost" size="sm">Take Quiz</Button>
                  </Link>
                </li>
                <li className="p-2 hover:bg-gray-50 rounded">
                  <Link to="/quizzes" className="flex justify-between items-center">
                    <span>P Waves & PR Interval</span>
                    <Button variant="ghost" size="sm">Take Quiz</Button>
                  </Link>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b pb-2">
                <div>
                  <p className="font-medium">Completed "ECG Basics" Tutorial</p>
                  <p className="text-sm text-gray-500">2 days ago</p>
                </div>
                <Button variant="ghost" size="sm" asChild>
                  <Link to="/tutorials">Review</Link>
                </Button>
              </div>
              <div className="flex justify-between items-center border-b pb-2">
                <div>
                  <p className="font-medium">Scored 82% on "ECG Basics" Quiz</p>
                  <p className="text-sm text-gray-500">3 days ago</p>
                </div>
                <Button variant="ghost" size="sm" asChild>
                  <Link to="/quizzes">Retry</Link>
                </Button>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">Joined MyECGProject</p>
                  <p className="text-sm text-gray-500">1 week ago</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </StudentLayout>
  );
};

export default StudentDashboard;
