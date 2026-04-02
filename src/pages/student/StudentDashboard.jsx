import StatCard from '../../components/shared/StatCard';
import CourseCard from '../../components/shared/CourseCard';
import { courses } from '../../data/dummyData';

export default function StudentDashboard() {
  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <h1 className="text-3xl font-bold mb-6">Student Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <StatCard label="Enrolled Courses" value="3" />
        <StatCard label="Completed Lessons" value="12" />
        <StatCard label="Average Score" value="84%" />
      </div>

      <h2 className="text-2xl font-semibold mb-4">My Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            title={course.title}
            instructor={course.instructor}
            progress={course.progress}
          />
        ))}
      </div>
    </div>
  );
}