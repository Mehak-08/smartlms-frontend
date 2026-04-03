export default function StudentMonitoring() {
  const students = [
    {
      name: "Rahul Sharma",
      course: "Data Structures",
      progress: "80%",
      marks: 85
    },
    {
      name: "Priya Verma",
      course: "Operating Systems",
      progress: "65%",
      marks: 72
    },
    {
      name: "Aman Gupta",
      course: "DBMS",
      progress: "90%",
      marks: 94
    }
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Student Monitoring</h1>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-3 text-left">Student Name</th>
              <th className="border p-3 text-left">Course</th>
              <th className="border p-3 text-left">Progress</th>
              <th className="border p-3 text-left">Marks</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                <td className="border p-3">{student.name}</td>
                <td className="border p-3">{student.course}</td>
                <td className="border p-3">{student.progress}</td>
                <td className="border p-3">{student.marks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}