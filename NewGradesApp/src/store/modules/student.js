import { defineStore } from 'pinia';
import api from '../api';
import Student from '../../model/Student';

export const useStudentStore = defineStore('student', {
	state: () => ({
		students: new Map(),
	}),

	actions: {
		async getStudents() {
			this.students = new Map(
				(await api.student()).map(student => [
					student.code,
					new Student(student.code, student.fullName, student.datetime),
				])
			);
		},
	},
});
