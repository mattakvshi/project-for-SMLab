<script setup>
import Toolbar from 'primevue/toolbar';
import { ref, onMounted } from 'vue';

import { useStudentStore } from '../../store/modules/student';
import { useGradeStore } from '../../store/modules/grade';

const studentStore = useStudentStore();
const gradeStore = useGradeStore();

const fetchData = async () => {
	await Promise.all([
		gradeStore.getCourses(),
		studentStore.getStudents(),
		gradeStore.getGrades(),
	]);
};

onMounted(() => {
	fetchData();
});

const customers = ref();
</script>

<template>
	<div class="card">
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

<style scoped></style>
