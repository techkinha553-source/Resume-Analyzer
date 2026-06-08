export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold mb-6">
        ⚙️ Settings
      </h1>

      <div className="max-w-2xl space-y-6">

        <div className="bg-gray-900 p-6 rounded-2xl">
          <h3 className="font-semibold mb-3">
            Account
          </h3>

          <input
            className="w-full p-3 rounded-xl bg-gray-800"
            placeholder="Your Name"
          />
        </div>

        <div className="bg-gray-900 p-6 rounded-2xl">
          <h3 className="font-semibold mb-3">
            Email
          </h3>

          <input
            className="w-full p-3 rounded-xl bg-gray-800"
            placeholder="Email Address"
          />
        </div>

        <div className="bg-gray-900 p-6 rounded-2xl">
          <button className="bg-green-600 px-6 py-3 rounded-xl">
            Save Changes
          </button>
        </div>

      </div>
    </div>
  );
}