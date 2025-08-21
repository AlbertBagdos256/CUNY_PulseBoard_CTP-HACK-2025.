from fastapi import FastAPI
from routes import survey
from routes import analytics
from fastapi.middleware.cors import CORSMiddleware

# Initialize FastAPI application with a title
app = FastAPI(title="CUNYPulseBoard Backend")

# -----------------------------
# Middleware Configuration
# -----------------------------
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # React app url
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods (GET, POST, etc.)
    allow_headers=["*"],  # Allow all headers
)


# Routes initialization
app.include_router(survey.router, prefix="/survey", tags=["Survey"])
app.include_router(analytics.router, prefix="/analytics", tags=["Analytics"])


@app.get("/")
def root():
    return {"message": "CUNY Survey API is running! :)"}
