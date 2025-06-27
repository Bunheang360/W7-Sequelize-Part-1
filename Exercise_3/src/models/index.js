import Student from "./StudentModel.js";
import Class from "./ClassModel.js";
import AttendanceRecord from "./AttendanceRecordModel.js";


Student.belongsTo(Class);
Class.hasMany(Student);

AttendanceRecord.belongsTo(Student);
Student.hasMany(AttendanceRecord);

AttendanceRecord.belongsTo(Class);
Class.hasMany(AttendanceRecord);

export { Student, Class, AttendanceRecord };