export default function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-white/10 bg-linear-to-br from-black via-slate-950 to-black text-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-linear-to-r from-sky-500/3 via-transparent to-violet-500/3" />
        <div className="absolute -top-20 left-1/4 w-48 h-48 md:w-72 md:h-72 bg-sky-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 right-1/4 w-48 h-48 md:w-72 md:h-72 bg-violet-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-10">
          <div>
            <h3 className="text-2xl sm:text-3xl font-black bg-linear-to-r from-sky-400 to-violet-500 bg-clip-text text-transparent">
              CV_Decode
            </h3>
            <p className="text-sm sm:text-base text-slate-400 mt-4 leading-relaxed max-w-md">
              AI-powered resume intelligence platform helping students and professionals optimize resumes, improve ATS scores, and prepare for interviews.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Platform</h4>
            <ul className="space-y-2 text-slate-400">
              <li>ATS Analyzer</li>
              <li>AI Feedback</li>
              <li>Interview Prep</li>
              <li>Job Match Score</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-slate-400">
              <li>Resume Tips</li>
              <li>Career Guidance</li>
              <li>Blog</li>
              <li>FAQs</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-slate-400">
              <li>support@resumeai.com</li>
              <li>24/7 AI Assistance</li>
              <li>Global Access</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center md:items-center justify-between gap-4 text-center md:text-left">
          <p className="text-slate-500 text-sm">
            © 2026 ResumeAI. All Rights Reserved.
          </p>

          <div className="flex flex-wrap justify-center md:justify-end items-center gap-4 sm:gap-6 text-slate-400 text-sm">
            <button className="hover:text-sky-400 transition-colors">Privacy Policy</button>
            <button className="hover:text-sky-400 transition-colors">Terms of Service</button>
            <button className="hover:text-sky-400 transition-colors">Security</button>
          </div>
        </div>
      </div>
    </footer>
  );
}