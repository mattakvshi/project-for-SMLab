<script setup>
import { ref } from 'vue';
import GrdTable from '../components/grade/GrdTable.vue';
import GrdDialog from '../components/grade/GrdDialog.vue';


const suspenseKey = ref(0); 

const changeKey = () => {
	suspenseKey.value += 1;
	console.log(suspenseKey.value)
}
</script>

<template>
	<div class="table-title">
		<h1>Grades Table</h1>
		<GrdDialog :changeKey="changeKey" />
	</div>

	<Suspense :key="suspenseKey">
		<grd-table></grd-table>
		<template #fallback>
			<div
				class="card flex justify-content-center align-items-center"
				style="height: 60vh"
			>
				<ProgressSpinner
					style="width: 60px; height: 60px"
					strokeWidth="8"
					fill="var(--surface-ground)"
					animationDuration=".5s"
					aria-label="Custom ProgressSpinner"
				/>
			</div>
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
