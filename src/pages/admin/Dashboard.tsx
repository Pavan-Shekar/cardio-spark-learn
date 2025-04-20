
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AdminLayout from '@/components/layouts/AdminLayout';
import { Users, BookOpen, ClipboardList, Activity } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

const AdminDashboard = () => {
  const { user } = useAuth();

  return (
    <AdminLayout>
      <div className="p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-ecg-dark">Admin Dashboard</h1>
          <p className="text-gray-600 mt-2">
            Welcome, {user?.name || 'Admin'}. Manage your ECG learning platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium text-gray-500">Total Students</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <Users className="h-8 w-8 text-ecg-primary mr-3" />
                <span className="text-3xl font-bold">157</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium text-gray-500">Tutorials</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <BookOpen className="h-8 w-8 text-ecg-primary mr-3" />
                <span className="text-3xl font-bold">6</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium text-gray-500">Total Quizzes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <ClipboardList className="h-8 w-8 text-ecg-primary mr-3" />
                <span className="text-3xl font-bold">10</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium text-gray-500">Active Users</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <Activity className="h-8 w-8 text-ecg-primary mr-3" />
                <span className="text-3xl font-bold">43</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Student Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b pb-4">
                  <div>
                    <p className="font-medium">New Registrations</p>
                    <p className="text-sm text-gray-500">Last 7 days</p>
                  </div>
                  <div className="text-2xl font-bold text-ecg-primary">12</div>
                </div>
                <div className="flex justify-between items-center border-b pb-4">
                  <div>
                    <p className="font-medium">Quizzes Taken</p>
                    <p className="text-sm text-gray-500">Last 7 days</p>
                  </div>
                  <div className="text-2xl font-bold text-ecg-primary">87</div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Avg. Quiz Score</p>
                    <p className="text-sm text-gray-500">All time</p>
                  </div>
                  <div className="text-2xl font-bold text-ecg-primary">76%</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Students</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b pb-2">
                  <div>
                    <p className="font-medium">Sarah Johnson</p>
                    <p className="text-sm text-gray-500">Joined 2 days ago</p>
                  </div>
                  <div className="text-sm font-medium text-green-600">Active</div>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <div>
                    <p className="font-medium">Michael Chen</p>
                    <p className="text-sm text-gray-500">Joined 3 days ago</p>
                  </div>
                  <div className="text-sm font-medium text-green-600">Active</div>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <div>
                    <p className="font-medium">Emma Rodriguez</p>
                    <p className="text-sm text-gray-500">Joined 5 days ago</p>
                  </div>
                  <div className="text-sm font-medium text-green-600">Active</div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Jamal Williams</p>
                    <p className="text-sm text-gray-500">Joined 1 week ago</p>
                  </div>
                  <div className="text-sm font-medium text-green-600">Active</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
