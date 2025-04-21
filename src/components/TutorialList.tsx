
import React, { useEffect, useState } from 'react';
import TutorialCard from './TutorialCard';
import { supabase } from '@/lib/supabase';
import { useToast } from '@/hooks/use-toast';

// Define tutorial type based on our database schema
type Tutorial = {
  id: string;
  title: string;
  description: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | string;
  duration: string;
  created_at?: string;
  updated_at?: string;
};

const TutorialList = () => {
  const [tutorials, setTutorials] = useState<Tutorial[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    async function fetchTutorials() {
      setLoading(true);
      try {
        const { data, error } = await supabase.from('tutorials').select('*');
        if (error) {
          console.error('Error fetching tutorials:', error);
          toast({
            title: 'Failed to load tutorials',
            description: error.message,
            variant: 'destructive',
          });
          // Fall back to mock data if database fetch fails
          setTutorials(mockTutorials);
        } else if (data && data.length > 0) {
          setTutorials(data as Tutorial[]);
          console.log('Loaded tutorials from Supabase:', data);
        } else {
          // Fall back to mock data if no tutorials in database
          setTutorials(mockTutorials);
          console.log('No tutorials in database, using mock data');
        }
      } catch (error) {
        console.error('Exception fetching tutorials:', error);
        toast({
          title: 'Error loading tutorials',
          description: 'An unexpected error occurred.',
          variant: 'destructive',
        });
        // Fall back to mock data on exception
        setTutorials(mockTutorials);
      } finally {
        setLoading(false);
      }
    }

    fetchTutorials();
  }, [toast]);

  if (loading) {
    return <div className="py-8 text-center">Loading tutorials...</div>;
  }

  return (
    <div className="py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tutorials.map((tutorial) => (
          <TutorialCard
            key={tutorial.id}
            id={tutorial.id}
            title={tutorial.title}
            description={tutorial.description}
            level={tutorial.level as 'Beginner' | 'Intermediate' | 'Advanced'}
            duration={tutorial.duration}
          />
        ))}
      </div>
    </div>
  );
};

// Tutorial mock data for fallback
const mockTutorials = [
  {
    id: '1',
    title: 'ECG Basics',
    description: 'Introduction to ECG components and how to read a basic ECG strip.',
    level: 'Beginner',
    duration: '25 minutes',
  },
  {
    id: '2',
    title: 'P Waves & PR Interval',
    description: 'Understanding atrial depolarization and AV nodal conduction.',
    level: 'Beginner',
    duration: '20 minutes',
  },
  {
    id: '3',
    title: 'QRS Complex Analysis',
    description: 'Detailed breakdown of ventricular depolarization patterns.',
    level: 'Intermediate',
    duration: '30 minutes',
  },
  {
    id: '4',
    title: 'ST Segment & T Waves',
    description: 'Learn to identify abnormalities in ventricular repolarization.',
    level: 'Intermediate',
    duration: '25 minutes',
  },
  {
    id: '5',
    title: 'Arrhythmia Recognition',
    description: 'Identifying common cardiac rhythm disturbances.',
    level: 'Advanced',
    duration: '40 minutes',
  },
  {
    id: '6',
    title: 'Myocardial Infarction Patterns',
    description: 'ECG changes in different types of heart attacks.',
    level: 'Advanced',
    duration: '35 minutes',
  },
];

export default TutorialList;
