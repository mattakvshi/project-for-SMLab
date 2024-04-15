import { useGradeStore } from '../store/modules/grade';
import { useStudentStore } from '../store/modules/student';
import Formatter from '../utils/Formatter';

export default class Grade {
	gradeStore = useGradeStore();
	useStudentStore = useStudentStore();
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
		return this.gradeStore.courses.get(this.courseCode).name;
	}

	get studentName() {
		return this.studentStore.students.get(this.studentCode).fullName;
	}

	get formatGradeDate() {
		return Formatter.formatDate(this.gradeDate);
	}
}
