export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <span className="px-4 py-2 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20">
          About ResumeAI
        </span>

        <h1 className="text-5xl md:text-6xl font-black mt-6 mb-6">
          Building Better Careers with AI
        </h1>

        <p className="text-lg text-gray-500 max-w-3xl mx-auto">
          ResumeAI is an AI-powered resume analysis platform designed to help
          students, fresh graduates, and professionals create resumes that
          stand out in modern recruitment systems.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="p-8 rounded-3xl border border-gray-200 shadow-sm">
          <h3 className="text-2xl font-bold mb-3">🎯 Our Mission</h3>
          <p className="text-gray-600">
            To help job seekers improve their resumes, increase ATS scores,
            and gain more interview opportunities using intelligent insights.
          </p>
        </div>

        <div className="p-8 rounded-3xl border border-gray-200 shadow-sm">
          <h3 className="text-2xl font-bold mb-3">🚀 What We Do</h3>
          <p className="text-gray-600">
            We analyze resumes, identify missing keywords, generate recruiter
            feedback, estimate ATS compatibility, and provide interview
            preparation assistance.
          </p>
        </div>

        <div className="p-8 rounded-3xl border border-gray-200 shadow-sm">
          <h3 className="text-2xl font-bold mb-3">💡 Our Vision</h3>
          <p className="text-gray-600">
            To become a complete AI career companion that helps users from
            resume creation to interview success.
          </p>
        </div>
      </div>

      <section className="mb-16">
        <h2 className="text-4xl font-bold mb-6">Key Features</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl  bg-linear-to-r
                          from-sky-500
                          to-violet-500
                          text-white
                          hover:scale-105
                          transition-all
                          duration-300">
            <h3 className="font-semibold text-xl mb-2 text-black">ATS Resume Analysis</h3>
            <p className="text-gray-700">
              Evaluate resume quality and compatibility with Applicant Tracking Systems.
            </p>
          </div>

          <div className="p-6 rounded-2xl  bg-linear-to-r
                          from-sky-500
                          to-violet-500
                          text-white
                          hover:scale-105
                          transition-all
                          duration-300">
            <h3 className="font-semibold text-xl mb-2 text-black">AI Recruiter Feedback</h3>
            <p className="text-gray-700">
              Receive personalized suggestions similar to recruiter reviews.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-linear-to-r
                          from-sky-500
                          to-violet-500
                          text-white
                          hover:scale-105
                          transition-all
                          duration-300">
            <h3 className="font-semibold text-xl mb-2 text-black">Interview Preparation</h3>
            <p className="text-gray-700">
              Generate role-specific interview questions and preparation tips.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-linear-to-r
                          from-sky-500
                          to-violet-500
                          text-white">
            <h3 className="font-semibold text-xl mb-2 text-black">Keyword Gap Detection</h3>
            <p className="text-gray-700">
              Discover important missing skills and keywords from your resume.
            </p>
          </div>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-4xl font-bold mb-4">Why ResumeAI?</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          ResumeAI combines modern AI technology, ATS analysis, and recruiter-style insights into one platform. Our goal is to help users build stronger resumes, improve job application success rates, and confidently prepare for their careers.
        </p>
      </section>
    </div>
  );
}