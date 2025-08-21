WITH race_college_counts AS (
    SELECT 
        race,
        college,
        COUNT(*) AS total_responses,
        ROW_NUMBER() OVER (
            PARTITION BY race 
            ORDER BY COUNT(*) DESC
        ) AS rn
    FROM surveys
    WHERE race NOT IN ('american_indian','middle_eastern', 'other', 'mixed')
    GROUP BY race, college
)
SELECT race, college, total_responses
FROM race_college_counts
WHERE rn = 1;