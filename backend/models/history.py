from sqlalchemy import Column, Integer, String, JSON
from database import Base

class ResumeHistory(Base):
    __tablename__ = "resume_history"

    id = Column(Integer, primary_key=True)
    user_id = Column(String)
    resume_data = Column(JSON)