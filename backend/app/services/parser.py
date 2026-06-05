import re


def extract_email(text):
    match = re.search(
        r"[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}",
        text,
    )
    return match.group(0) if match else ""


def extract_phone(text):
    match = re.search(
        r"(\+91[\s-]?)?[0-9]{10}",
        text,
    )
    return match.group(0) if match else ""


def extract_name(text):
    lines = text.split("\n")

    for line in lines:
        line = line.strip()

        if (
            len(line.split()) >= 2
            and "@" not in line
            and len(line) < 40
        ):
            return line

    return ""


def parse_resume(text, skills):
    return {
        "name": extract_name(text),
        "email": extract_email(text),
        "phone": extract_phone(text),
        "skills": skills,
    }