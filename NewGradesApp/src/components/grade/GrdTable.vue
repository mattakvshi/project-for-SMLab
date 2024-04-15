<script setup>
import { onMounted, computed } from 'vue';

import { useStudentStore } from '../../store/modules/student';
import { useGradeStore } from '../../store/modules/grade';

const studentStore = useStudentStore();
const gradeStore = useGradeStore();

await Promise.all([
	gradeStore.getCourses(),
	studentStore.getStudents(),
	gradeStore.getGrades(),
]);

const actualGradesData = computed(() => {
	return gradeStore.grades;
});
</script>

<template>
	<div class="card">
		<DataTable
			:value="actualGradesData"
			paginator
			:rows="5"
			:rowsPerPageOptions="[5, 10, 15]"
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
			<Column field="code" header="Code" style="width: 25%"></Column>
			<!-- <Column
				field="courseName"
				header="Course name"
				style="width: 25%"
			></Column> -->
			<!-- <Column
				field="studentName"
				header="Student name"
				style="width: 25%"
			></Column> -->
			<Column field="grade" header="Grade" style="width: 25%"></Column>
		</DataTable>
	</div>
</template>

<style scoped></style>
