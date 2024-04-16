<script setup>
import { computed, inject, ref } from 'vue';
import { useToast } from 'primevue/usetoast';
import { useGradeStore } from '../../store/modules/grade';
import { useLoadingStore } from '../../store/modules/loading';

const loadingStore = useLoadingStore();

const isDataLoaded = computed(() => {
	return loadingStore.isLoading;
});

const toast = inject('toast');

const toastInstance = useToast(toast);

const showInfo = () => {
	toastInstance.add({
		severity: 'info',
		summary: 'Adding info',
		detail: 'Adding a new grade has been canceled',
		life: 3000,
	});
};

const visible = ref(false);
const gradeStore = useGradeStore();

const cancelClick = () => {
	visible.value = false;
	showInfo();
};

//Data
const selectedCourse = ref();
const selectedStudent = ref();
const grade = ref(null);

const student = computed(() => {
	return gradeStore.grades.map(grade => ({
		name: grade.studentName,
		code: grade.code,
	}));
});

const course = computed(() => {
	const courseMap = new Map();
	gradeStore.grades.forEach(grade => {
		courseMap.set(grade.courseCode, {
			// Используем courseCode в к к качестве ключа
			name: grade.courseName,
			code: grade.courseCode,
		});
	});

	return [...courseMap.values()];
});

const isCourseSelected = computed(() => {
	return !!selectedCourse.value || selectedCourse.length > 1;
});

const isStudentSelected = computed(() => {
	return !!selectedStudent.value || selectedStudent.length > 1;
});

const isGrade = computed(() => {
	return !!grade.value;
});
</script>

<template>
	<div class="card flex justify-content-center">
		<Button
			icon="pi pi-plus"
			style="width: 40px; height: 40px"
			@click="visible = true"
			:disabled="isDataLoaded"
		/>
		<Dialog
			v-model:visible="visible"
			modal
			header="Add new grade"
			:style="{ width: '25rem' }"
		>
			<span class="p-text-secondary block mb-5"
				>Add all information of student.</span
			>
			<div class="flex align-items-center gap-3 mb-5">
				<FloatLabel>
					<!-- <InputText id="course" v-model="course" class="flex-auto" autocomplete="off" /> -->
					<MultiSelect
						v-model="selectedCourse"
						:options="course"
						filter
						optionLabel="name"
						placeholder="Select course"
						:maxSelectedLabels="1"
						class="w-full md:w-20rem"
						:invalid="!isCourseSelected"
					/>
					<label for="course" class="font-semibold w-6rem">Course</label>
				</FloatLabel>
			</div>
			<div class="flex align-items-center gap-3 mb-5">
				<FloatLabel>
					<!-- <InputText id="student" v-model="student" class="flex-auto" autocomplete="off" /> -->
					<MultiSelect
						v-model="selectedStudent"
						:options="student"
						filter
						optionLabel="name"
						placeholder="Select student"
						:maxSelectedLabels="1"
						class="w-full md:w-20rem"
						:invalid="!isStudentSelected"
					/>
					<label for="student" class="font-semibold w-6rem">Student</label>
				</FloatLabel>
			</div>
			<div
				class="flex align-items-center gap-3 mb-5"
				:style="{ width: '20rem' }"
			>
				<FloatLabel :style="{ width: '20rem' }">
					<InputNumber
						id="grade"
						v-model="grade"
						class="flex-auto"
						autocomplete="off"
						inputId="minmax-buttons"
						showButtons
						:min="1"
						:max="25"
						:style="{ width: '20rem' }"
						:invalid="!isGrade"
					/>
					<label
						for="grade"
						class="font-semibold w-6rem"
						:style="{ width: '20rem' }"
						>Grade</label
					>
				</FloatLabel>
			</div>
			<div class="flex justify-content-end gap-2">
				<Button
					type="button"
					label="Cancel"
					severity="secondary"
					@click="cancelClick"
				></Button>
				<Button
					type="button"
					label="Save"
					@click="visible = false"
					:disabled="!isGrade || !isCourseSelected || !isStudentSelected"
				></Button>
			</div>
		</Dialog>
	</div>
</template>

<style scoped>
.w-100 {
	width: 100px;
}
</style>
