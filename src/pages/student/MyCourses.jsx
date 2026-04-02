import CourseCard from '../../components/shared/CourseCard';
import { courses } from '../../data/dummyData';

export default function MyCourses() {
  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <h1 className="text-3xl font-bold mb-6">My Courses</h1>
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