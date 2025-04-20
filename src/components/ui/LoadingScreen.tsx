
import React from 'react';
import { Heart } from 'lucide-react';

const LoadingScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <Heart className="h-16 w-16 text-ecg-secondary animate-pulse" />
      <p className="mt-4 text-xl font-semibold text-ecg-primary">Loading...</p>
    </div>
  );
};

export default LoadingScreen;
