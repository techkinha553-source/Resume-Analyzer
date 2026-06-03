AI Resume Analyzer & ATS Checker

Overview

AI Resume Analyzer & ATS Checker is a full-stack application that helps job seekers evaluate their resumes against specific job descriptions. The system extracts information from PDF resumes, identifies technical skills, analyzes resume structure, compares the resume with job requirements, and generates an ATS (Applicant Tracking System) compatibility score along with improvement suggestions.

Features

Resume Analysis

* Upload PDF resumes
* Extract text from resumes
* Detect technical skills automatically
* Identify key resume sections
* Extract projects and experience

ATS Scoring

* Compare resume skills with job description requirements
* Calculate ATS compatibility score
* Show matched skills
* Show missing skills
* Generate resume strength rating

Resume Insights

* Resume structure analysis
* Experience detection
* Project detection
* Personalized improvement suggestions

Tech Stack

Backend

* Python
* FastAPI
* PDFPlumber
* Uvicorn

Frontend (Planned)

* Next.js
* React
* Tailwind CSS
* Axios

Project Structure

resume-analyzer/
│
├── backend/
│   ├── app/
│   │   ├── routes/
│   │   ├── services/
│   │   └── main.py
│   │
│   ├── uploads/
│   ├── requirements.txt
│   └── .venv/
│
├── frontend/
│
├── .gitignore
└── README.md

Current Functionality

* PDF Resume Upload
* Resume Text Extraction
* Skill Extraction
* ATS Score Calculation
* Resume Section Detection
* Experience Detection
* Project Detection
* Resume Suggestions

Sample Output
{
  "ats_score": 77.14,
  "resume_strength": "Good",
  "matched_skills": [
    "python",
    "sql",
    "git",
    "github",
    "postgresql"
  ],
  "missing_skills": [
    "docker",
    "fastapi"
  ]
}
Future Enhancements

* AI-powered resume feedback using LLMs
* Smart skill extraction using NLP
* Resume keyword optimization
* Interactive analytics dashboard
* Multi-format resume support
* User authentication and history tracking
* Resume ranking against multiple job descriptions

Author

Nikhil Kinha

B.Tech Computer Science & Engineering, VIT Bhopal University

# AI Resume Analyzer & ATS Checker

## Overview

AI Resume Analyzer & ATS Checker is a full-stack application that helps job seekers evaluate their resumes against specific job descriptions. The system extracts information from PDF resumes, identifies technical skills, analyzes resume structure, compares resumes with job requirements, and generates an ATS (Applicant Tracking System) compatibility score along with actionable improvement suggestions.

## Features

### Resume Analysis
- Upload PDF resumes
- Extract text from resumes
- Detect technical skills automatically
- Identify key resume sections
- Extract projects and experience

### ATS Scoring
- Compare resume skills with job description requirements
- Calculate ATS compatibility score
- Show matched skills
- Show missing skills
- Generate resume strength rating

### Resume Insights
- Resume structure analysis
- Experience detection
- Project detection
- Personalized improvement suggestions

## Tech Stack

### Backend
- Python
- FastAPI
- PDFPlumber
- Uvicorn

### Frontend (Planned)
- Next.js
- React
- Tailwind CSS
- Axios

## Project Structure

```text
resume-analyzer/
│
├── backend/
│   ├── app/
│   │   ├── routes/
│   │   ├── services/
│   │   └── main.py
│   │
│   ├── uploads/
│   ├── requirements.txt
│   └── .venv/
│
├── frontend/
├── .gitignore
└── README.md
```

## Current Functionality

- PDF Resume Upload
- Resume Text Extraction
- Skill Extraction
- ATS Score Calculation
- Resume Section Detection
- Experience Detection
- Project Detection
- Resume Suggestions

## Sample Output

```json
{
  "ats_score": 77.14,
  "resume_strength": "Good",
  "matched_skills": [
    "python",
    "sql",
    "git",
    "github",
    "postgresql"
  ],
  "missing_skills": [
    "docker",
    "fastapi"
  ]
}
```

## Future Enhancements

- AI-powered resume feedback using LLMs
- Smart skill extraction using NLP
- Resume keyword optimization
- Interactive analytics dashboard
- Multi-format resume support
- User authentication and history tracking
- Resume ranking against multiple job descriptions

## Author

**Nikhil Kinha**

B.Tech Computer Science & Engineering, VIT Bhopal University