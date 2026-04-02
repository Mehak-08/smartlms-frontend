export default function LessonView() {
  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <h1 className="text-3xl font-bold mb-4">Lesson View</h1>
      <div className="bg-white p-6 rounded-2xl shadow space-y-4">
        <div className="h-64 bg-slate-200 rounded-xl flex items-center justify-center">
          Video Section
        </div>
        <div className="p-4 bg-slate-50 rounded-xl">
          Notes / PDF / Material Section
        </div>
      </div>
    </div>
  );
}