const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});



pool.query(`
SELECT students.id, students.name as name, cohorts.name as cohort
FROM students
JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.name LIKE '%${process.argv[2]}%'
LIMIT ${process.argv[3] || 5};
`)
.then(res => {
  res.rows.forEach(student => {
    console.log(`${student.name} has an id of ${student.id} and was in the ${student.cohort} cohort.`)
  });
})
.catch(err => console.error('query error', err.stack));

pool.connect(() => {
  console.log('connected to pool')
});


