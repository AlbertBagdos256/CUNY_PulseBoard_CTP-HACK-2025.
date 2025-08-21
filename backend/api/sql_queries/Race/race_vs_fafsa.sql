SELECT race,
       SUM(CASE WHEN fafsa = 1 THEN 1 ELSE 0 END) AS using_fafsa,
        SUM(CASE WHEN fafsa = 0 THEN 1 ELSE 0 END) AS no_using_fafsa
FROM surveys
WHERE race NOT IN ('american_indian','middle_eastern', 'other', 'mixed')
GROUP BY race