import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Teacher Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link to="/teacher/courses">
          <div className="p-6 border rounded-xl shadow hover:shadow-lg cursor-pointer">
            <h2 className="text-xl font-semibold">Course Management</h2>
            <p>Manage and upload course content</p>
          </div>
        </Link>

        <Link to="/teacher/quizzes">
          <div className="p-6 border rounded-xl shadow hover:shadow-lg cursor-pointer">
            <h2 className="text-xl font-semibold">Quiz Management</h2>
            <p>Create and manage quizzes</p>
          </div>
        </Link>

        <Link to="/teacher/students">
          <div className="p-6 border rounded-xl shadow hover:shadow-lg cursor-pointer">
            <h2 className="text-xl font-semibold">Student Monitoring</h2>
            <p>Track student progress and performance</p>
          </div>
        </Link>

        <Link to="/teacher/analytics">
          <div className="p-6 border rounded-xl shadow hover:shadow-lg cursor-pointer">
            <h2 className="text-xl font-semibold">Analytics</h2>
            <p>View course and quiz statistics</p>
          </div>
        </Link>
      </div>
    </div>
  );
}