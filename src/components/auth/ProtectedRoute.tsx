
import React, { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import LoadingScreen from '@/components/ui/LoadingScreen';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireAdmin?: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  requireAdmin = false,
}) => {
  const { user, loading, isAdmin, refreshUser } = useAuth();
  const location = useLocation();

  // Refresh user data on route change to ensure we have latest permission data
  useEffect(() => {
    if (!loading && user) {
      refreshUser();
    }
  }, [location.pathname]);

  if (loading) {
    return <LoadingScreen message="Verifying access..." />;
  }

  if (!user) {
    console.log('ProtectedRoute: No user found, redirecting to login');
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (requireAdmin && !isAdmin) {
    console.log('ProtectedRoute: User is not admin, redirecting to unauthorized');
    return <Navigate to="/unauthorized" replace />;
  }

  console.log('ProtectedRoute: Access granted for', isAdmin ? 'admin' : 'student');
  return <>{children}</>;
};

export default ProtectedRoute;
