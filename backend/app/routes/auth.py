from fastapi import APIRouter
from app.auth.jwt_handler import create_token

router = APIRouter()

@router.post("/login")
def login(user: dict):
    token = create_token({"user_id": user["email"]})
    return {"access_token": token, "token_type": "bearer"}