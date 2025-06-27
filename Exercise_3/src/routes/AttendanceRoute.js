import express from 'express';
import {
  markAttendance,
  getAttendanceForDate,
  getAttendanceForClass,
  getStudentSummary,
} from "../controller/AttendanceController.js";

const router = express.Router();


router.post('/attendance', async (req, res) => {
  const { studentId, date, status } = req.query;
  try {
    const result = await markAttendance(studentId, date, status);
    res.json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/attendance', async (req, res) => {
  const { studentId, date } = req.query;
  try {
    const result = await getAttendanceForDate(studentId, date);
    res.json(result || { message: 'No record found' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


router.get('/classes/:id/attendance', async (req, res) => {
  try {
    const result = await getAttendanceForClass(req.params.id);
    res.json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


router.get('/students/:id/attendance', async (req, res) => {
  try {
    const result = await getStudentSummary(req.params.id);
    res.json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;