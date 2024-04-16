import { defineStore } from 'pinia';
import api from '../api';
import Grade from '../../model/Grade';
import Course from '../../model/Course';

export const useGradeStore = defineStore('grade', {
	state: () => ({
		courses: new Map(),
		grades: [],
		newGradeDialog: false,
	}),

	actions: {
		async getCourses() {
			this.courses = new Map(
				(await api.course()).map(course => [
					course.code,
					new Course(
						course.code,
						course.name,
						course.dateStart,
						course.dateEnd
					),
				])
			);
		},

		async getGrades() {
			this.grades = (await api.grade()).map(
				grade =>
					new Grade(
						grade.code,
						grade.courseCode,
						grade.studentCode,
						grade.grade,
						grade.gradeDate,
						grade.isDelete
					)
			);
		},

		async postGrade(grade) {
			this.grades.push(
				new Grade(
					grade.code,
					grade.courseCode,
					grade.studentCode,
					grade.grade,
					grade.gradeDate,
					grade.isDelete
				)
			);

			await api.postGrade(grade);
		},

		async putGrade(grade) {
			await api.putGrade(grade.code, grade);
		},

		async deleteGrade(grade) {
			try {
				if (!(await api.deleteGrade(grade.code)).resultCode) {
					grade.isDelete = 1;
					this.grades.splice(this.grades.indexOf(grade), 1, grade);
				}
			} catch (error) {
				throw error;
			}
		},

		async initData() {
			try {
				this.grades = (await api.initData()).map(
					grade =>
						new Grade(
							grade.code,
							grade.courseCode,
							grade.studentCode,
							grade.grade,
							grade.gradeDate,
							grade.isDelete
						)
				);
			} catch (error) {
				throw error;
			}
		},
	},
});
