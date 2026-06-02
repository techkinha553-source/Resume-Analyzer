def calculate_ats_score(
    resume_skills,
    jd_skills
):

    matched = list(
        set(resume_skills)
        &
        set(jd_skills)
    )

    missing = list(
        set(jd_skills)
        -
        set(resume_skills)
    )

    if len(jd_skills) == 0:
        score = 0
    else:
        score = (
            len(matched)
            /
            len(jd_skills)
        ) * 100

    return {
        "score": round(score, 2),
        "matched": matched,
        "missing": missing
    }