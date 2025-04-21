
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface QuizCardProps {
  id: string;
  title: string;
  description: string;
  questionCount: number;
  difficulty: 'Easy' | 'Medium' | 'Hard' | string;
  estimatedTime: string;
  thumbnail?: string;
}

const QuizCard: React.FC<QuizCardProps> = ({
  id,
  title,
  description,
  questionCount,
  difficulty,
  estimatedTime,
  thumbnail,
}) => {
  // Function to determine the difficulty badge color
  const getDifficultyBadgeColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':
        return 'bg-green-100 text-green-800';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'Hard':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className="overflow-hidden card-hover">
      <div className="h-40 bg-gray-200 relative">
        {thumbnail ? (
          <img 
            src={thumbnail} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-ecg-light">
            <div className="text-ecg-primary text-xl font-medium">ECG Quiz</div>
          </div>
        )}
      </div>
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl text-ecg-dark">{title}</CardTitle>
          <span className={`text-xs px-2 py-1 rounded-full ${getDifficultyBadgeColor(difficulty)}`}>
            {difficulty}
          </span>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between text-sm text-gray-500">
          <span>{questionCount} questions</span>
          <span>~{estimatedTime}</span>
        </div>
      </CardContent>
      <CardFooter className="border-t pt-4">
        <Button asChild className="w-full bg-ecg-primary hover:bg-ecg-dark text-white">
          <Link to={`/quizzes/${id}`}>
            Start Quiz
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default QuizCard;
