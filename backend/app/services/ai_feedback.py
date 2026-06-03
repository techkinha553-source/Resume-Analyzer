from openai import OpenAI
import os


def generate_ai_feedback_llm(resume_text, job_description, ats_score):
    api_key = os.getenv("OPENAI_API_KEY")

    if not api_key:
        return (
            "AI feedback unavailable because OPENAI_API_KEY is not configured. "
            "Please add an API key or use the rule-based feedback system."
        )

    client = OpenAI(api_key=api_key)

    prompt = f"""
You are a professional senior technical recruiter.

Analyze this resume against the job description.

Return:
1. Strengths
2. Weaknesses
3. Missing Skills
4. Final Verdict (Hire / Maybe / No)

ATS Score: {ats_score}

Resume:
{resume_text}

Job Description:
{job_description}

Give concise, human-like feedback.
"""

    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {
                "role": "system",
                "content": "You are a strict technical recruiter."
            },
            {
                "role": "user",
                "content": prompt
            }
        ]
    )

    return response.choices[0].message.content