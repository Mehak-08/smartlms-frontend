import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from '../pages/public/LandingPage';
import Login from '../pages/auth/Login';
import Signup from '../pages/auth/Signup';

import StudentDashboard from '../pages/student/StudentDashboard';
import MyCourses from '../pages/student/MyCourses';
import CourseDetails from '../pages/student/CourseDetails';
import LessonView from '../pages/student/LessonView';

import TeacherLayout from '../layouts/TeacherLayout';
import Dashboard from '../pages/teacher/Dashboard';
import CourseManagement from '../pages/teacher/CourseManagement';
import QuizManagement from '../pages/teacher/QuizManagement';
import StudentMonitoring from '../pages/teacher/StudentMonitoring';
import Analytics from '../pages/teacher/Analytics';

import AdminDashboard from '../pages/admin/AdminDashboard';
import ChatbotPage from '../pages/ai/ChatbotPage';
import AnalyticsPage from '../pages/ai/AnalyticsPage';
import NotFound from '../pages/NotFound';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Student Routes */}
        <Route path="/student/dashboard" element={<StudentDashboard />} />
        <Route path="/student/courses" element={<MyCourses />} />
        <Route path="/student/courses/:id" element={<CourseDetails />} />
        <Route path="/student/lesson/:id" element={<LessonView />} />

        {/* Teacher Routes */}
        <Route path="/teacher" element={<TeacherLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="courses" element={<CourseManagement />} />
          <Route path="quizzes" element={<QuizManagement />} />
          <Route path="students" element={<StudentMonitoring />} />
          <Route path="analytics" element={<Analytics />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />

        {/* AI Routes */}
        <Route path="/chatbot" element={<ChatbotPage />} />
        <Route path="/analytics" element={<AnalyticsPage />} />

        {/* Fallback */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}