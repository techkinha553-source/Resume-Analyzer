from openai import OpenAI
import os
import json


def generate_ai_feedback_llm(resume_text, job_description, ats_score):
    api_key = os.getenv("OPENAI_API_KEY")

    if not api_key or api_key == "sk-your-api-key-here":
        return {
            "ai_feedback": [
                "OpenAI API key not configured. Using fallback feedback."
            ],
            "resume_strength": "Good"
        }

    try:
        client = OpenAI(api_key=api_key)

        prompt = f"""
You are a FAANG senior recruiter.

Analyze resume vs job description.

Return ONLY valid JSON:

{{
  "ai_feedback": [
    "short actionable point 1",
    "short actionable point 2",
    "short actionable point 3"
  ],
  "resume_strength": "Weak | Good | Strong | Excellent",
  "missing_skills": ["skill1", "skill2"],
  "improvements": ["improvement1", "improvement2"]
}}

Rules:
- Output ONLY JSON
- No markdown
- No explanation

ATS Score: {ats_score}

Resume:
{resume_text}

Job Description:
{job_description}
"""

        response = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[
                {
                    "role": "system",
                    "content": "You are a strict JSON generator for ATS systems."
                },
                {
                    "role": "user",
                    "content": prompt
                }
            ],
            temperature=0.3
        )

        content = response.choices[0].message.content.strip()
        return json.loads(content)

    except Exception as e:
        return {
            "ai_feedback": generate_rule_based_feedback(
                resume_text,
                job_description,
                ats_score
            ),
            "resume_strength": "Good",
            "error": str(e)
        }


def generate_rule_based_feedback(resume_text, job_description, ats_score):
    feedback = []

    if ats_score < 50:
        feedback.append("ATS score is low. Improve keyword matching with job description.")
        feedback.append("Add missing core technical skills relevant to the role.")
    elif ats_score < 75:
        feedback.append("Good resume, but needs better keyword optimization.")
        feedback.append("Add more project impact statements with measurable results.")
    else:
        feedback.append("Strong resume match with job description.")
        feedback.append("Enhance readability and add leadership impact.")

    if "docker" not in resume_text.lower():
        feedback.append("Consider adding Docker experience for better DevOps alignment.")

    if "fastapi" not in resume_text.lower():
        feedback.append("Add FastAPI experience to strengthen backend profile.")

    return feedback