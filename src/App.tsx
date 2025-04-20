
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/context/AuthContext";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

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

const queryClient = new QueryClient();

const App = () => (
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

export default App;
