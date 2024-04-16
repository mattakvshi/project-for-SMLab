<script setup>
import { onMounted, computed } from 'vue';

import { useStudentStore } from '../../store/modules/student';
import { useGradeStore } from '../../store/modules/grade';

const studentStore = useStudentStore();
const gradeStore = useGradeStore();

await Promise.all([
	gradeStore.getCourses().then(),
	studentStore.getStudents(),
	gradeStore.getGrades(),
]);

const actualGradesData = computed(() => {
	return gradeStore.grades;
});
</script>

<template>
	<div class="card" style="padding: 1rem 3rem">
		<Card>
			<template #content>
				<DataTable
					:value="actualGradesData"
					paginator
					:rows="10"
					:rowsPerPageOptions="[5, 10, 15]"
					tableStyle="min-width: 50rem"
					paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
					currentPageReportTemplate="{first} to {last} of {totalRecords}"
					removableSort
				>
					<template #paginatorstart>
						<Button
							class="mt-3"
							label="Reload grades data"
							type="button"
							icon="pi pi-refresh"
							text
							outlined
						/>
					</template>
					<template #paginatorend> </template>
					<Column
						sortable
						field="code"
						header="Code"
						style="width: 15%"
					></Column>
					<Column
						sortable
						field="courseName"
						header="Course name"
						style="width: 15%"
					></Column>
					<Column
						sortable
						field="studentName"
						header="Student name"
						style="width: 15%"
					></Column>
					<Column
						sortable
						field="grade"
						header="Grade"
						style="width: 15%"
					></Column>
					<Column
						sortable
						field="formatGradeDate"
						header="Date"
						style="width: 15%"
					></Column>
					<Column field="" header="Delete" style="width: 15%"> </Column>
				</DataTable>
			</template>
		</Card>
	</div>
</template>

<style scoped></style>
