from openai import OpenAI
import os

def rewrite_resume_llm(resume_text):

    api_key = os.getenv("OPENAI_API_KEY")

    if not api_key:
        return ["OpenAI API key not configured"]

    client = OpenAI(api_key=api_key)

    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {
                "role": "system",
                "content": "You are an expert ATS resume writer."
            },
            {
                "role": "user",
                "content": f"""
Rewrite and improve these resume points:

{resume_text}

Return only 5 improved bullet points.
"""
            }
        ]
    )

    return response.choices[0].message.content