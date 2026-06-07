"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    localStorage.setItem("isLoggedIn", "true");

    localStorage.setItem(
      "user",
      JSON.stringify({
        email,
      })
    );

    router.push("/analyzer");
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-black flex items-center justify-center px-6">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-20 w-125 h-125 bg-green-500/30 rounded-full blur-[140px]" />

        <div className="absolute bottom-0 right-0 w-112.5 h-112.5 bg-green-400/20 rounded-full blur-[120px]" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-green-500/10 rounded-full blur-[160px]" />
      </div>

      <div className="relative z-10 w-full max-w-md">
        <div className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-3xl shadow-2xl p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-2xl bg-green-500 flex items-center justify-center text-3xl mx-auto mb-4">
              🧠
            </div>

            <h1 className="text-4xl font-bold text-white mb-2">
              Welcome Back
            </h1>

            <p className="text-gray-300">
              Sign in to access ATS analysis, recruiter insights,
              interview preparation and AI-powered resume scoring.
            </p>
          </div>

          <button
            className="w-full flex items-center justify-center gap-3 border border-white/20 bg-white/5 hover:bg-white/10 text-white py-3 rounded-xl mb-6 transition"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.54 2.87 8.39 6.84 9.75.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.88-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.36-2.22-.26-4.56-1.14-4.56-5.09 0-1.13.39-2.05 1.03-2.77-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.06A9.3 9.3 0 0 1 12 6.84c.85 0 1.71.12 2.51.35 1.9-1.34 2.74-1.06 2.74-1.06.55 1.42.2 2.47.1 2.73.64.72 1.03 1.64 1.03 2.77 0 3.96-2.34 4.83-4.58 5.08.36.32.68.95.68 1.92 0 1.39-.01 2.5-.01 2.84 0 .27.18.6.69.49A10.25 10.25 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
            </svg>
            Continue with GitHub
          </button>

          <div className="text-center text-gray-400 mb-6">
            or continue with email
          </div>

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full bg-white/5 border border-white/10 text-white p-4 rounded-xl mb-4 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter your password"
            className="w-full bg-white/5 border border-white/10 text-white p-4 rounded-xl mb-6 outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={handleLogin}
            className="w-full bg-green-500 hover:bg-green-400 text-black font-bold py-4 rounded-xl transition"
          >
            Login to Dashboard
          </button>

          <p className="text-center text-gray-400 mt-6 text-sm">
            Don&apos;t have an account? Sign up to unlock advanced ATS reports and resume history.
          </p>
        </div>
      </div>
    </div>
  );
}