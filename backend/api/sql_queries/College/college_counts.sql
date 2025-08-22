SELECT college, COUNT(*) AS total_surveys
FROM surveys
GROUP BY college
ORDER BY total_surveys DESC
