from fastapi import APIRouter, UploadFile, File
from app.services.pdf_parser import extract_text_from_pdf
from app.services.skill_extractor import extract_skills
from fastapi import Form
from app.services.ats_scorer import calculate_ats_score
from app.services.ai_feedback import generate_ai_feedback_llm
from app.services.parser import parse_resume
from app.services.resume_rewriter import rewrite_resume
from app.services.interview_generator import generate_interview_questions
import os

def detect_sections(text: str):

    text = text.lower()

    return {
        "education": any(keyword in text for keyword in ["education", "b.tech", "bachelor", "university", "college"]),
        "experience": any(keyword in text for keyword in ["experience", "internship", "work experience"]),
        "projects": any(keyword in text for keyword in ["projects", "project"]),
        "skills": any(keyword in text for keyword in ["skills", "technical skills"]),
        "certifications": any(keyword in text for keyword in ["certifications", "certification", "coursera", "udemy"])
    } 

def generate_suggestions(missing_skills, sections):

    suggestions = []

    for skill in missing_skills:
        suggestions.append(
            f"Consider adding or highlighting {skill} if you have experience with it."
        )

    for section, present in sections.items():
        if not present:
            suggestions.append(
                f"Add a dedicated {section.title()} section to strengthen your resume."
            )

    if not suggestions:
        suggestions.append(
            "Your resume matches the job description well. Consider adding measurable achievements and project impact."
        )

    return suggestions

def generate_ai_feedback(resume_text, missing_skills, ats_score):

    feedback = []

    # Score-based feedback
    if ats_score < 50:
        feedback.append("Your resume has low ATS compatibility. Improve keyword alignment with job description.")

    elif ats_score < 75:
        feedback.append("Your resume is decent but missing key industry keywords.")

    else:
        feedback.append("Your resume is well optimized for ATS systems.")

    # Skill-based feedback
    if len(missing_skills) > 0:
        feedback.append(
            f"You are missing important skills like {', '.join(missing_skills[:3])}. These are commonly required in similar job roles."
        )

    # Resume improvement advice
    if "project" not in resume_text.lower():
        feedback.append("Add more project descriptions with real-world impact.")

    if "internship" not in resume_text.lower():
        feedback.append("Include internship or practical experience to strengthen your profile.")

    return feedback

def calculate_final_score(skill_score, section_score):

    section_percentage = (section_score / 5) * 100

    final_score = (
        skill_score * 0.8
        + section_percentage * 0.2
    )

    return round(final_score, 2)

def get_resume_strength(score):

    if score >= 85:
        return "Excellent"

    elif score >= 70:
        return "Good"

    elif score >= 50:
        return "Average"

    return "Needs Improvement"

import re

def extract_experience(text):

    patterns = [
        r"internship",
        r"work experience",
        r"experience"
    ]

    found = []

    lower_text = text.lower()

    for pattern in patterns:

        if re.search(pattern, lower_text):
            found.append(pattern)

    return found

def extract_projects(text):

    projects = []

    lines = text.split("\n")

    capture = False

    for line in lines:

        if "project" in line.lower():
            capture = True
            continue

        if capture:

            if len(line.strip()) > 3:
                projects.append(line.strip())

            if len(projects) >= 5:
                break

    return projects

router = APIRouter()

UPLOAD_DIR = "uploads"

os.makedirs(UPLOAD_DIR, exist_ok=True)

@router.post("/upload")
async def upload_resume(
    file: UploadFile = File(...)
):

    file_path = os.path.join(
        UPLOAD_DIR,
        file.filename
    )

    with open(file_path, "wb") as f:
        f.write(await file.read())

    extracted_text = extract_text_from_pdf(
        file_path
    )

    skills = extract_skills(extracted_text)

    return {
        "filename": file.filename,
        "skills": skills,
        "text": extracted_text
    }


@router.post("/analyze")
async def analyze_resume(
    file: UploadFile = File(...),
    job_description: str = Form(...)
):

    file_path = os.path.join(
        UPLOAD_DIR,
        file.filename
    )

    with open(file_path, "wb") as f:
        f.write(await file.read())

    resume_text = extract_text_from_pdf(
        file_path
    )

    experience = extract_experience(
        resume_text
    )

    projects = extract_projects(
        resume_text
    )

    resume_skills = extract_skills(
        resume_text
    )
    sections = detect_sections(
        resume_text
    )

    jd_skills = extract_skills(
        job_description
    )

    result = calculate_ats_score(
        resume_skills,
        jd_skills
    )

    suggestions = generate_suggestions(
        result["missing"],
        sections
    )

    final_score = calculate_final_score(
        result["score"],
        sum(sections.values())
    )

    strength = get_resume_strength(
        final_score
    )

    try:
        ai_feedback = generate_ai_feedback_llm(
            resume_text,
            job_description,
            final_score
        )
    except Exception as e:
        ai_feedback = f"AI feedback unavailable: {str(e)}"

    parsed_data = parse_resume(
        resume_text,
        resume_skills
    )

    rewritten_resume = rewrite_resume(
        resume_text
    )

    interview_questions = generate_interview_questions(
        resume_skills,
        projects
    )

    return {
        "skill_match_score": result["score"],
        "ats_score": final_score,
        "matched_skills": result["matched"],
        "missing_skills": result["missing"],
        "resume_skills": resume_skills,
        "total_resume_skills": len(resume_skills),
        "total_jd_skills": len(jd_skills),
        "matched_count": len(result["matched"]),
        "sections": sections,
        "section_score": sum(sections.values()),
        "section_percentage": (sum(sections.values()) / 5) * 100,
        "resume_strength": strength,
        "experience_detected": experience,
        "projects_detected": projects,
        "project_count": len(projects),
        "ai_feedback": ai_feedback,
        "parsed_data": parsed_data,
        "resume_rewrite": rewritten_resume,
        "interview_questions": interview_questions,
        "suggestions": suggestions
    }