import { Outlet } from "react-router-dom";

export default function TeacherLayout() {
  return (
    <div>
      <h1 className="text-2xl font-bold p-4">Teacher Panel</h1>
      <Outlet />
    </div>
  );
}