import { defineStore } from 'pinia';

export const useLoadingStore = defineStore('loading', {
	state: () => ({
		drawer: true,
		isLoading: true,
	}),

	actions: {
		toggleDrawer() {
			this.drawer = !this.drawer;
		},
		setIsLoading(flag) {
			this.isLoading = flag;
		},
	},
});
