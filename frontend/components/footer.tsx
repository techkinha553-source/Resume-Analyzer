export default function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-white/10 bg-linear-to-br from-black via-slate-950 to-black text-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-linear-to-r from-sky-500/3 via-transparent to-violet-500/3" />
        <div className="absolute -top-20 left-1/4 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 right-1/4 w-72 h-72 bg-violet-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          <div>
            <h3 className="text-3xl font-black bg-linear-to-r from-sky-400 to-violet-500 bg-clip-text text-transparent">
              ResumeAI
            </h3>
            <p className="text-slate-400 mt-4 leading-relaxed">
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

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © 2026 ResumeAI. All Rights Reserved.
          </p>

          <div className="flex items-center gap-6 text-slate-400 text-sm">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Security</span>
          </div>
        </div>
      </div>
    </footer>
  );
}