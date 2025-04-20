
import React, { useState } from 'react';
import AdminLayout from '@/components/layouts/AdminLayout';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Pencil, Trash, Plus, Eye } from 'lucide-react';

const quizzes = [
  {
    id: '1',
    title: 'ECG Basics Quiz',
    questions: 10,
    difficulty: 'Beginner',
    attempts: 124,
    avgScore: '72%',
  },
  {
    id: '2',
    title: 'P Waves & PR Interval Quiz',
    questions: 8,
    difficulty: 'Beginner',
    attempts: 98,
    avgScore: '68%',
  },
  {
    id: '3',
    title: 'QRS Complex Quiz',
    questions: 12,
    difficulty: 'Intermediate',
    attempts: 76,
    avgScore: '65%',
  },
  {
    id: '4',
    title: 'ST Segment & T Waves Quiz',
    questions: 10,
    difficulty: 'Intermediate',
    attempts: 54,
    avgScore: '62%',
  },
  {
    id: '5',
    title: 'Arrhythmia Recognition Quiz',
    questions: 15,
    difficulty: 'Advanced',
    attempts: 32,
    avgScore: '58%',
  },
];

const ManageQuizzes = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredQuizzes = quizzes.filter(quiz => 
    quiz.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <AdminLayout>
      <div className="p-6">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-ecg-dark">Manage Quizzes</h1>
            <p className="text-gray-600 mt-2">
              Create, edit and manage your ECG learning quizzes
            </p>
          </div>
          <Button className="bg-ecg-primary hover:bg-ecg-dark">
            <Plus className="h-4 w-4 mr-2" /> Add Quiz
          </Button>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Quizzes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Search quizzes..."
                className="w-full px-4 py-2 border rounded-md"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Questions</TableHead>
                  <TableHead>Difficulty</TableHead>
                  <TableHead>Attempts</TableHead>
                  <TableHead>Avg. Score</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredQuizzes.map((quiz) => (
                  <TableRow key={quiz.id}>
                    <TableCell className="font-medium">{quiz.title}</TableCell>
                    <TableCell>{quiz.questions}</TableCell>
                    <TableCell>
                      <span 
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          quiz.difficulty === 'Beginner' 
                            ? 'bg-green-100 text-green-800' 
                            : quiz.difficulty === 'Intermediate'
                              ? 'bg-blue-100 text-blue-800'
                              : 'bg-purple-100 text-purple-800'
                        }`}
                      >
                        {quiz.difficulty}
                      </span>
                    </TableCell>
                    <TableCell>{quiz.attempts}</TableCell>
                    <TableCell>{quiz.avgScore}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end space-x-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
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

export default ManageQuizzes;
