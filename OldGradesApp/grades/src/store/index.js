import Vue from 'vue'
import Vuex from 'vuex'

import auth from '@/store/modules/auth'
import student from '@/store/modules/student'
import grade from '@/store/modules/grade'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        drawer: true,
        isLoading: true
    },

    mutations: {
        toggleDrawer(state) {state.drawer = !state.drawer},
        setIsLoading(state, flag) {state.isLoading = flag}
    },

    actions: {

    },

    modules: {
        auth,
        student,
        grade
    }
})
