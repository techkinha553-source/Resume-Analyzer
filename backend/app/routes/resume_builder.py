from fastapi import APIRouter
from openai import OpenAI
import os

router = APIRouter()

client = OpenAI()

# -----------------------------
# Generate New Resume (AI)
# -----------------------------
@router.post("/generate-resume")
async def generate_resume(data: dict):

    prompt = f"""
You are an expert ATS resume writer.
Create a professional ATS-optimized resume.

User Details:
Name: {data.get('name')}
Email: {data.get('email')}
Phone: {data.get('phone')}
Location: {data.get('location')}

Education:
{data.get('education')}

Skills:
{data.get('skills')}

Projects:
{data.get('projects')}

Experience:
{data.get('experience')}

Achievements:
{data.get('achievements')}

Rules:
- Professional formatting
- ATS optimized
- Strong summary
- No fake experience or companies
"""

    response = client.chat.completions.create(
        model="gpt-4.1-mini",
        messages=[
            {"role": "user", "content": prompt}
        ]
    )

    return {
        "resume": response.choices[0].message.content
    }


# -----------------------------
# Improve Existing Resume (AI)
# -----------------------------
@router.post("/improve-resume")
async def improve_resume(data: dict):

    existing_resume = data.get("resume", "")

    prompt = f"""
You are an expert resume improvement AI.
Improve and optimize the following resume for ATS systems and recruiter impact.

Rules:
- Improve wording and clarity
- Make it more professional
- Add missing ATS keywords where relevant
- Do NOT invent fake experience
- Keep truthfulness

Resume:
{existing_resume}
"""

    response = client.chat.completions.create(
        model="gpt-4.1-mini",
        messages=[
            {"role": "user", "content": prompt}
        ]
    )

    return {
        "resume": response.choices[0].message.content
    }