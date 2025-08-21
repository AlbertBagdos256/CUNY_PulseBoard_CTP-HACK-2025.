WITH months_total AS (
    SELECT 
        strftime('%Y-%m', submitted_at) AS year_month,  -- "2025-08"
        COUNT(*) AS total_surveys
    FROM surveys
    GROUP BY year_month
    ORDER BY year_month
)
SELECT year_month, total_surveys
FROM months_total;
