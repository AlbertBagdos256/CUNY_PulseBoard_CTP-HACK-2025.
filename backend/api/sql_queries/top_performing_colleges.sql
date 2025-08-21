SELECT college, 
       COUNT(*) as total_surveys 
FROM surveys
GROUP BY college
ORDER BY total_surveys DESC
LIMIT 5