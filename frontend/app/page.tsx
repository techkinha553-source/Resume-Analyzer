import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen relative overflow-hidden bg-linear-to-br from-slate-950 via-slate-900 to-black text-white">


        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">

          <div className="absolute top-0 left-0 w-125 h-125 bg-sky-400/20 rounded-full blur-3xl" />

          <div className="absolute top-1/2 right-0 w-112.5 h-112.5 bg-violet-500/20 rounded-full blur-3xl" />

          <div className="absolute bottom-0 left-1/3 w-150 h-150 bg-indigo-500/10 rounded-full blur-3xl" />

        </div>

        <section className="relative z-10 text-center py-32 px-8 max-w-6xl mx-auto">

          <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-tight">
            Beat ATS Systems &
            <span className="bg-linear-to-r from-sky-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
              {" "}Get More Interviews
            </span>
          </h1>

          <p className="mt-8 text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto">
            AI-powered resume intelligence,
            recruiter insights and interview preparation.
          </p>

          <div className="mt-10 flex justify-center gap-4">

            <Link
              href="/login"
              className="
                          bg-linear-to-r
                          from-sky-500
                          to-violet-500
                          text-white
                          px-10
                          py-4
                          rounded-2xl
                          font-semibold
                          shadow-lg
                          shadow-sky-500/30
                          hover:scale-105
                          transition-all
                          duration-300
                        "
            >
              Analyze Resume
            </Link>

            {/* <Link
              href="/about"
              className="border px-8 py-4 rounded-xl"
            >
              Learn More
            </Link> */}

          </div>
        </section>

        <section className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6 p-10">

          <div className="
                          p-8
                          rounded-3xl
                          border
                          border-white/10
                          bg-white/5
                          backdrop-blur-xl
                          hover:bg-white/10
                          hover:-translate-y-2
                          transition-all
                          duration-300
                        ">
            <p className="font-bold font-sans">ATS Score</p>
          </div>

          <div className="
                          p-8
                          rounded-3xl
                          border
                          border-white/10
                          bg-white/5
                          backdrop-blur-xl
                          hover:bg-white/10
                          hover:-translate-y-2
                          transition-all
                          duration-300
                        ">
            <p className="font-bold font-sans">AI Feedback</p>
          </div>

          <div className="
                          p-8
                          rounded-3xl
                          border
                          border-white/10
                          bg-white/5
                          backdrop-blur-xl
                          hover:bg-white/10
                          hover:-translate-y-2
                          transition-all
                          duration-300
                        ">
            <p className="font-bold font-sans">Interview Questions</p>
          </div>

          <div className="
                          p-8
                          rounded-3xl
                          border
                          border-white/10
                          bg-white/5
                          backdrop-blur-xl
                          hover:bg-white/10
                          hover:-translate-y-2
                          transition-all
                          duration-300
                        ">
            <p className="font-bold font-sans">Resume Improvements</p>
          </div>

        </section>

        <section className="relative z-10 max-w-5xl mx-auto px-8 py-5">

          <div className="grid md:grid-cols-3 gap-6">

            <div className="text-center">
              <h3 className="text-5xl font-bold text-sky-400">95%</h3>
              <p className="text-slate-400 mt-2">
                ATS Accuracy
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-5xl font-bold text-violet-400">10K+</h3>
              <p className="text-slate-400 mt-2">
                Resumes Analyzed
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-5xl font-bold text-green-400">3x</h3>
              <p className="text-slate-400 mt-2">
                More Interview Calls
              </p>
            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}



// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import axios from "axios";
// import jsPDF from "jspdf";
// import {
//   PieChart,
//   Pie,
//   Cell,
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
//   RadialBarChart,
//   RadialBar,
// } from "recharts";

// interface AnalysisResult {
//   ats_score: number;
//   resume_strength: string;
//   matched_count: number;
//   total_resume_skills: number;
//   matched_skills: string[];
//   missing_skills: string[];
//   ai_feedback?: string | string[];
//   interview_questions?: string[];
//   interview_prep?: {
//     question: string;
//     difficulty: string;
//     tip: string;
//   }[];
//   company_scores?: {
//     Google: number;
//     Amazon: number;
//     Microsoft: number;
//     Netflix: number;
//   };
//   scoring_breakdown?: {
//     skills_match: number;
//     structure: number;
//     projects: number;
//     experience: number;
//     keyword_density: number;
//   };
//   keyword_analysis?: {
//     skill: string;
//     status: string;
//     priority: string;
//   }[];
//   resume_improvements?: {
//     original: string;
//     improved: string;
//   }[];
// }

// export default function Home() {
//   const [file, setFile] = useState<File | null>(null);
//   const [jobDescription, setJobDescription] = useState("");
//   const [result, setResult] = useState<AnalysisResult | null>(null);
//   const [loading, setLoading] = useState(false);
//   const [darkMode, setDarkMode] = useState(false);

//   const downloadPDF = () => {
//     if (!result) return;

//     const doc = new jsPDF();

//     doc.setFontSize(20);
//     doc.text("AI Resume Analyzer Report", 20, 20);

//     doc.setFontSize(12);
//     doc.text(`ATS Score: ${result.ats_score}%`, 20, 40);
//     doc.text(`Resume Strength: ${result.resume_strength}`, 20, 50);
//     doc.text(`Matched Skills: ${result.matched_count}`, 20, 60);
//     doc.text(`Missing Skills: ${result.missing_skills.length}`, 20, 70);

//     doc.text("Matched Skills:", 20, 90);
//     doc.text(result.matched_skills.join(", "), 20, 100, {
//       maxWidth: 170,
//     });

//     doc.text("Missing Skills:", 20, 120);
//     doc.text(result.missing_skills.join(", "), 20, 130, {
//       maxWidth: 170,
//     });

//     if (result.ai_feedback) {
//       const feedback = Array.isArray(result.ai_feedback)
//         ? result.ai_feedback.join("\n")
//         : result.ai_feedback;

//       doc.text("AI Feedback:", 20, 160);

//       const splitFeedback = doc.splitTextToSize(
//         feedback,
//         170
//       );

//       doc.text(splitFeedback, 20, 170);
//     }

//     doc.save("resume-analysis-report.pdf");
//   };

//   const analyzeResume = async () => {
//     if (!file) {
//       alert("Please upload a resume.");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("file", file);
//     formData.append("job_description", jobDescription);

//     try {
//       setLoading(true);

//       const response = await axios.post(
//         "http://127.0.0.1:8000/analyze",
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );

//       const data = response.data;

//       data.company_scores = {
//         Google: Math.min(100, data.ats_score + 5),
//         Amazon: Math.max(0, data.ats_score - 2),
//         Microsoft: Math.min(100, data.ats_score + 8),
//         Netflix: Math.max(0, data.ats_score - 6),
//       };

//       data.scoring_breakdown = {
//         skills_match: Math.round(data.ats_score * 0.9),
//         structure: 100,
//         projects: Math.min(100, data.ats_score + 8),
//         experience: Math.max(60, data.ats_score - 5),
//         keyword_density: Math.max(50, data.ats_score - 10),
//       };
//       data.keyword_analysis = [
//         ...(data.matched_skills || []).map((skill: string) => ({
//           skill,
//           status: "Found",
//           priority: "High",
//         })),
//         ...(data.missing_skills || []).map((skill: string) => ({
//           skill,
//           status: "Missing",
//           priority: "Critical",
//         })),
//       ];

//       data.interview_prep = (data.interview_questions || []).map(
//         (question: string, index: number) => ({
//           question,
//           difficulty:
//             index % 3 === 0
//               ? "Easy"
//               : index % 3 === 1
//               ? "Medium"
//               : "Hard",
//           tip:
//             "Use project examples, explain trade-offs, and support answers with real experience.",
//         })
//       );

//       data.resume_improvements = (data.matched_skills || [])
//         .slice(0, 6)
//         .map((skill: string) => ({
//           original: skill,
//           improved: `Demonstrated strong proficiency in ${skill} by building scalable, production-ready applications with optimized architecture and performance.`,
//       }));

//       setResult(data);
//     } catch (error) {
//       console.error(error);
//       alert("Analysis failed.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const chartData = result
//   ? [
//       { name: "Matched Skills", value: result.matched_count },
//       { name: "Missing Skills", value: result.missing_skills?.length || 0 },
//     ]
//   : [];

//   const COLORS = ["#22c55e", "#ef4444"];

// return (
//   <div
//     className={`min-h-screen flex relative overflow-hidden transition-colors duration-300 ${
//       darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-black"
//     }`}
//   >
//     {/* Background Glow */}
//     <div className="absolute inset-0 overflow-hidden pointer-events-none">
//       <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500 opacity-20 rounded-full blur-3xl" />
//       <div className="absolute top-1/2 -left-40 w-96 h-96 bg-purple-500 opacity-20 rounded-full blur-3xl" />
//     </div>
//     {/* Sidebar */}
//     <div className={`w-64 hidden md:flex flex-col p-6 border-r ${darkMode ? "border-gray-700 bg-gray-900" : "border-gray-200 bg-white"}`}>
//       <h2 className="text-xl font-bold mb-8">ATS Dashboard</h2>

//       <nav className="flex flex-col gap-4 text-sm">
//         <a className="hover:opacity-70 font-bold">📄 Resume Analyzer</a>
//         <a className="hover:opacity-70 font-bold">📊 Analytics</a>
//         <a className="hover:opacity-70 font-bold">🤖 AI Insights</a>
//         <a className="hover:opacity-70 font-bold">⚙️ Settings</a>
//       </nav>

//       <div className="mt-auto text-xs opacity-60">
//         AI Resume Analyzer v1.0
//       </div>
//     </div>
//     <main className="flex-1 p-6 overflow-auto">
//       <div className="max-w-6xl mx-auto">

//       {/* Top Navbar */}
//       <div className={`flex items-center justify-between mb-8 p-4 rounded-2xl border backdrop-blur-md ${darkMode ? "bg-gray-800/60 border-gray-700" : "bg-white/70 border-gray-200"}`}>
//         <div>
//           <h1 className="text-2xl font-bold text-sky-500">ATS Resume Analyzer</h1>
//           <p className="text-sm opacity-70">AI-powered resume intelligence dashboard</p>
//         </div>

//         <button
//           onClick={() => setDarkMode(!darkMode)}
//           className={`px-4 py-2 rounded-xl border transition-all ${darkMode ? "bg-white/10 border-white/20 text-white" : "bg-white/70 border-gray-300 text-black"}`}
//         >
//           {darkMode ? (
//             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
//               <circle cx="12" cy="12" r="4" />
//               <path d="M12 2v2" />
//               <path d="M12 20v2" />
//               <path d="m4.93 4.93 1.41 1.41" />
//               <path d="m17.66 17.66 1.41 1.41" />
//               <path d="M2 12h2" />
//               <path d="M20 12h2" />
//               <path d="m6.34 17.66-1.41 1.41" />
//               <path d="m19.07 4.93-1.41 1.41" />
//             </svg>
//           ) : (
//             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
//               <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
//             </svg>
//           )}
//         </button>
//       </div>

//       {/* Header */}
//       <h1 className={`text-4xl font-bold mb-2 ${darkMode ? "text-sky-500" : "text-black"}`}>
//         AI Resume Analyzer
//       </h1>
//       <p className={`mb-8 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
//         ATS Score + Resume Intelligence Dashboard
//       </p>

//       {/* Input Section */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

//         {/* Upload */}
//         <div className={`p-4 rounded-2xl shadow-xl backdrop-blur-md border border-white/10 ${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"}`}>
//           <h2 className="font-semibold mb-2">Upload Resume</h2>

//           <input
//             type="file"
//             accept=".pdf"
//             onChange={(e) =>
//               setFile(e.target.files?.[0] || null)
//             }
//           />
//         </div>

//         {/* Job Description */}
//         <div className={`p-4 rounded-2xl shadow-xl backdrop-blur-md border border-white/10 ${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"}`}>
//           <h2 className="font-semibold mb-2">
//             Job Description
//           </h2>

//           <textarea
//             className={`w-full h-40 rounded-xl p-3 border ${darkMode ? "bg-gray-900 border-gray-700 text-white" : "bg-white border-gray-300 text-black"}`}
//             placeholder="Paste job description..."
//             value={jobDescription}
//             onChange={(e) =>
//               setJobDescription(e.target.value)
//             }
//           />
//         </div>
//       </div>

//       {/* Analyze Button */}
//       <div className="mt-6 text-center">
//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           onClick={analyzeResume}
//           disabled={loading}
//           className={`px-8 py-3 rounded-xl font-semibold transition-all ${darkMode ? "bg-sky-600 hover:bg-blue-500 text-white" : "bg-black hover:bg-gray-800 text-white"}`}
//         >
//           {loading ? "Analyzing..." : "Analyze Resume"}
//         </motion.button>
//         {result && (
//           <button
//             onClick={downloadPDF}
//             className={`ml-4 px-8 py-3 rounded-xl font-semibold transition-all ${darkMode ? "bg-green-600 hover:bg-green-500 text-white" : "bg-green-600 hover:bg-green-700 text-white"}`}
//           >
//             Download PDF Report
//           </button>
//         )}
//       </div>

//       {/* Results Dashboard */}
//       {result && (
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6"
//         >

//           {/* ATS Score Card */}
//           <motion.div
//             whileHover={{ scale: 1.03 }}
//             transition={{ duration: 0.2 }}
//             className={`p-6 rounded-2xl shadow-xl backdrop-blur-md border border-white/10 ${darkMode ? "bg-gray-800 text-white" : "bg-white"}`}
//           >
//             <h3 className={`text-lg font-semibold ${darkMode ? "text-white" : "text-black"}`}>
//               ATS Score
//             </h3>

//             <div className="flex justify-center mt-4">
//               <ResponsiveContainer width="100%" height={220}>
//                 <RadialBarChart
//                   innerRadius="70%"
//                   outerRadius="100%"
//                   data={[{ name: "ATS", value: result.ats_score }]}
//                   startAngle={180}
//                   endAngle={0}
//                 >
//                   <RadialBar
//                     dataKey="value"
//                     cornerRadius={12}
//                     fill="#22c55e"
//                   />
//                   <text
//                     x="50%"
//                     y="55%"
//                     textAnchor="middle"
//                     dominantBaseline="middle"
//                     className={darkMode ? "fill-white" : "fill-black"}
//                   >
//                     <tspan fontSize="28" fontWeight="bold">
//                       {result.ats_score}%
//                     </tspan>
//                   </text>
//                 </RadialBarChart>
//               </ResponsiveContainer>
//             </div>

//           </motion.div>

//           {/* Strength Card */}
//           <div className={`p-6 rounded-2xl shadow-xl backdrop-blur-md border border-white/10 ${darkMode ? "bg-gray-800 text-white" : "bg-white"}`}>
//             <h3 className="text-lg font-semibold text-black">
//               Resume Strength
//             </h3>

//             <p className="text-2xl font-bold mt-2 text-gray-700">
//               {result.resume_strength}
//             </p>

//             <p className="text-gray-500 mt-2">
//               Based on skills + structure
//             </p>
//           </div>

//           {/* Skills Summary */}
//           <div className={`p-6 rounded-2xl shadow-xl backdrop-blur-md border border-white/10 ${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"}`}>
//             <h3 className="text-lg font-semibold">
//               Skills Summary
//             </h3>

//             <p>Matched: {result.matched_count}</p>
//             <p>Missing: {result.missing_skills?.length}</p>
//             <p>Total Resume Skills: {result.total_resume_skills}</p>
//           </div>

//           {/* Company ATS Benchmark */}
//           <div className={`p-6 rounded-2xl shadow-xl backdrop-blur-md border border-white/10 ${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"}`}>
//             <h3 className="text-lg font-semibold mb-4">
//               Company ATS Benchmark
//             </h3>

//             {result.company_scores && (
//               <div className="space-y-4">
//                 {Object.entries(result.company_scores).map(([company, score]) => (
//                   <div key={company}>
//                     <div className="flex justify-between text-sm mb-1">
//                       <span>{company}</span>
//                       <span>{score}%</span>
//                     </div>
//                     <div className={`w-full h-3 rounded-full ${darkMode ? "bg-gray-700" : "bg-gray-200"}`}>
//                       <div
//                         className="h-3 rounded-full bg-linear-to-r from-blue-500 to-green-500"
//                         style={{ width: `${score}%` }}
//                       />
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* ATS Score Breakdown */}
//           <div className={`p-6 rounded-2xl shadow-xl backdrop-blur-md border border-white/10 md:col-span-3 ${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"}`}>
//             <h3 className="text-lg font-semibold mb-6">
//               ATS Score Breakdown
//             </h3>

//             {result.scoring_breakdown && (
//               <div className="space-y-5">
//                 {Object.entries(result.scoring_breakdown).map(([label, score]) => (
//                   <div key={label}>
//                     <div className="flex justify-between mb-1 text-sm font-medium">
//                       <span>
//                         {label.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
//                       </span>
//                       <span>{score}%</span>
//                     </div>

//                     <div className={`w-full h-4 rounded-full ${darkMode ? "bg-gray-700" : "bg-gray-200"}`}>
//                       <div
//                         className="h-4 rounded-full bg-linear-to-r from-indigo-500 via-blue-500 to-green-500"
//                         style={{ width: `${score}%` }}
//                       />
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//           {/* Keyword Gap Analyzer Card */}
//           <div className={`p-6 rounded-2xl shadow-xl backdrop-blur-md border border-white/10 md:col-span-3 ${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"}`}>
//             <h3 className="text-lg font-semibold mb-6">
//               Keyword Gap Analyzer
//             </h3>
//             {result.keyword_analysis && (
//               <div className="overflow-x-auto">
//                 <table className="w-full text-sm">
//                   <thead>
//                     <tr className={`border-b ${darkMode ? "border-gray-700" : "border-gray-200"}`}>
//                       <th className="text-left py-3">Skill</th>
//                       <th className="text-left py-3">Status</th>
//                       <th className="text-left py-3">Priority</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {result.keyword_analysis.map((item, index) => (
//                       <tr
//                         key={index}
//                         className={`border-b ${darkMode ? "border-gray-700" : "border-gray-100"}`}
//                       >
//                         <td className="py-3 font-medium">{item.skill}</td>
//                         <td className="py-3">
//                           <span
//                             className={`px-3 py-1 rounded-full text-xs font-semibold ${
//                               item.status === "Found"
//                                 ? "bg-green-500 text-white"
//                                 : "bg-red-500 text-white"
//                             }`}
//                           >
//                             {item.status}
//                           </span>
//                         </td>
//                         <td className="py-3">
//                           <span
//                             className={`px-3 py-1 rounded-full text-xs font-semibold ${
//                               item.priority === "Critical"
//                                 ? "bg-orange-500 text-white"
//                                 : "bg-blue-500 text-white"
//                             }`}
//                           >
//                             {item.priority}
//                           </span>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>

//                 <div className={`mt-6 p-4 rounded-xl ${darkMode ? "bg-gray-700" : "bg-gray-100"}`}>
//                   <p className="font-medium">
//                     ATS Impact Estimate
//                   </p>
//                   <p className="text-sm opacity-80 mt-1">
//                     Adding all missing critical skills could improve ATS compatibility by approximately 10–20%.
//                   </p>
//                 </div>
//               </div>
//             )}
//           </div>

//         </motion.div>
//       )}

//       {/* Detailed Sections */}
//       {result && (
//         <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">

//           {/* Matched Skills */}
//           <div className={`p-6 rounded-2xl shadow-xl backdrop-blur-md border border-white/10 ${darkMode ? "bg-gray-800 text-white" : "bg-white"}`}>
//             <h3 className="font-semibold mb-3 text-green-600">
//               Matched Skills
//             </h3>
//             <ul className={`list-disc ml-5 ${darkMode ? "text-white" : "text-black"}`}>
//               {result.matched_skills.map((s: string) => (
//                 <li key={s}>{s}</li>
//               ))}
//             </ul>
//           </div>

//           {/* Missing Skills */}
//           <div className={`p-6 rounded-2xl shadow-xl backdrop-blur-md border border-white/10 ${darkMode ? "bg-gray-800 text-white" : "bg-white"}`}>
//             <h3 className="font-semibold mb-3 text-red-600">
//               Missing Skills
//             </h3>
//             <ul className={`list-disc ml-5 ${darkMode ? "text-white" : "text-black"}`}>
//               {result.missing_skills.map((s: string) => (
//                 <li key={s}>{s}</li>
//               ))}
//             </ul>
//           </div>

//         </div>
//       )}

//       {/* Charts Section */}
//       {result && (
//         <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">

//           {/* Pie Chart */}
//           <div className={`p-6 rounded-2xl shadow-xl backdrop-blur-md border border-white/10 ${darkMode ? "bg-gray-800 text-white" : "bg-white"}`}>
//             <h3 className="text-lg font-semibold mb-4 text-black">
//               Skill Match Overview
//             </h3>

//             <ResponsiveContainer width="100%" height={250}>
//               <PieChart>
//                 <Pie
//                   data={chartData}
//                   dataKey="value"
//                   nameKey="name"
//                   outerRadius={100}
//                   label
//                 >
//                   {chartData.map((entry, index) => (
//                     <Cell key={`cell-${index}`} fill={COLORS[index]} />
//                   ))}
//                 </Pie>
//                 <Tooltip />
//               </PieChart>
//             </ResponsiveContainer>
//           </div>

//           {/* Bar Chart */}
//           <div className={`p-6 rounded-2xl shadow-xl backdrop-blur-md border border-white/10 ${darkMode ? "bg-gray-800 text-white" : "bg-white"}`}>
//             <h3 className="text-lg font-semibold mb-4 text-black">
//               Skills Comparison
//             </h3>

//             <ResponsiveContainer width="100%" height={250}>
//               <BarChart data={chartData}>
//                 <XAxis dataKey="name" />
//                 <YAxis />
//                 <Tooltip />
//                 <Bar dataKey="value" fill="#3b82f6" />
//               </BarChart>
//             </ResponsiveContainer>
//           </div>

//           {/* AI Feedback Section */}
//             {result?.ai_feedback && (
//               <div className={`mt-8 p-6 rounded-2xl shadow-xl backdrop-blur-md border border-white/10 ${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"}`}>
//                 <h3 className={`text-lg font-semibold mb-4 ${darkMode ? "text-white" : "text-black"}`}>
//                   AI Feedback (Recruiter Insights)
//                 </h3>

//                 {Array.isArray(result.ai_feedback) ? (
//                   <ul className={`list-disc ml-5 ${darkMode ? "text-white" : "text-black"}`}>
//                     {result.ai_feedback.map((item: string, index: number) => (
//                       <li key={index}>{item}</li>
//                     ))}
//                   </ul>
//                 ) : (
//                   <div className={`whitespace-pre-wrap ${darkMode ? "text-white" : "text-black"}`}>
//                     {result.ai_feedback}
//                   </div>
//                 )}
//               </div>
//             )}

//             {/* Interview Questions Section */}
//             {result?.interview_questions && result.interview_questions.length > 0 && (
//               <div className={`p-6 rounded-2xl shadow-xl backdrop-blur-md border border-white/10 ${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"}`}>
//                 <h3 className={`text-lg font-semibold mb-4 ${darkMode ? "text-white" : "text-black"}`}>
//                   Interview Questions
//                 </h3>

//                 <ul className={`space-y-3 ${darkMode ? "text-white" : "text-black"}`}>
//                   {result.interview_questions.map((question: string, index: number) => (
//                     <li
//                       key={index}
//                       className={`p-3 rounded-lg ${darkMode ? "bg-gray-700" : "bg-gray-100"}`}
//                     >
//                       {index + 1}. {question}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}

//             {result?.interview_prep && result.interview_prep.length > 0 && (
//               <div className={`p-6 rounded-2xl shadow-xl backdrop-blur-md border border-white/10 md:col-span-2 ${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"}`}>
//                 <h3 className="text-lg font-semibold mb-4">
//                   AI Interview Preparation
//                 </h3>

//                 <div className="space-y-4">
//                   {result.interview_prep.map((item, index) => (
//                     <div
//                       key={index}
//                       className={`p-4 rounded-xl border ${darkMode ? "border-gray-700 bg-gray-700" : "border-gray-200 bg-gray-50"}`}
//                     >
//                       <div className="flex justify-between items-center mb-2">
//                         <span className="font-semibold">
//                           Question {index + 1}
//                         </span>

//                         <span
//                           className={`px-3 py-1 rounded-full text-xs font-semibold ${
//                             item.difficulty === "Hard"
//                               ? "bg-red-500 text-white"
//                               : item.difficulty === "Medium"
//                               ? "bg-yellow-500 text-white"
//                               : "bg-green-500 text-white"
//                           }`}
//                         >
//                           {item.difficulty}
//                         </span>
//                       </div>

//                       <p className="font-medium mb-3">
//                         {item.question}
//                       </p>

//                       <div className={`p-3 rounded-lg text-sm ${darkMode ? "bg-gray-800" : "bg-white"}`}>
//                         <strong>Interview Tip:</strong> {item.tip}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}
            
//             {/* Resume Improvement Engine */}
//               {result?.resume_improvements && result.resume_improvements.length > 0 && (
//                 <div className="p-6 rounded-2xl shadow-xl backdrop-blur-md border border-white/10 md:col-span-2">
                  
//                   <h3 className="text-lg font-semibold mb-4">
//                     Resume Improvement Engine
//                   </h3>

//                   <div className="space-y-4">
//                     {result.resume_improvements.map((item: { original: string; improved: string }, index: number) => (
//                       <div key={index} className="p-4 rounded-xl border">
//                         <p className="text-sm opacity-70">Original</p>
//                         <p className="font-medium mb-3">{item.original}</p>

//                         <p className="text-sm opacity-70">Improved</p>
//                         <p className="text-green-600 dark:text-green-400 font-medium">
//                           {item.improved}
//                         </p>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}
//         </div>
//       )}

//       </div>
//     </main>
//   </div>
// );
// }

