import ReqExec from '@/services/RequestExecutor'
ReqExec.baseUrl = "api/rest/kubsu_study/web_data_api/"; //подставьте свои значения в сегменты пути

const endpoints = {
    init: "init_data",
    course: "course",
    student: "student",
    grade: "grade"
};

export default {    
    course: () => ReqExec.get(endpoints.course),

    student: () => ReqExec.get(endpoints.student),

    grade: () => ReqExec.get(endpoints.grade),
    postGrade: grade => ReqExec.post(endpoints.grade, grade),
    putGrade: (code, grade) => ReqExec.put(endpoints.grade, code, grade),
    deleteGrade: code => ReqExec.delete(endpoints.grade, code),

    initData: () => ReqExec.get(endpoints.init),

    //аутентификация, не изменять
    auth: {
        getSession: () => ReqExec.execute("api/auth/getSession", true),
        getUser: () => ReqExec.execute("api/auth/getUser", true)
    }
}