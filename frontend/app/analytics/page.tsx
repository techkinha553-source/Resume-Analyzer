export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold mb-4">
        📊 Analytics Dashboard
      </h1>

      <p className="text-gray-400 mb-10">
        Track resume performance and ATS trends.
      </p>

      <div className="grid md:grid-cols-4 gap-6">
        <div className="bg-gray-900 p-6 rounded-2xl">
          <h3 className="text-gray-400">Total Reports</h3>
          <p className="text-3xl font-bold">24</p>
        </div>

        <div className="bg-gray-900 p-6 rounded-2xl">
          <h3 className="text-gray-400">Average ATS</h3>
          <p className="text-3xl font-bold text-green-500">82%</p>
        </div>

        <div className="bg-gray-900 p-6 rounded-2xl">
          <h3 className="text-gray-400">Best Score</h3>
          <p className="text-3xl font-bold text-sky-500">96%</p>
        </div>

        <div className="bg-gray-900 p-6 rounded-2xl">
          <h3 className="text-gray-400">Interviews Predicted</h3>
          <p className="text-3xl font-bold text-violet-500">18</p>
        </div>
      </div>
    </div>
  );
}