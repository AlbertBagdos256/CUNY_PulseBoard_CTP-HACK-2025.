SELECT college,
        SUM(CASE WHEN cuny_service = 'financial_aid' THEN 1 ELSE 0 END) AS financial_aid,
        SUM(CASE WHEN cuny_service = 'career_services' THEN 1 ELSE 0 END) AS career_services,
        SUM(CASE WHEN cuny_service = 'disability_services' THEN 1 ELSE 0 END) AS disability_services,
        SUM(CASE WHEN cuny_service = 'tutoring' THEN 1 ELSE 0 END) AS tutoring,
        SUM(CASE WHEN cuny_service = 'academic_advising' THEN 1 ELSE 0 END) AS academic_advising,
        SUM(CASE WHEN cuny_service = 'counseling' THEN 1 ELSE 0 END) AS counseling,
        SUM(CASE WHEN cuny_service = 'mental_health' THEN 1 ELSE 0 END) AS mental_health
FROM surveys
GROUP BY college