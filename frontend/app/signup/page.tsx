"use client";

import { useState } from "react";
import Link from "next/link";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="relative min-h-screen overflow-hidden bg-black flex items-center justify-center px-6">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-20 w-125 h-125 bg-violet-500/30 rounded-full blur-[140px]" />

        <div className="absolute bottom-0 right-0 w-125 h-125 bg-pink-500/25 rounded-full blur-[140px]" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-162.5 h-162.5 bg-fuchsia-500/10 rounded-full blur-[180px]" />
      </div>

      <div className="relative z-10 w-full max-w-5xl grid lg:grid-cols-2 gap-10 items-center">
        <div className="hidden lg:block text-white">
          <span className="px-4 py-2 rounded-full bg-white/10 border border-white/10 text-sm">
            🚀 AI Powered Resume Intelligence
          </span>

          <h1 className="text-6xl font-bold mt-6 leading-tight">
            Build a Resume
            <span className="bg-linear-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
              {" "}Recruiters Notice
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-300 max-w-xl">
            Create your account and unlock ATS scoring, recruiter insights,
            resume improvement suggestions, interview preparation, and job-match analysis.
          </p>

          <div className="grid grid-cols-2 gap-4 mt-10">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <h3 className="font-semibold">ATS Optimization</h3>
              <p className="text-gray-400 text-sm mt-2">
                Improve visibility across applicant tracking systems.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <h3 className="font-semibold">AI Feedback</h3>
              <p className="text-gray-400 text-sm mt-2">
                Get recruiter-style recommendations instantly.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <h3 className="font-semibold">Interview Prep</h3>
              <p className="text-gray-400 text-sm mt-2">
                Practice questions tailored to your profile.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <h3 className="font-semibold">Job Match</h3>
              <p className="text-gray-400 text-sm mt-2">
                Compare your resume against target roles.
              </p>
            </div>
          </div>
        </div>

        <div className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-3xl shadow-2xl p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-2xl bg-linear-to-r from-violet-500 to-pink-500 flex items-center justify-center text-3xl mx-auto mb-4">
              ✨
            </div>

            <h2 className="text-4xl font-bold text-white mb-2">
              Create Account
            </h2>

            <p className="text-gray-300">
              Join ResumeAI and start building a stronger professional profile.
            </p>
          </div>

          <input
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-white/5 border border-white/10 text-white p-4 rounded-xl mb-4 outline-none"
          />

          <input
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-white/5 border border-white/10 text-white p-4 rounded-xl mb-4 outline-none"
          />

          <input
            placeholder="Create Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-white/5 border border-white/10 text-white p-4 rounded-xl mb-6 outline-none"
          />

          <button className="w-full bg-linear-to-r from-violet-500 to-pink-500 text-white font-semibold py-4 rounded-xl hover:scale-[1.02] transition">
            Create Free Account
          </button>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-black px-4 text-gray-400">
                Or sign up with
              </span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <button className="flex items-center justify-center border border-white/10 bg-white/5 text-white py-3 rounded-xl hover:bg-white/10 transition">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.54 2.87 8.39 6.84 9.75.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.88-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.36-2.22-.26-4.56-1.14-4.56-5.09 0-1.13.39-2.05 1.03-2.77-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.06A9.3 9.3 0 0 1 12 6.84c.85 0 1.71.12 2.51.35 1.9-1.34 2.74-1.06 2.74-1.06.55 1.42.2 2.47.1 2.73.64.72 1.03 1.64 1.03 2.77 0 3.96-2.34 4.83-4.58 5.08.36.32.68.95.68 1.92 0 1.39-.01 2.5-.01 2.84 0 .27.18.6.69.49A10.25 10.25 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z"/>
              </svg>
            </button>

            <button className="flex items-center justify-center border border-white/10 bg-white/5 text-white py-3 rounded-xl hover:bg-white/10 transition">
              <svg width="22" height="22" viewBox="0 0 24 24">
                <path fill="#EA4335" d="M12 10.2v3.9h5.5c-.24 1.25-.95 2.3-2 3.02l3.24 2.52c1.89-1.74 2.98-4.3 2.98-7.36 0-.72-.06-1.42-.19-2.08H12z"/>
                <path fill="#34A853" d="M12 22c2.7 0 4.96-.89 6.61-2.42l-3.24-2.52c-.9.6-2.04.96-3.37.96-2.59 0-4.79-1.75-5.58-4.1H3.08v2.58A10 10 0 0 0 12 22z"/>
                <path fill="#4A90E2" d="M6.42 13.92A5.98 5.98 0 0 1 6.1 12c0-.67.12-1.31.32-1.92V7.5H3.08A10 10 0 0 0 2 12c0 1.61.39 3.13 1.08 4.5l3.34-2.58z"/>
                <path fill="#FBBC05" d="M12 5.98c1.47 0 2.78.51 3.81 1.5l2.86-2.86C16.95 2.98 14.69 2 12 2A10 10 0 0 0 3.08 7.5l3.34 2.58c.79-2.35 2.99-4.1 5.58-4.1z"/>
              </svg>
            </button>

            <button className="flex items-center justify-center border border-white/10 bg-white/5 text-white py-3 rounded-xl hover:bg-white/10 transition font-semibold">
              in
            </button>
          </div>

          <p className="text-center text-gray-400 mt-6 text-sm">
            Already have an account?{" "}
            <Link href="/login" className="text-pink-400 hover:text-pink-300">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}