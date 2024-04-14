import { createRouter, createWebHistory } from 'vue-router';
import Grades from '../view/Grades.vue';

const routes = [
	{
		path: '/',
		name: 'Grades',
		component: Grades,
	},
	{
		path: '/second',
		name: 'SecondView',
		component: () => import('../view/SecondView.vue'),
	},
];

const router = createRouter({
	history: createWebHistory('/'),
	routes,
});

export default router;
