<script setup>
import { usePrimeVue } from 'primevue/config';
import NavBar from './components/NavBar.vue';
import { provide, ref, watch } from 'vue';

const PrimeVue = usePrimeVue();

const toast = ref(null);

provide('toast', toast);

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
	//console.log(themeIco.value);
});
</script>

<template>
	<Toast ref="toast" position="bottom-right" />
	<NavBar :toggleTheme="toggleTheme" :themeIco="themeIco" />
	<router-view></router-view>
</template>

<style></style>
