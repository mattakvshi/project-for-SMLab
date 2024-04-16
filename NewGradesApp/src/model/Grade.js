import { useGradeStore } from '../store/modules/grade';
import { useStudentStore } from '../store/modules/student';
import Formatter from '../utils/Formatter';

export default class Grade {
	code;
	courseCode;
	studentCode;
	grade;
	gradeDate;
	isDelete;

	constructor(code, courseCode, studentCode, grade, gradeDate, isDelete) {
		this.code = code;
		this.courseCode = courseCode;
		this.studentCode = studentCode;
		this.grade = grade;
		this.gradeDate = gradeDate;
		this.isDelete = isDelete;
	}

	get courseName() {
		const gradeStore = useGradeStore();
		console.log( gradeStore.courses.get(this.courseCode));
		return gradeStore.courses.get(this.courseCode).name;
	}

	get studentName() {
		const studentStore = useStudentStore();
		return studentStore.students.get(this.studentCode).fullName;
	}

	get formatGradeDate() {
		return Formatter.formatDate(this.gradeDate);
	}
}
