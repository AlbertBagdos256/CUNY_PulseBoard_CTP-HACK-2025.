SELECT race,
       SUM(CASE WHEN first_gen = 1 THEN 1 ELSE 0 END) AS first_gen,
       SUM(CASE WHEN first_gen = 0 THEN 1 ELSE 0 END) AS non_first_gen
FROM surveys
WHERE race NOT IN ('american_indian','middle_eastern', 'other', 'mixed')
GROUP BY race