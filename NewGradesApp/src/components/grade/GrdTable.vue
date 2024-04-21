<script setup>
import { ref, computed, inject, onMounted } from 'vue';

import { useStudentStore } from '../../store/modules/student';
import { useGradeStore } from '../../store/modules/grade';
import { useToast } from 'primevue/usetoast';
import { useLoadingStore } from '../../store/modules/loading';

const toast = inject('toast');

const toastInstance = useToast(toast);

const showInfo = (severity, summary, detail) => {
	toastInstance.add({
		severity: severity,
		summary: summary,
		detail: detail,
		life: 3000,
	});
};

const loadingStore = useLoadingStore();

onMounted(() => {
	loadingStore.setIsLoading(false);
});

const studentStore = useStudentStore();
const gradeStore = useGradeStore();

await Promise.all([
	gradeStore.getCourses().then(),
	studentStore.getStudents(),
	gradeStore.getGrades(),
]);

const actualGradesData = computed(() => {
	return gradeStore.grades.filter(grade => !grade.isDelete);
});

const deleteGrade = () => {
	try {
		gradeStore.deleteGrade(selectedGrade.value);
		selectedGrade.value = null;
		showInfo(
			'success',
			'Grade Deleted',
			'Selected grade has been successfully deleted.'
		);
	} catch (error) {
		showInfo('error', 'Error Deleting Grade', error.message);
	}
};

const reloadGrade = () => {
	try {
		gradeStore.initData();
		showInfo(
			'success',
			'Grades Reloaded',
			'Grades data has been successfully reloaded.'
		);
	} catch (error) {
		showInfo('error', 'Error Reloading Grades', error.message);
	}
};

const selectedGrade = ref();
const metaKey = ref(true);

const isGradeSelected = computed(() => {
	return !!selectedGrade.value;
});

// Вычисляемое свойство для определения количества строк на странице
const calculatedRowsPerPage = computed(() => {
	return Math.ceil(actualGradesData.value.length * 0.7);
});

// Вычисляемое свойство для определения вариантов количества строк на странице
const calculatedRowsPerPageOptions = computed(() => {
	const totalRecords = actualGradesData.value.length;
	return [
		Math.ceil(totalRecords * 0.3),
		Math.ceil(totalRecords * 0.7),
		totalRecords,
	];
});

const onCellEditComplete = event => {
	let { data, newValue, field } = event;
	if (newValue) {
		data[field] = newValue;
		gradeStore.putGrade(data);
	} else event.preventDefault();
};
</script>

<template>
	<div class="card pdd">
		<Card>
			<template #content>
				<DataTable
					v-model:selection="selectedGrade"
					:value="actualGradesData"
					dataKey="code"
					selectionMode="single"
					:metaKeySelection="metaKey"
					paginator
					:rows="calculatedRowsPerPage"
					:rowsPerPageOptions="calculatedRowsPerPageOptions"
					tableStyle="min-width: 35rem;"
					paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
					currentPageReportTemplate="{first} to {last} of {totalRecords}"
					removableSort
					editMode="cell"
					@cell-edit-complete="onCellEditComplete"
				>
					<template #paginatorstart>
						<Button
							v-if="!actualGradesData.length"
							@click="reloadGrade"
							class="mt-3"
							title="Reload grades data"
							type="button"
							icon="pi pi-refresh"
							text
							outlined
						/>
						<Button
							v-else
							@click="gradeStore.deleteAllGrade()"
							class="mt-3"
							title="Delete selected grade"
							type="button"
							icon="pi pi-replay"
							text
							outlined
						/>
					</template>
					<template #paginatorend>
						<Button
							@click="deleteGrade"
							class="mt-3"
							title="Delete selected grade"
							type="button"
							icon="pi pi-trash"
							text
							outlined
							:disabled="!isGradeSelected"
						/>
					</template>
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
						style="width: 25%"
					></Column>
					<Column
						sortable
						field="studentName"
						header="Student name"
						style="width: 25%"
					></Column>
					<Column sortable field="grade" header="Grade" style="width: 25%">
						<template #body="{ data, field }">
							{{ data[field] }}
						</template>
						<template #editor="{ data, field }">
							<InputNumber
								v-model="data[field]"
								autofocus
								class="flex-auto"
								inputId="minmax-buttons"
								showButtons
								:min="1"
								:max="25"
							/>
						</template>
					</Column>
					<Column
						sortable
						field="formatGradeDate"
						header="Date"
						style="width: 20%"
					></Column>
				</DataTable>
			</template>
		</Card>
	</div>
</template>

<style scoped>
.pdd {
	padding: 1rem 3rem;
}

@media (max-width: 900px) {
	.pdd {
		padding: 0 0;
	}
}
</style>
