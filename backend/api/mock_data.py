import pandas as pd
import numpy as np
import sqlite3
from pathlib import Path
from datetime import datetime, timedelta

def generate_survey_data(n_rows=1000):
    # Possible options
    colleges = ["baruch","bronx","brooklyn","city","college_of_staten_island","hostos",
                    "hunter","john_jay","kingsborough","la_guardia","lehman", "medgar_evers",
                    "new_york_city_college_of_technology","borough_of_manhattan","queens",
                    "queensborough", "york"]
    majors = ["Business","Health Professions","Psychology","Biology","Engineering","Social Sciences",
               "Computer Science","Communications","Finance","Criminal Justice","Education",
               "Nursing","Art","English","Marketing","Anthropology Sociology","History","Kinesiology",
                "Environmental Science", "Economics","Other"]
    
    races = ["american_indian","asian","black","hispanic","middle_eastern","white","mixed","other"]

    cuny_services = ["academic_advising","counseling","financial_aid","career_services","tutoring","disability_services",
                "mental_health","none","other"]
    

    # Random datetimes within last 365 days
    now = datetime.utcnow()
    random_days = np.random.randint(0, 365, n_rows)
    random_seconds = np.random.randint(0, 86400, n_rows)  # random time of day
    submitted_at = [now - timedelta(days=int(d), seconds=int(s)) for d, s in zip(random_days, random_seconds)]

    # Random DataFrame
    df = pd.DataFrame({
        "id": np.arange(1, n_rows+1),
        "college": np.random.choice(colleges, n_rows),
        "major": np.random.choice(majors, n_rows),
        "fafsa": np.random.randint(0, 2, n_rows),
        "disability": np.random.randint(0, 2, n_rows),
        "race": np.random.choice(races, n_rows),
        "first_gen": np.random.randint(0, 2, n_rows),
        "cuny_service": np.random.choice(cuny_services, n_rows),
        "desired_service": np.random.choice(cuny_services, n_rows),
        "submitted_at": submitted_at
    })
    return df

def save_to_sqlite(df, db_path="surveys.db"):
    db_path = Path(db_path)
    conn = sqlite3.connect(db_path)

    # Save to a table called "surveys"
    df.to_sql("surveys", conn, if_exists="replace", index=False)

    conn.commit()
    conn.close()
    print(f"✅ Mock data saved to {db_path} in table 'surveys'")

if __name__ == "__main__":
    df = generate_survey_data(1000)
    save_to_sqlite(df, "backend/api/surveys.db")  # adjust path if needed
