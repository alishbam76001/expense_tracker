export default function Register() {
  return (
    <form
      action="/register"    // or your backend endpoint
      method="POST"
      className="max-w-md mx-auto mt-20 p-6 bg-white rounded shadow"
    >
    
      <input
        name="name"
        placeholder="Name"
        required
        className="w-full mb-4 p-3 border border-gray-300 rounded"
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        required
        className="w-full mb-4 p-3 border border-gray-300 rounded"
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        required
        className="w-full mb-4 p-3 border border-gray-300 rounded"
      />
      <input
        name="confirm"
        type="password"
        placeholder="Confirm Password"
        required
        className="w-full mb-4 p-3 border border-gray-300 rounded"
      />
      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition"
      >
        Register
      </button>
    </form>
  );
}
