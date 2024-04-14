<script setup>
import { usePrimeVue } from 'primevue/config';
import HelloWorld from './components/HelloWorld.vue';
import { ref, watch } from 'vue';

const PrimeVue = usePrimeVue();

const isDarkTheme = ref(false);

let currentTheme = 'aura-light-purple';
let nextTheme = 'aura-dark-purple';

const toggleTheme = () => {
	//console.log('Toggle theme function called');
	PrimeVue.changeTheme(currentTheme, nextTheme, 'id-to-link', () => {
		isDarkTheme.value = !isDarkTheme.value;
	});
	[currentTheme, nextTheme] = [nextTheme, currentTheme];
};

const themeIco = ref('pi pi-sun');

// Используем функцию watch для отслеживания изменений в переменной isDarkTheme
watch(isDarkTheme, newValue => {
	themeIco.value = newValue ? 'pi pi-moon' : 'pi pi-sun';

	console.log(themeIco.value);
});
</script>

<template>
	<div>
		<a href="https://vitejs.dev" target="_blank">
			<img src="/vite.svg" class="logo" alt="Vite logo" />
		</a>
		<a href="https://vuejs.org/" target="_blank">
			<img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
		</a>
	</div>
	<HelloWorld
		msg="Vue 3 + Vite + Pinia + PrimeVue"
		:toggleTheme="toggleTheme"
		:themeIco="themeIco"
	/>
</template>

<style></style>
