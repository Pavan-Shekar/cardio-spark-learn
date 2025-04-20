
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface TutorialCardProps {
  id: string;
  title: string;
  description: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  imageUrl?: string;
}

const TutorialCard: React.FC<TutorialCardProps> = ({
  id,
  title,
  description,
  level,
  duration,
  imageUrl,
}) => {
  // Function to determine the level badge color
  const getLevelBadgeColor = (level: string) => {
    switch (level) {
      case 'Beginner':
        return 'bg-green-100 text-green-800';
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-800';
      case 'Advanced':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className="overflow-hidden card-hover">
      <div className="h-48 bg-gray-200 relative">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-ecg-light">
            <div className="text-ecg-primary text-xl font-medium">ECG Tutorial</div>
          </div>
        )}
      </div>
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl text-ecg-dark">{title}</CardTitle>
          <span className={`text-xs px-2 py-1 rounded-full ${getLevelBadgeColor(level)}`}>
            {level}
          </span>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-sm text-gray-500">
          <span>Duration: {duration}</span>
        </div>
      </CardContent>
      <CardFooter className="border-t pt-4">
        <Button asChild className="w-full bg-ecg-primary hover:bg-ecg-dark text-white">
          <Link to={`/tutorials/${id}`}>
            Start Tutorial
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TutorialCard;
