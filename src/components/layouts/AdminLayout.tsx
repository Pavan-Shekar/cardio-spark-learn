
import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';
import { LayoutDashboard, Users, BookOpen, FileText, Settings, LogOut, Heart } from 'lucide-react';

const AdminLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  const links = [
    { to: '/admin/dashboard', label: 'Dashboard', icon: <LayoutDashboard /> },
    { to: '/admin/students', label: 'Students', icon: <Users /> },
    { to: '/admin/tutorials', label: 'Tutorials', icon: <BookOpen /> },
    { to: '/admin/quizzes', label: 'Quizzes', icon: <FileText /> },
    { to: '/admin/settings', label: 'Settings', icon: <Settings /> },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="flex h-screen flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <Heart className="h-8 w-8 text-ecg-secondary animate-pulse" />
                <span className="text-2xl font-bold text-ecg-primary">MyECGProject <span className="text-sm font-normal text-gray-600">Admin</span></span>
              </Link>
            </div>
            <div className="flex items-center">
              <span className="mr-4 text-gray-600 hidden md:inline-block">
                Admin: {user?.name || 'Administrator'}
              </span>
              <Button variant="ghost" onClick={handleSignOut} className="text-gray-600">
                <LogOut className="h-5 w-5 mr-2" />
                <span>Sign Out</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-64 bg-white border-r border-gray-200 shadow-sm">
          <nav className="flex flex-col p-4 h-full">
            <div className="space-y-1">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`flex items-center px-4 py-3 rounded-md transition-colors ${
                    isActive(link.to)
                      ? 'bg-ecg-primary text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <span className="mr-3">{link.icon}</span>
                  <span className="font-medium">{link.label}</span>
                </Link>
              ))}
            </div>
            <div className="mt-auto">
              <Button 
                variant="ghost" 
                onClick={handleSignOut} 
                className="w-full justify-start text-gray-600 hover:bg-gray-100"
              >
                <LogOut className="h-5 w-5 mr-3" />
                <span>Sign Out</span>
              </Button>
            </div>
          </nav>
        </div>

        {/* Main content */}
        <main className="flex-1 overflow-auto bg-gray-50">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
