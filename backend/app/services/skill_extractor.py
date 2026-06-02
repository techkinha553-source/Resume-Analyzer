SKILLS = [
    "python",
    "java",
    "c++",
    "sql",
    "javascript",
    "react",
    "nextjs",
    "fastapi",
    "docker",
    "git",
    "github",
    "mongodb",
    "postgresql",
    "machine learning",
    "deep learning",
    "numpy",
    "pandas",
    "matplotlib"
]

def extract_skills(text: str):

    found_skills = []

    text = text.lower()

    for skill in SKILLS:
        if skill in text:
            found_skills.append(skill)

    return found_skills