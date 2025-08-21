SELECT cuny_service, 
       COUNT(*) as total_responses 
FROM surveys
WHERE cuny_service != 'none'
GROUP BY cuny_service
ORDER BY total_responses DESC
LIMIT 5