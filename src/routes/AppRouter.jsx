import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from '../pages/public/LandingPage';
import Login from '../pages/auth/Login';
import Signup from '../pages/auth/Signup';
import StudentDashboard from '../pages/student/StudentDashboard';
import MyCourses from '../pages/student/MyCourses';
import CourseDetails from '../pages/student/CourseDetails';
import LessonView from '../pages/student/LessonView';
import TeacherDashboard from '../pages/teacher/TeacherDashboard';
import CreateCourse from '../pages/teacher/CreateCourse';
import QuizPage from '../pages/teacher/QuizPage';
import AdminDashboard from '../pages/admin/AdminDashboard';
import ChatbotPage from '../pages/ai/ChatbotPage';
import AnalyticsPage from '../pages/ai/AnalyticsPage';
import NotFound from '../pages/NotFound';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/student/dashboard" element={<StudentDashboard />} />
        <Route path="/student/courses" element={<MyCourses />} />
        <Route path="/student/courses/:id" element={<CourseDetails />} />
        <Route path="/student/lesson/:id" element={<LessonView />} />

        <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
        <Route path="/teacher/create-course" element={<CreateCourse />} />
        <Route path="/teacher/quiz" element={<QuizPage />} />

        <Route path="/admin/dashboard" element={<AdminDashboard />} />

        <Route path="/chatbot" element={<ChatbotPage />} />
        <Route path="/analytics" element={<AnalyticsPage />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}