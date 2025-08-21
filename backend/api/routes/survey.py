from fastapi import  APIRouter
from pydantic import BaseModel
import aiosqlite, asyncio
from machine_learning import classify_response

# FastAPI router instance for this module
router = APIRouter()

# ---- Pydantic model ----
# Define the structure of the incoming survey request
class SurveyRequest(BaseModel):
    college: str        # college name
    major: str          # Student's major
    fafsa: bool         # Whether the student fills FAFSA
    disability: bool    # Whether the student has a disability
    race: str           # Student's race
    first_gen: bool     # Whether the student is a first-generation student
    cuny_service: str   # Service used by the student
    free_response: str  # Open-ended response for ML classification


# Route to submit a survey
@router.post("/")
async def submit_survey(data: SurveyRequest):
    """
    Receives survey data, classifies the free-response text using ML,
    and stores the survey in the SQLite database.
    """
    # Run ML classification (non-blocking)
    classification = await asyncio.to_thread(classify_response, data.free_response)
    category = classification["Category"]
    
    return {

    }