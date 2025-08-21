from pathlib import Path
import aiosqlite
from fastapi import APIRouter
from fastapi.responses import JSONResponse

# FastAPI router instance for this module
router = APIRouter()


@router.post("/")
async def get_analytics():
    """
    Reads a SQL file and executes it asynchronously against the SQLite database.
    Returns results as a Json file.
    """
    return JSONResponse()
