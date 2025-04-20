
import React, { useEffect, useState } from 'react';
import QuizCard from './QuizCard';
import { supabase } from '@/lib/supabase';
import { useToast } from '@/hooks/use-toast';

// Define quiz type based on our database schema
type Quiz = {
  id: string;
  title: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  questions: any[];
  created_at?: string;
  updated_at?: string;
};

const QuizList = () => {
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    async function fetchQuizzes() {
      try {
        const { data, error } = await supabase.from('quizzes').select('*');
        
        if (error) {
          console.error('Error fetching quizzes:', error);
          toast({
            title: 'Failed to load quizzes',
            description: error.message,
            variant: 'destructive',
          });
          return;
        }
        
        if (data && data.length > 0) {
          setQuizzes(data as Quiz[]);
          console.log('Loaded quizzes from Supabase:', data);
        } else {
          console.log('No quizzes found in database, using mock data');
          // If no quizzes in DB, use mock data
          setQuizzes(mockQuizzes);
        }
      } catch (error) {
        console.error('Exception fetching quizzes:', error);
        setQuizzes(mockQuizzes);
      } finally {
        setLoading(false);
      }
    }

    fetchQuizzes();
  }, [toast]);

  // Mock quiz data (fallback if database is empty)
  const mockQuizzes = [
    {
      id: '1',
      title: 'ECG Basics Quiz',
      description: 'Test your knowledge of fundamental ECG concepts and terminology.',
      difficulty: 'Easy' as const,
      questions: [],
      created_at: new Date().toISOString(),
    },
    {
      id: '2',
      title: 'Rhythm Identification',
      description: 'Identify normal and abnormal cardiac rhythms from ECG strips.',
      difficulty: 'Medium' as const,
      questions: [],
      created_at: new Date().toISOString(),
    },
    {
      id: '3',
      title: 'Axis & Hypertrophy',
      description: 'Analyze cardiac axis and chamber enlargement patterns.',
      difficulty: 'Medium' as const,
      questions: [],
      created_at: new Date().toISOString(),
    },
    {
      id: '4',
      title: 'Bundle Branch Blocks',
      description: 'Identify different types of conduction blocks in the heart.',
      difficulty: 'Hard' as const,
      questions: [],
      created_at: new Date().toISOString(),
    },
    {
      id: '5',
      title: 'Acute Coronary Syndromes',
      description: 'Recognize ECG patterns in various forms of heart attacks.',
      difficulty: 'Hard' as const,
      questions: [],
      created_at: new Date().toISOString(),
    },
    {
      id: '6',
      title: 'Mixed Case Scenarios',
      description: 'Test your knowledge with a mix of different ECG cases and challenges.',
      difficulty: 'Hard' as const,
      questions: [],
      created_at: new Date().toISOString(),
    },
  ];

  if (loading) {
    return <div className="py-8 text-center">Loading quizzes...</div>;
  }

  return (
    <div className="py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {quizzes.map((quiz) => (
          <QuizCard
            key={quiz.id}
            id={quiz.id}
            title={quiz.title}
            description={quiz.description}
            questionCount={quiz.questions?.length || 10}
            difficulty={quiz.difficulty}
            estimatedTime={`${quiz.questions?.length || 10} minutes`}
          />
        ))}
      </div>
    </div>
  );
};

export default QuizList;
