def rewrite_resume(resume_text: str):

    suggestions = []

    if "react" in resume_text.lower():
        suggestions.append(
            "Developed responsive React applications with reusable components and efficient state management."
        )

    if "python" in resume_text.lower():
        suggestions.append(
            "Built scalable Python-based solutions using automation and data processing techniques."
        )

    if "project" in resume_text.lower():
        suggestions.append(
            "Highlighted project outcomes with measurable impact and technical achievements."
        )

    if not suggestions:
        suggestions.append(
            "Add quantified achievements and stronger action verbs throughout your resume."
        )

    return suggestions