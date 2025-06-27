import { AttendanceRecord, Student, Class } from '../models/index.js';

export const markAttendance = async (studentId, date, status = 'present') => {
  const student = await Student.findByPk(studentId);
  if (!student) throw new Error('Student not found');

  const classId = student.ClassId;

  const [record, created] = await AttendanceRecord.findOrCreate({
    where: { studentId, date },
    defaults: { status, ClassId: classId },
  });

  if (!created) {
    record.status = status;
    await record.save();
  }

  return record;
};

export const getAttendanceForDate = async (studentId, date) => {
  return await AttendanceRecord.findOne({ where: { studentId, date } });
};

export const getAttendanceForClass = async (classId) => {
  return await AttendanceRecord.findAll({
    where: { ClassId: classId },
    include: [Student],
  });
};

export const getStudentSummary = async (studentId) => {
  const records = await AttendanceRecord.findAll({ where: { studentId } });

  const summary = {
    total: records.length,
    present: records.filter(r => r.status === 'present').length,
    absent: records.filter(r => r.status === 'absent').length,
  };

  return summary;
};