import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/context/AuthContext";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import { useEffect, useState } from "react";
import { supabase, initializeDatabase } from "@/lib/supabase";

// Pages
import Index from "./pages/Index";
import Tutorials from "./pages/Tutorials";
import Quizzes from "./pages/Quizzes";
import LeaderboardPage from "./pages/LeaderboardPage";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Unauthorized from "./pages/Unauthorized";

// Student Portal
import StudentDashboard from "./pages/student/Dashboard";
import MyProgress from "./pages/student/MyProgress";

// Admin Portal
import AdminDashboard from "./pages/admin/Dashboard";
import ManageTutorials from "./pages/admin/ManageTutorials";
import ManageQuizzes from "./pages/admin/ManageQuizzes";
import LoadingScreen from "./components/ui/LoadingScreen";

const queryClient = new QueryClient();

const App = () => {
  const [isSupabaseInitialized, setIsSupabaseInitialized] = useState(false);
  const [initError, setInitError] = useState<string | null>(null);
  const [dbInitialized, setDbInitialized] = useState(false);
  const [dbInitializing, setDbInitializing] = useState(false);

  useEffect(() => {
    // Check if Supabase is initialized properly
    const checkSupabaseConnection = async () => {
      try {
        // Simple test query to check connection
        await supabase.from('profiles').select('count', { count: 'exact', head: true });
        setIsSupabaseInitialized(true);
      } catch (error) {
        console.error('Supabase initialization error:', error);
        setInitError('Could not connect to Supabase. Please check your environment variables.');
      }
    };

    checkSupabaseConnection();
  }, []);

  useEffect(() => {
    // Initialize database tables after Supabase connection is established
    const setupDatabase = async () => {
      if (isSupabaseInitialized && !dbInitialized && !dbInitializing) {
        setDbInitializing(true);
        try {
          // Initialize the tables - removed reference to createDatabaseFunctions
          const initialized = await initializeDatabase();
          setDbInitialized(initialized);
        } catch (error) {
          console.error('Database initialization failed:', error);
        } finally {
          setDbInitializing(false);
        }
      }
    };

    setupDatabase();
  }, [isSupabaseInitialized, dbInitialized, dbInitializing]);

  if (initError) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-ecg-light">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Initialization Error</h1>
          <p className="text-gray-700 mb-4">{initError}</p>
          <p className="text-gray-600 mb-4">
            Please make sure you have set the following environment variables:
          </p>
          <ul className="list-disc pl-5 mb-4 text-gray-600">
            <li>VITE_SUPABASE_URL</li>
            <li>VITE_SUPABASE_ANON_KEY</li>
          </ul>
          <p className="text-gray-700">
            Configure these in your Supabase project settings.
          </p>
        </div>
      </div>
    );
  }

  if (!isSupabaseInitialized || dbInitializing) {
    return <LoadingScreen message={dbInitializing ? "Setting up database..." : "Connecting to Supabase..."} />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Index />} />
              <Route path="/tutorials" element={<Tutorials />} />
              <Route path="/quizzes" element={<Quizzes />} />
              <Route path="/leaderboard" element={<LeaderboardPage />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/unauthorized" element={<Unauthorized />} />

              {/* Student Routes */}
              <Route 
                path="/student/dashboard" 
                element={
                  <ProtectedRoute>
                    <StudentDashboard />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/student/progress" 
                element={
                  <ProtectedRoute>
                    <MyProgress />
                  </ProtectedRoute>
                } 
              />

              {/* Admin Routes */}
              <Route 
                path="/admin/dashboard" 
                element={
                  <ProtectedRoute requireAdmin={true}>
                    <AdminDashboard />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/admin/tutorials" 
                element={
                  <ProtectedRoute requireAdmin={true}>
                    <ManageTutorials />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/admin/quizzes" 
                element={
                  <ProtectedRoute requireAdmin={true}>
                    <ManageQuizzes />
                  </ProtectedRoute>
                } 
              />

              {/* Catch-all Route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default App;
