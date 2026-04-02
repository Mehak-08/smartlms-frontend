export default function StatCard({ label, value }) {
  return (
    <div className="bg-white rounded-2xl shadow p-5">
      <p className="text-slate-500">{label}</p>
      <h3 className="text-2xl font-bold text-slate-800 mt-2">{value}</h3>
    </div>
  );
}