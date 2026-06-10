from dotenv import load_dotenv
load_dotenv()
from fastapi import FastAPI
from app.routes.resume import router
from fastapi.middleware.cors import CORSMiddleware
from app.routes.auth import router as auth_router
from app.routes.resume_builder import router as resume_builder_router


app = FastAPI()
app.include_router(auth_router, prefix="/auth")
app.include_router(resume_builder_router)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:3000",
        "http://10.178.212.21:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router)

@app.get("/")
def home():
    return {"message": "Resume Analyzer API Running"} 