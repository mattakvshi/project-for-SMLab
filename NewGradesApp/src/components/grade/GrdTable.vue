<template>
	<div class="card">
		<div class="table-title">
			<h1>Grades Table</h1>
			<Button icon="pi pi-plus" style="width: 40px; height: 40px" />
		</div>

		<DataTable
			:value="customers"
			paginator
			:rows="5"
			:rowsPerPageOptions="[5, 10, 20, 50]"
			tableStyle="min-width: 50rem"
			paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
			currentPageReportTemplate="{first} to {last} of {totalRecords}"
		>
			<template #paginatorstart>
				<Button type="button" icon="pi pi-refresh" text />
			</template>
			<template #paginatorend>
				<Button type="button" icon="pi pi-download" text />
			</template>
			<Column field="name" header="Name" style="width: 25%"></Column>
			<Column field="country.name" header="Country" style="width: 25%"></Column>
			<Column field="company" header="Company" style="width: 25%"></Column>
			<Column
				field="representative.name"
				header="Representative"
				style="width: 25%"
			></Column>
		</DataTable>
	</div>
</template>

<script setup>
import Toolbar from 'primevue/toolbar';
import { ref, onMounted } from 'vue';
//import { CustomerService } from '@/service/CustomerService';

// onMounted(() => {
// 	CustomerService.getCustomersMedium().then(data => (customers.value = data));
// });

const customers = ref();
</script>

<style scoped>
.table-title {
	display: flex;
	justify-content: space-between;
	align-items: center;

	padding: 1rem 2rem;
}
</style>
