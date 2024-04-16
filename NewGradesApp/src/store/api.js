import ReqExec from '../services/RequestExecutor';
ReqExec.baseUrl = 'api/rest/kubsu_study/web_data_api/'; //подставьте свои значения в сегменты пути

const endpoints = {
	init: 'init_data',
	course: 'course',
	student: 'student',
	grade: 'grade',
};

export default {
	course: () => {
		try {
			return ReqExec.get(endpoints.course);
		} catch (error) {
			throw error; // Перебросить ошибку для дальнейшей обработки
		}
	},

	student: () => {
		try {
			return ReqExec.get(endpoints.student);
		} catch (error) {
			throw error;
		}
	},

	grade: () => {
		try {
			return ReqExec.get(endpoints.grade);
		} catch (error) {
			throw error;
		}
	},

	postGrade: grade => {
		try {
			return ReqExec.post(endpoints.grade, grade);
		} catch (error) {
			throw error;
		}
	},

	putGrade: (code, grade) => {
		try {
			return ReqExec.put(endpoints.grade, code, grade);
		} catch (error) {
			throw error;
		}
	},

	deleteGrade: code => {
		try {
			return ReqExec.delete(endpoints.grade, code);
		} catch (error) {
			throw error;
		}
	},

	initData: () => {
		try {
			return ReqExec.get(endpoints.init);
		} catch (error) {
			throw error;
		}
	},

	//аутентификация, не изменять
	auth: {
		getSession: () => ReqExec.execute('api/auth/getSession', true),
		getUser: () => ReqExec.execute('api/auth/getUser', true),
	},
};
