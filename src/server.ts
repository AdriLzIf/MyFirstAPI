import './loadEnvironment.js';
import express from 'express';

const app = express();

const port = process.env.HOST_PORT ?? '3000';

const students_array = [
  "Franco Colapinto",
"Ivan",
"Joan",
"Yago el ruletillas",
"Arnau",
"Mateo",
"Nico",
"Roger",
"Satenik",
"Santiago",
"Oriol",
"Oscar",
"Adrián",
"Paul",
"Nil",
"Joshua"
];

const contador_students = students_array.length;

app.get('/students', (_, res) => {

res.json({contador_students, students_array});
});

app.listen(port, () => {

  console.log(`[server]: Server is running at http://localhost:${port}/students`);
});
export default app;
