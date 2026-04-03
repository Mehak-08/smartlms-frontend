export default function Analytics() {
  const stats = [
    {
      title: "Total Courses",
      value: 5
    },
    {
      title: "Total Students",
      value: 120
    },
    {
      title: "Average Quiz Score",
      value: "82%"
    },
    {
      title: "Course Completion",
      value: "74%"
    }
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Teacher Analytics</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className="border rounded-xl p-6 shadow bg-white"
          >
            <h2 className="text-lg font-medium text-gray-600">
              {item.title}
            </h2>

            <p className="text-4xl font-bold mt-2">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}