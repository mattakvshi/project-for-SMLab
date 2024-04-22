<script setup>
import { onMounted, ref } from 'vue';

const activeLink = ref(0);

onMounted(() => {
	if (window.location.pathname === '/') {
		activeLink.value = 0;
	} else {
		activeLink.value = 1;
	}
});

const activeGrades = () => {
	//router.push('/');
	activeLink.value = 0;
};

const activeSecondView = () => {
	//router.push('/second');
	activeLink.value = 1;
};
</script>

<template>
	<div class="row-block">
		<router-link to="/">
			<img
				@click="activeGrades"
				alt="SMLab"
				src="/src/assets/img/logo_gavr.png"
				style="
					width: 120px;
					background-color: #ece9fc;
					border-radius: 50px;
					padding: 0.5rem 1rem;
				"
			/>
		</router-link>
		<router-link to="/">
			<Button
				@click="activeGrades"
				label="Grades"
				text
				plain
				icon="pi pi-list"
				:outlined="activeLink === 0"
			/>
		</router-link>
		<router-link to="/second">
			<Button
				@click="activeSecondView"
				label="Second view"
				text
				plain
				icon="pi pi-chart-pie"
				:outlined="activeLink === 1"
			/>
		</router-link>
	</div>
</template>

<style scoped>
.row-block {
	display: flex;
	align-items: center;
	gap: 20px;
}
</style>
