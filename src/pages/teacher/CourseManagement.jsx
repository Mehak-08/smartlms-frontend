import { useState } from "react";

export default function CourseManagement() {
  const [courses, setCourses] = useState([
    {
      title: "Data Structures",
      description: "Stacks, Queues, Trees"
    }
  ]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addCourse = () => {
    if (!title || !description) return;

    setCourses([
      ...courses,
      { title, description }
    ]);

    setTitle("");
    setDescription("");
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Course Management</h1>

      <div className="border rounded-xl p-4 mb-6">
        <h2 className="text-xl font-semibold mb-4">Create New Course</h2>

        <input
          type="text"
          placeholder="Course Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 rounded w-full mb-3"
        />

        <textarea
          placeholder="Course Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-2 rounded w-full mb-3"
        />

        <button
          onClick={addCourse}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add Course
        </button>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Your Courses</h2>

        <div className="grid gap-4">
          {courses.map((course, index) => (
            <div key={index} className="border rounded-xl p-4 shadow">
              <h3 className="text-xl font-bold">{course.title}</h3>
              <p>{course.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}