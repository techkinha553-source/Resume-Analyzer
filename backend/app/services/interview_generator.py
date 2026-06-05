def generate_interview_questions(
    skills,
    projects
):

    questions = []

    skill_questions = {
        "python": "Explain Python decorators and their use cases.",
        "java": "What is the difference between JDK, JRE, and JVM?",
        "javascript": "Explain closures in JavaScript.",
        "react": "What are React Hooks and why are they useful?",
        "sql": "What is the difference between WHERE and HAVING?",
        "postgresql": "How does PostgreSQL indexing improve performance?",
        "git": "Explain the Git rebase command.",
        "github": "Describe a GitHub workflow you have used."
    }

    for skill in skills:

        skill_lower = skill.lower()

        if skill_lower in skill_questions:
            questions.append(
                skill_questions[skill_lower]
            )

    for project in projects[:3]:

        questions.append(
            f"Explain the architecture and implementation of '{project}'."
        )

        questions.append(
            f"What technical challenges did you face while building '{project}'?"
        )

    return questions[:10]