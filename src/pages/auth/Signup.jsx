export default function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full name"
            className="w-full border rounded-lg px-4 py-3"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border rounded-lg px-4 py-3"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded-lg px-4 py-3"
          />
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}