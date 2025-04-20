
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Award, ChevronUp, ChevronDown } from 'lucide-react';

// Mock leaderboard data
const leaderboardData = [
  { id: 1, name: 'Sarah Johnson', score: 950, quizzes: 18, accuracy: 92, change: 'up' },
  { id: 2, name: 'Michael Chen', score: 920, quizzes: 17, accuracy: 88, change: 'same' },
  { id: 3, name: 'Emma Rodriguez', score: 890, quizzes: 15, accuracy: 94, change: 'up' },
  { id: 4, name: 'David Kim', score: 860, quizzes: 16, accuracy: 87, change: 'down' },
  { id: 5, name: 'Jennifer Patel', score: 840, quizzes: 14, accuracy: 91, change: 'up' },
  { id: 6, name: 'Carlos Mendez', score: 820, quizzes: 15, accuracy: 85, change: 'down' },
  { id: 7, name: 'Sophia Wang', score: 790, quizzes: 13, accuracy: 89, change: 'same' },
  { id: 8, name: 'Lucas Ngabonziza', score: 760, quizzes: 12, accuracy: 90, change: 'up' },
  { id: 9, name: 'Olivia Thompson', score: 730, quizzes: 11, accuracy: 86, change: 'down' },
  { id: 10, name: 'Aiden Okafor', score: 710, quizzes: 10, accuracy: 88, change: 'up' },
];

const Leaderboard = () => {
  return (
    <div className="rounded-lg border bg-white shadow-sm overflow-hidden">
      <div className="p-6 border-b">
        <h3 className="text-xl font-semibold text-ecg-dark flex items-center">
          <Award className="mr-2 h-5 w-5 text-ecg-secondary" />
          Top Performers
        </h3>
        <p className="text-sm text-gray-500 mt-1">
          Based on quiz scores, accuracy, and participation
        </p>
      </div>
      
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-16 text-center">Rank</TableHead>
              <TableHead>Name</TableHead>
              <TableHead className="text-right">Score</TableHead>
              <TableHead className="text-right">Quizzes</TableHead>
              <TableHead className="text-right">Accuracy %</TableHead>
              <TableHead className="text-right">Change</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {leaderboardData.map((user) => (
              <TableRow key={user.id}>
                <TableCell className="font-medium text-center">
                  {user.id <= 3 ? (
                    <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-white ${
                      user.id === 1 ? 'bg-yellow-400' : user.id === 2 ? 'bg-gray-400' : 'bg-amber-600'
                    }`}>
                      {user.id}
                    </span>
                  ) : (
                    user.id
                  )}
                </TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell className="text-right font-semibold">{user.score}</TableCell>
                <TableCell className="text-right">{user.quizzes}</TableCell>
                <TableCell className="text-right">{user.accuracy}%</TableCell>
                <TableCell className="text-right">
                  {user.change === 'up' ? (
                    <ChevronUp className="ml-auto h-4 w-4 text-green-500" />
                  ) : user.change === 'down' ? (
                    <ChevronDown className="ml-auto h-4 w-4 text-red-500" />
                  ) : (
                    <span className="ml-auto inline-block h-4 w-4 text-gray-400">-</span>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Leaderboard;
