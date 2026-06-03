from reportlab.lib.pagesizes import letter
from reportlab.pdfgen import canvas

def generate_pdf_report(data, filename="report.pdf"):

    c = canvas.Canvas(filename, pagesize=letter)

    y = 750

    c.drawString(50, y, "AI Resume Analysis Report")
    y -= 40

    for key, value in data.items():
        text = f"{key}: {value}"
        c.drawString(50, y, text)
        y -= 20

    c.save()

    return filename