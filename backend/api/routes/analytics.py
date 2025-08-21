from pathlib import Path
import aiosqlite
from fastapi import APIRouter
from fastapi.responses import JSONResponse
import time

# FastAPI router instance for this module
router = APIRouter()
# Define base paths for queries and DB.
BASE_DIR = Path(__file__).parent        # backend/api/routes
SQL_DIR = BASE_DIR.parent / "sql_queries"   # backend/queries
DB_PATH = BASE_DIR.parent / "surveys.db"  # adjust if DB is here

async def run_sql_file(db_path, sql_file: Path):
    """
    Utility: Execute a SQL file asynchronously against SQLite.

    Steps:
    1. Read the SQL query text from the given file path.
    2. Establish a new aiosqlite connection to the database.
    3. Execute the query asynchronously and fetch all results.
    4. Map each row into a dictionary where keys = column names.

    Args:
        db_path (str | Path): Path to SQLite database file.
        sql_file (Path): Path to the .sql file containing the query.

    Returns:
        list[dict]: List of query results as dictionaries.
    """

    async with aiosqlite.connect(db_path) as db:
        sql = sql_file.read_text(encoding="utf-8")
        async with db.execute(sql) as cursor:
            columns = []
            for c in cursor.description:
                columns.append(c[0])
            rows = await cursor.fetchall()
            return [dict(zip(columns, row)) for row in rows]


@router.post("/")
async def get_analytics():
    """
    Endpoint: Collect analytics from multiple survey SQL queries.

    Steps:
    1. Start execution timer to measure performance.
    2. Run predefined SQL files asynchronously to fetch aggregated survey insights
    4. Return as JSONResponse with execution time for monitoring.

    Returns:
        JSON object containing:
            - execution_time (float): Query runtime in seconds
            - results (dict): Aggregated survey analytics results
    """

    start = time.perf_counter()

    total_surveys = await run_sql_file(DB_PATH, SQL_DIR / "total_surveys.sql")
    top_colleges = await run_sql_file(DB_PATH, SQL_DIR / "top_performing_colleges.sql")
    count_colleges = await run_sql_file(DB_PATH, SQL_DIR / "count_cuny_colleges.sql")
    top_cuny_services = await run_sql_file(DB_PATH, SQL_DIR / "top_cuny_services.sql")
    surveys_per_month = await run_sql_file(DB_PATH, SQL_DIR / "surveys_per_month.sql")
    
    cuny_service_race = await run_sql_file(DB_PATH, SQL_DIR / "Race/cuny_service_race.sql")
    surveys_per_race = await run_sql_file(DB_PATH, SQL_DIR / "Race/surveys_per_race.sql")

    result = {
        "total_surveys":total_surveys,
        "top_colleges":top_colleges,
        "count_colleges":count_colleges,
        "top_cuny_services":top_cuny_services,
        "surveys_per_month":surveys_per_month,
        "cuny_service_race":cuny_service_race,
        "surveys_per_race":surveys_per_race
    }
    end = time.perf_counter()
    exec_time = round(end - start, 6)
    return JSONResponse(
        content={
            "execution_time":exec_time,
            "results":result
        }
    )
