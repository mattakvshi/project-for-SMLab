<script setup>
import { ref } from 'vue';
import GrdTable from '../components/grade/GrdTable.vue';
import GrdDialog from '../components/grade/GrdDialog.vue';
import PreloaderSpinner from '../components/PreloaderSpinner.vue';

const suspenseKey = ref(0);

const changeKey = () => {
	suspenseKey.value += 1;
	//console.log(suspenseKey.value)
};
</script>

<template>
	<div class="table-title">
		<h1>Grades Table</h1>
		<GrdDialog :changeKey="changeKey" />
	</div>

	<Suspense :key="suspenseKey">
		<grd-table></grd-table>
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
