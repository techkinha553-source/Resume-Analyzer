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
    <div className="min-h-screen bg-black text-white p-6 md:p-10">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">
        AI Resume Builder
      </h1>

      <div className="space-y-4 max-w-2xl">
        <input
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-4 rounded-xl bg-gray-900"
        />

        <input
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-4 rounded-xl bg-gray-900"
        />

        <input
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-4 rounded-xl bg-gray-900"
        />

        <input
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          className="w-full p-4 rounded-xl bg-gray-900"
        />

        <textarea
          name="education"
          placeholder="Education"
          value={formData.education}
          onChange={handleChange}
          className="w-full p-4 rounded-xl bg-gray-900"
        />

        <textarea
          name="skills"
          placeholder="Skills"
          value={formData.skills}
          onChange={handleChange}
          className="w-full p-4 rounded-xl bg-gray-900"
        />

        <textarea
          name="projects"
          placeholder="Projects"
          value={formData.projects}
          onChange={handleChange}
          className="w-full p-4 rounded-xl bg-gray-900"
        />

        <textarea
          name="experience"
          placeholder="Experience"
          value={formData.experience}
          onChange={handleChange}
          className="w-full p-4 rounded-xl bg-gray-900"
        />

        <textarea
          name="achievements"
          placeholder="Achievements"
          value={formData.achievements}
          onChange={handleChange}
          className="w-full p-4 rounded-xl bg-gray-900"
        />

        <button
          onClick={generateResume}
          disabled={loading}
          className="w-full bg-linear-to-r from-violet-600 to-pink-600 py-4 rounded-xl font-semibold text-white hover:scale-[1.02] transition disabled:opacity-50"
        >
          {loading ? "Generating Resume..." : "Generate Resume"}
        </button>
      </div>

      {resume && (
        <div className="mt-10 max-w-3xl space-y-4">
          
          <div className="border border-white/10 bg-white/5 backdrop-blur-xl p-6 rounded-2xl">
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
      )}
    </div>
  );
}