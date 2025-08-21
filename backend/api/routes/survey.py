from fastapi import  APIRouter
from pydantic import BaseModel
import aiosqlite, asyncio
from machine_learning import classify_response
from datetime import datetime

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
    submitted_at: datetime  # Open-ended response for ML classification


# Route to submit a survey
@router.post("/")
async def submit_survey(data: SurveyRequest):
    """
    Endpoint: Submit a survey response

    Steps:
    1. Run the ML classifier on the free_response field using asyncio.to_thread
       to avoid blocking the event loop. This allows handling multiple requests concurrently.
    2. Connect asynchronously to the SQLite database (aiosqlite) to store the survey.
    3. Insert survey data into the 'surveys' table, adding the ML-predicted category
       as 'desired_service'.
    4. Commit the transaction and return a JSON response with both the original
       survey data and the ML result.

    Returns:
        JSON object containing:
            - message: Confirmation message
    """
    # Run ML classification (non-blocking)
    classification = await asyncio.to_thread(classify_response, data.free_response)
    service_category = classification["Category"]
    
    async with aiosqlite.connect("surveys.db") as db:
        await db.execute(
            """
            INSERT INTO surveys 
            (college, major, fafsa, disability, race, first_gen, cuny_service, desired_service, submitted_at)
            VALUES (:college, :major, :fafsa, :disability, :race, :first_gen, :cuny_service, :desired_service, :submitted_at)
            """,
            {**data.model_dump(), "desired_service": service_category}
        )
        await db.commit()

    return {
        "message": "Survey submitted successfully",
    }