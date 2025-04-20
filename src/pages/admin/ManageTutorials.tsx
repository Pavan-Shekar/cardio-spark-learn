
import React, { useState } from 'react';
import AdminLayout from '@/components/layouts/AdminLayout';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Pencil, Trash, Plus } from 'lucide-react';

const tutorials = [
  {
    id: '1',
    title: 'ECG Basics',
    level: 'Beginner',
    duration: '25 minutes',
    status: 'Published',
  },
  {
    id: '2',
    title: 'P Waves & PR Interval',
    level: 'Beginner',
    duration: '20 minutes',
    status: 'Published',
  },
  {
    id: '3',
    title: 'QRS Complex Analysis',
    level: 'Intermediate',
    duration: '30 minutes',
    status: 'Published',
  },
  {
    id: '4',
    title: 'ST Segment & T Waves',
    level: 'Intermediate',
    duration: '25 minutes',
    status: 'Published',
  },
  {
    id: '5',
    title: 'Arrhythmia Recognition',
    level: 'Advanced',
    duration: '40 minutes',
    status: 'Published',
  },
  {
    id: '6',
    title: 'Myocardial Infarction Patterns',
    level: 'Advanced',
    duration: '35 minutes',
    status: 'Draft',
  },
];

const ManageTutorials = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredTutorials = tutorials.filter(tutorial => 
    tutorial.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <AdminLayout>
      <div className="p-6">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-ecg-dark">Manage Tutorials</h1>
            <p className="text-gray-600 mt-2">
              Create, edit and manage your ECG learning tutorials
            </p>
          </div>
          <Button className="bg-ecg-primary hover:bg-ecg-dark">
            <Plus className="h-4 w-4 mr-2" /> Add Tutorial
          </Button>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Tutorials</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Search tutorials..."
                className="w-full px-4 py-2 border rounded-md"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Level</TableHead>
                  <TableHead>Duration</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredTutorials.map((tutorial) => (
                  <TableRow key={tutorial.id}>
                    <TableCell className="font-medium">{tutorial.title}</TableCell>
                    <TableCell>{tutorial.level}</TableCell>
                    <TableCell>{tutorial.duration}</TableCell>
                    <TableCell>
                      <span 
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          tutorial.status === 'Published' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}
                      >
                        {tutorial.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end space-x-2">
                        <Button variant="outline" size="sm">
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm" className="text-red-500 hover:text-red-700">
                          <Trash className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default ManageTutorials;
