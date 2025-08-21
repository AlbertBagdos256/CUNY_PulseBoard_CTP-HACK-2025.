# temporary alternative to the ml model
def classify_response(text: str) -> dict:
    # Dummy logic (replace with real ML later)
    if "stress" in text.lower() or "anxiety" in text.lower():
        return {"Category": "Mental Health"}
    elif "money" in text.lower() or "scholarship" in text.lower():
        return {"Category": "Financial Aid"}
    else:
        return {"Category": "General Support"}
