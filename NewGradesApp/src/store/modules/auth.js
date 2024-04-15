import { defineStore } from 'pinia';
import api from '../api';

export const useAuthStore = defineStore('auth', {
	state: () => ({
		session: true,
		user: 'Студент',
	}),

	actions: {
		async getSession() {
			this.session = await api.auth.getSession();
		},

		async getUser() {
			this.user = await api.auth.getUser();
		},
	},
});
