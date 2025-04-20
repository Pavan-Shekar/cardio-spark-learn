
import React from 'react';
import QuizCard from './QuizCard';

// Quiz mock data
const quizzes = [
  {
    id: '1',
    title: 'ECG Basics Quiz',
    description: 'Test your knowledge of fundamental ECG concepts and terminology.',
    questionCount: 10,
    difficulty: 'Easy' as const,
    estimatedTime: '15 minutes',
  },
  {
    id: '2',
    title: 'Rhythm Identification',
    description: 'Identify normal and abnormal cardiac rhythms from ECG strips.',
    questionCount: 12,
    difficulty: 'Medium' as const,
    estimatedTime: '20 minutes',
  },
  {
    id: '3',
    title: 'Axis & Hypertrophy',
    description: 'Analyze cardiac axis and chamber enlargement patterns.',
    questionCount: 8,
    difficulty: 'Medium' as const,
    estimatedTime: '15 minutes',
  },
  {
    id: '4',
    title: 'Bundle Branch Blocks',
    description: 'Identify different types of conduction blocks in the heart.',
    questionCount: 10,
    difficulty: 'Hard' as const,
    estimatedTime: '20 minutes',
  },
  {
    id: '5',
    title: 'Acute Coronary Syndromes',
    description: 'Recognize ECG patterns in various forms of heart attacks.',
    questionCount: 15,
    difficulty: 'Hard' as const,
    estimatedTime: '25 minutes',
  },
  {
    id: '6',
    title: 'Mixed Case Scenarios',
    description: 'Test your knowledge with a mix of different ECG cases and challenges.',
    questionCount: 20,
    difficulty: 'Hard' as const,
    estimatedTime: '30 minutes',
  },
];

const QuizList = () => {
  return (
    <div className="py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {quizzes.map((quiz) => (
          <QuizCard
            key={quiz.id}
            id={quiz.id}
            title={quiz.title}
            description={quiz.description}
            questionCount={quiz.questionCount}
            difficulty={quiz.difficulty}
            estimatedTime={quiz.estimatedTime}
          />
        ))}
      </div>
    </div>
  );
};

export default QuizList;
