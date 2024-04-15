// vite.config.js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	server: {
		proxy: {
			'/api': {
				target: 'http://178.154.199.253/dsks-cmw',
				ws: true,
				changeOrigin: true,
			},
		},
	},
});
