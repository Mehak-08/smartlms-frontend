export default function CourseCard({ title, instructor, progress }) {
  return (
    <div className="bg-white rounded-2xl shadow p-5">
      <h3 className="text-lg font-bold text-slate-800">{title}</h3>
      <p className="text-slate-500 mt-1">Instructor: {instructor}</p>
      <p className="text-blue-600 mt-3 font-medium">Progress: {progress}%</p>
    </div>
  );
}