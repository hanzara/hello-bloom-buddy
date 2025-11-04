import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { AppHeader } from "@/components/AppHeader";
import { AuthProvider } from "@/contexts/AuthContext";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import Exams from "./pages/Exams";
import Results from "./pages/Results";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AdminDashboard from "./pages/dashboard/AdminDashboard";
import HeadteacherDashboard from "./pages/dashboard/HeadteacherDashboard";
import TeacherDashboard from "./pages/dashboard/TeacherDashboard";
import ParentDashboard from "./pages/dashboard/ParentDashboard";
import StudentDashboard from "./pages/dashboard/StudentDashboard";
import StaffDashboard from "./pages/dashboard/StaffDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            {/* Public routes */}
            <Route path="/login" element={<Login />} />
            
            {/* Protected routes with layout */}
            <Route
              path="/*"
              element={
                <ProtectedRoute>
                  <SidebarProvider defaultOpen={true}>
                    <div className="flex min-h-screen w-full">
                      <AppSidebar />
                      <div className="flex-1 flex flex-col w-full">
                        <AppHeader />
                        <main className="flex-1 bg-background">
                          <Routes>
                            <Route path="/" element={<Dashboard />} />
                            <Route path="/students" element={<Students />} />
                            <Route path="/exams" element={<Exams />} />
                            <Route path="/results" element={<Results />} />
                            
                            {/* Role-based dashboards */}
                            <Route path="/dashboard/admin" element={
                              <ProtectedRoute allowedRoles={['admin']}>
                                <AdminDashboard />
                              </ProtectedRoute>
                            } />
                            <Route path="/dashboard/headteacher" element={
                              <ProtectedRoute allowedRoles={['headteacher']}>
                                <HeadteacherDashboard />
                              </ProtectedRoute>
                            } />
                            <Route path="/dashboard/teacher" element={
                              <ProtectedRoute allowedRoles={['teacher']}>
                                <TeacherDashboard />
                              </ProtectedRoute>
                            } />
                            <Route path="/dashboard/staff" element={
                              <ProtectedRoute allowedRoles={['staff']}>
                                <StaffDashboard />
                              </ProtectedRoute>
                            } />
                            <Route path="/dashboard/parent" element={
                              <ProtectedRoute allowedRoles={['parent']}>
                                <ParentDashboard />
                              </ProtectedRoute>
                            } />
                            <Route path="/dashboard/student" element={
                              <ProtectedRoute allowedRoles={['student']}>
                                <StudentDashboard />
                              </ProtectedRoute>
                            } />
                            
                            {/* Admin-only signup route */}
                            <Route path="/signup" element={<Signup />} />
                            
                            {/* Catch-all */}
                            <Route path="*" element={<NotFound />} />
                          </Routes>
                        </main>
                      </div>
                    </div>
                  </SidebarProvider>
                </ProtectedRoute>
              }
            />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
