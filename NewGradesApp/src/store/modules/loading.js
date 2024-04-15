import { defineStore } from 'pinia';

export const useLoadingStore = defineStore('loading', {
	state: () => ({
		drawer: true,
		isLoading: true,
	}),

	actions: {
		toggleDrawer(state) {
			state.drawer = !state.drawer;
		},
		setIsLoading(state, flag) {
			state.isLoading = flag;
		},
	},
});
