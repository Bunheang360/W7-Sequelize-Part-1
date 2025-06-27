import sequelize from "./db/database.js";
import express from 'express';
import { Student, Class, AttendanceRecord } from './models/index.js';

import attendanceRoutes from './routes/attendanceRoutes.js';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/', attendanceRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

const seedData = async () => {
  try {
    await sequelize.sync({ force: true }); 
    // Create classes
    const classA = await Class.create({ name: 'Math 101' });
    const classB = await Class.create({ name: 'Science 202' });

    // Create students
    const student1 = await Student.create({ name: 'Alice', ClassId: classA.id });
    const student2 = await Student.create({ name: 'Bob', ClassId: classA.id });
    const student3 = await Student.create({ name: 'Charlie', ClassId: classB.id });

    // Create attendance records
    await AttendanceRecord.bulkCreate([
      {
        date: '2025-06-26',
        status: 'present',
        StudentId: student1.id,
        ClassId: classA.id,
      },
      {
        date: '2025-06-26',
        status: 'absent',
        StudentId: student2.id,
        ClassId: classA.id,
      },
      {
        date: '2025-06-26',
        status: 'present',
        StudentId: student3.id,
        ClassId: classB.id,
      },
      {
        date: '2025-06-27',
        status: 'present',
        StudentId: student1.id,
        ClassId: classA.id,
      },
    ]);

    console.log('Seed data inserted.');
  } catch (err) {
    console.error('Error seeding data:', err);
  } finally {
    await sequelize.close();
  }
};

seedData();