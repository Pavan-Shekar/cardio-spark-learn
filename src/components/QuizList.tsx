
import React, { useEffect, useState } from 'react';
import QuizCard from './QuizCard';
import { supabase } from '@/lib/supabase';
import { useToast } from '@/hooks/use-toast';

// Define quiz type based on our database schema
type Quiz = {
  id: string;
  title: string;
  description: string;
  difficulty: string;
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
      setLoading(true);
      try {
        const { data, error } = await supabase.from('quizzes').select('*');
        if (error) {
          console.error('Error fetching quizzes:', error);
          toast({
            title: 'Failed to load quizzes',
            description: error.message,
            variant: 'destructive',
          });
        } else if (data && data.length > 0) {
          setQuizzes(data as Quiz[]);
          console.log('Loaded quizzes from Supabase:', data);
        } else {
          setQuizzes([]);
        }
      } catch (error) {
        console.error('Exception fetching quizzes:', error);
        toast({
          title: 'Error loading quizzes',
          description: 'An unexpected error occurred.',
          variant: 'destructive',
        });
        setQuizzes([]);
      } finally {
        setLoading(false);
      }
    }

    fetchQuizzes();
  }, [toast]);

  if (loading) {
    return <div className="py-8 text-center">Loading quizzes...</div>;
  }

  if (quizzes.length === 0) {
    return (
      <div className="py-8 text-center text-gray-500">
        No quizzes available. Ask an admin to add quizzes in the admin dashboard.
      </div>
    );
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
            questionCount={quiz.questions?.length ?? 0}
            difficulty={quiz.difficulty}
            estimatedTime={`${quiz.questions?.length ?? 0} minutes`}
          />
        ))}
      </div>
    </div>
  );
};

export default QuizList;

