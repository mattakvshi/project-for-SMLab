<script setup>
import { ref } from 'vue';
import SecondSection from '../components/secongView/SecondSection.vue';
import PreloaderSpinner from '../components/PreloaderSpinner.vue';

// const suspenseKey = ref(0);

// const changeKey = () => {
// 	suspenseKey.value += 1;
// 	//console.log(suspenseKey.value)
// };
</script>

<template>
	<div class="table-title">
		<h1>Grades Stats</h1>
	</div>

	<Suspense>
		<second-section></second-section>
		<template #fallback>
			<preloader-spinner></preloader-spinner>
		</template>
	</Suspense>
</template>

<style>
.table-title {
	display: flex;
	justify-content: space-between;
	align-items: center;

	padding: 1rem 2rem;
}
</style>
