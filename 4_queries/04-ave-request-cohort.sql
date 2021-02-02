SELECT cohorts.name as cohort, avg(completed_at - started_at) as ave_assistance_time
FROM assistance_requests
JOIN students ON students.id = student_id
JOIN cohorts ON cohorts.id = cohort_id
GROUP BY cohort
ORDER BY ave_assistance_time;
