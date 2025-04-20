
import React from 'react';
import TutorialCard from './TutorialCard';

// Tutorial mock data
const tutorials = [
  {
    id: '1',
    title: 'ECG Basics',
    description: 'Introduction to ECG components and how to read a basic ECG strip.',
    level: 'Beginner' as const,
    duration: '25 minutes',
  },
  {
    id: '2',
    title: 'P Waves & PR Interval',
    description: 'Understanding atrial depolarization and AV nodal conduction.',
    level: 'Beginner' as const,
    duration: '20 minutes',
  },
  {
    id: '3',
    title: 'QRS Complex Analysis',
    description: 'Detailed breakdown of ventricular depolarization patterns.',
    level: 'Intermediate' as const,
    duration: '30 minutes',
  },
  {
    id: '4',
    title: 'ST Segment & T Waves',
    description: 'Learn to identify abnormalities in ventricular repolarization.',
    level: 'Intermediate' as const,
    duration: '25 minutes',
  },
  {
    id: '5',
    title: 'Arrhythmia Recognition',
    description: 'Identifying common cardiac rhythm disturbances.',
    level: 'Advanced' as const,
    duration: '40 minutes',
  },
  {
    id: '6',
    title: 'Myocardial Infarction Patterns',
    description: 'ECG changes in different types of heart attacks.',
    level: 'Advanced' as const,
    duration: '35 minutes',
  },
];

const TutorialList = () => {
  return (
    <div className="py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tutorials.map((tutorial) => (
          <TutorialCard
            key={tutorial.id}
            id={tutorial.id}
            title={tutorial.title}
            description={tutorial.description}
            level={tutorial.level}
            duration={tutorial.duration}
          />
        ))}
      </div>
    </div>
  );
};

export default TutorialList;
