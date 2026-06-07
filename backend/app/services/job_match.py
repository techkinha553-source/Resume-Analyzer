

def calculate_job_match(resume_skills, jd_skills):
    matched = len(set(resume_skills) & set(jd_skills))
    total = max(len(jd_skills), 1)

    return round((matched / total) * 100)