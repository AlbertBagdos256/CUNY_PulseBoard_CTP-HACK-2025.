SELECT college,
        SUM(CASE WHEN race = 'white' THEN 1 ELSE 0 END) AS white,
        SUM(CASE WHEN race = 'black' THEN 1 ELSE 0 END) AS black,
        SUM(CASE WHEN race = 'hispanic' THEN 1 ELSE 0 END) AS hispanic,
        SUM(CASE WHEN race = 'asian' THEN 1 ELSE 0 END) AS asian
FROM surveys
GROUP BY college