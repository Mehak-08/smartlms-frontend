import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      <header className="flex items-center justify-between px-8 py-4 bg-white shadow">
        <h1 className="text-2xl font-bold text-blue-600">SmartLMS</h1>
        <div className="space-x-4">
          <Link to="/login" className="text-slate-700 font-medium">Login</Link>
          <Link
            to="/signup"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            Sign Up
          </Link>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center px-8">
        <div className="text-center max-w-2xl">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            AI-Integrated Learning Management System
          </h2>
          <p className="text-slate-600 mb-6">
            Learn smarter with personalized courses, quizzes, analytics, and AI support.
          </p>
          <Link
            to="/login"
            className="bg-blue-600 text-white px-6 py-3 rounded-xl text-lg font-semibold"
          >
            Get Started
          </Link>
        </div>
      </main>
    </div>
  );
}