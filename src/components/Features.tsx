
import React from 'react';
import { Book, Video, Award, Play } from 'lucide-react';

const features = [
  {
    icon: <Book className="h-10 w-10 text-ecg-primary" />,
    title: 'Comprehensive Tutorials',
    description: 'Learn ECG basics and advanced concepts through step-by-step tutorials with clear explanations and visual aids.'
  },
  {
    icon: <Video className="h-10 w-10 text-ecg-primary" />,
    title: 'Animated Explanations',
    description: 'Watch animated videos that break down complex ECG patterns and pathologies for easier understanding.'
  },
  {
    icon: <Play className="h-10 w-10 text-ecg-primary" />,
    title: 'Interactive Quizzes',
    description: 'Test your knowledge with randomized questions that change each time for continuous practice and learning.'
  },
  {
    icon: <Award className="h-10 w-10 text-ecg-primary" />,
    title: 'Progress Tracking',
    description: 'Monitor your learning progress and compete with peers on the leaderboard for added motivation.'
  }
];

const Features = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-ecg-dark mb-4">Learn ECG Interpretation The Right Way</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            MyECGProject offers a comprehensive learning experience designed to help students and healthcare professionals master ECG interpretation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow card-hover border border-gray-100"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-ecg-dark mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
