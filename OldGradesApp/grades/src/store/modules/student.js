import api from '@/store/api'
import Student from '../../model/Student'

export default {
    namespaced: true,

    state: {
        students: new Map()
    },

    mutations: {
        setStudents(state, data) {
            data.forEach(student => {
                state.students.set(
                    student.code,
                    new Student(
                        student.code,
                        student.fullName,
                        student.datetime
                    )
                );
            });
        }
    },

    actions: {
        async getStudents(context) {
            context.commit('setStudents', await api.student());
        }
    }
}