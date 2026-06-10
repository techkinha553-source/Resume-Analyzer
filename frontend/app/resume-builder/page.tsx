"use client";

import { useState } from "react";
import jsPDF from "jspdf";

export default function ResumeBuilder() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    education: "",
    skills: "",
    projects: "",
    experience: "",
    achievements: "",
  });

  const [resume, setResume] = useState("");
  const [loading, setLoading] = useState(false);
  const [improveLoading, setImproveLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const generateResume = async () => {
    setLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:8000/generate-resume", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setResume(data.resume);
    } catch (error) {
      console.error("Error generating resume:", error);
    } finally {
      setLoading(false);
    }
  };

  const improveResume = async () => {
    if (!resume) return;

    setImproveLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:8000/improve-resume", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          resume: resume,
        }),
      });

      const data = await response.json();
      setResume(data.resume);
    } catch (error) {
      console.error("Error improving resume:", error);
    } finally {
      setImproveLoading(false);
    }
  };

  const downloadPDF = () => {
    if (!resume) return;

    const doc = new jsPDF();

    const lines = doc.splitTextToSize(resume, 180);
    doc.text(lines, 10, 10);

    doc.save("ai-resume.pdf");
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-black via-violet-950 to-black text-white p-4 sm:p-6 lg:p-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-10 bg-linear-to-r from-violet-400 via-fuchsia-400 to-purple-300 bg-clip-text text-transparent">
          AI Resume Builder
        </h1>
        <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-2 gap-8 items-start">
          <div className="space-y-4 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-2xl">
            <input
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-4 rounded-xl bg-black/40 border border-white/10 focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
            <input
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-4 rounded-xl bg-black/40 border border-white/10 focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
            <input
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-4 rounded-xl bg-black/40 border border-white/10 focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
            <input
              name="location"
              placeholder="Location"
              value={formData.location}
              onChange={handleChange}
              className="w-full p-4 rounded-xl bg-black/40 border border-white/10 focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
            <textarea
              name="education"
              placeholder="Education"
              value={formData.education}
              onChange={handleChange}
              className="w-full p-4 rounded-xl bg-black/40 border border-white/10 focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
            <textarea
              name="skills"
              placeholder="Skills"
              value={formData.skills}
              onChange={handleChange}
              className="w-full p-4 rounded-xl bg-black/40 border border-white/10 focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
            <textarea
              name="projects"
              placeholder="Projects"
              value={formData.projects}
              onChange={handleChange}
              className="w-full p-4 rounded-xl bg-black/40 border border-white/10 focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
            <textarea
              name="experience"
              placeholder="Experience"
              value={formData.experience}
              onChange={handleChange}
              className="w-full p-4 rounded-xl bg-black/40 border border-white/10 focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
            <textarea
              name="achievements"
              placeholder="Achievements"
              value={formData.achievements}
              onChange={handleChange}
              className="w-full p-4 rounded-xl bg-black/40 border border-white/10 focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
            <button
              onClick={generateResume}
              disabled={loading}
              className="w-full bg-linear-to-r from-violet-600 to-pink-600 py-4 rounded-xl font-semibold text-white hover:scale-[1.02] transition disabled:opacity-50"
            >
              {loading ? "Generating Resume..." : "Generate Resume"}
            </button>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-2xl min-h-125 flex flex-col">
            {resume ? (
              <div className="space-y-4">
                <div className="border border-white/10 bg-black/30 backdrop-blur-xl p-6 rounded-2xl overflow-auto flex-1">
                  <pre className="whitespace-pre-wrap text-slate-200 leading-7">
                    {resume}
                  </pre>
                </div>
                <button
                  onClick={improveResume}
                  disabled={improveLoading}
                  className="w-full bg-linear-to-r from-emerald-500 via-violet-600 to-pink-500 py-4 rounded-xl font-semibold text-white hover:scale-[1.02] transition disabled:opacity-50"
                >
                  {improveLoading ? "Improving Resume..." : "✨ Improve Resume with AI"}
                </button>
                <button
                  onClick={downloadPDF}
                  className="w-full bg-linear-to-r from-blue-500 via-indigo-600 to-purple-600 py-4 rounded-xl font-semibold text-white hover:scale-[1.02] transition"
                >
                  ⬇️ Download Resume as PDF
                </button>
              </div>
            ) : (
              <div className="flex flex-1 items-center justify-center text-center text-slate-400 text-lg">
                Your AI-generated resume will appear here after you click
                <span className="font-semibold text-violet-300 mx-1">Generate Resume</span>.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}