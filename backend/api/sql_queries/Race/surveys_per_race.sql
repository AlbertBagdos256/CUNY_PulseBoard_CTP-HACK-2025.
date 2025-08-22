SELECT race, 
       COUNT(*) AS total_surveys
FROM surveys
WHERE race NOT IN ('american_indian','middle_eastern', 'other', 'mixed')
GROUP BY race;
