<script setup>
import GrdTable from '../components/grade/GrdTable.vue';
import GrdDialog from '../components/grade/GrdDialog.vue';
</script>

<template>
	<div class="table-title">
		<h1>Grades Table</h1>
		<grd-dialog></grd-dialog>
	</div>

	<grd-table></grd-table>
</template>

<style>
.table-title {
	display: flex;
	justify-content: space-between;
	align-items: center;

	padding: 1rem 2rem;
}
</style>
