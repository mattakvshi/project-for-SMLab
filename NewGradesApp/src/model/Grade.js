import store from '@/store'
import Formatter from "@/utils/Formatter"

export default class Grade {
    code
    courseCode
    studentCode
    grade
    gradeDate
    isDelete

    constructor(code, courseCode, studentCode, grade, gradeDate, isDelete) {
        this.code = code;
        this.courseCode = courseCode;
        this.studentCode = studentCode;
        this.grade = grade;
        this.gradeDate = gradeDate;
        this.isDelete = isDelete;
    }
    
    get courseName() {
        return store.state.grade.courses.get(this.courseCode).name;
    }

    get studentName() {
        return store.state.student.students.get(this.studentCode).fullName;
    }

    get formatGradeDate() {
        return Formatter.formatDate(this.gradeDate);
    }
}