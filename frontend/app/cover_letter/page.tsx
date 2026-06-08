export default function CoverLetterPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-black via-violet-950 to-black text-white">

      <div className="max-w-4xl mx-auto px-6 py-20">

        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            AI Cover Letter Generator
          </h1>

          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Generate professional ATS-friendly cover letters tailored
            to your resume and dream job within seconds.
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-lg border border-violet-500/20 rounded-3xl p-8 shadow-2xl">

          <input
            placeholder="Full Name"
            className="w-full mb-4 p-4 rounded-xl bg-black/40 border border-violet-500/30 focus:outline-none focus:border-violet-400"
          />

          <input
            placeholder="Email Address"
            className="w-full mb-4 p-4 rounded-xl bg-black/40 border border-violet-500/30 focus:outline-none focus:border-violet-400"
          />

          <input
            placeholder="Target Job Role"
            className="w-full mb-4 p-4 rounded-xl bg-black/40 border border-violet-500/30 focus:outline-none focus:border-violet-400"
          />

          <input
            placeholder="Company Name"
            className="w-full mb-4 p-4 rounded-xl bg-black/40 border border-violet-500/30 focus:outline-none focus:border-violet-400"
          />

          <textarea
            placeholder="Paste Job Description..."
            className="w-full h-40 p-4 rounded-xl bg-black/40 border border-violet-500/30 focus:outline-none focus:border-violet-400 mb-6"
          />

          <button className="w-full py-4 rounded-xl bg-linear-to-r from-violet-600 via-purple-600 to-violet-800 font-semibold text-lg hover:scale-[1.02] transition-all">
            Generate Cover Letter
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">

          <div className="bg-white/5 p-6 rounded-2xl border border-violet-500/20">
            <h3 className="font-semibold mb-2">ATS Optimized</h3>
            <p className="text-gray-400 text-sm">
              Designed to pass Applicant Tracking Systems.
            </p>
          </div>

          <div className="bg-white/5 p-6 rounded-2xl border border-violet-500/20">
            <h3 className="font-semibold mb-2">AI Powered</h3>
            <p className="text-gray-400 text-sm">
              Generates personalized and professional cover letters.
            </p>
          </div>

          <div className="bg-white/5 p-6 rounded-2xl border border-violet-500/20">
            <h3 className="font-semibold mb-2">Instant Results</h3>
            <p className="text-gray-400 text-sm">
              Get your cover letter in seconds and download instantly.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}