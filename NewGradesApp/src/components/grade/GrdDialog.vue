<script setup>
import { computed, inject, ref } from 'vue';
import { useToast } from 'primevue/usetoast';
import { useGradeStore } from '../../store/modules/grade';
import { useLoadingStore } from '../../store/modules/loading';
import Grade from '../../model/Grade';

const loadingStore = useLoadingStore();
const visible = ref(false);
const gradeStore = useGradeStore();
const toast = inject('toast');
const toastInstance = useToast(toast);

defineProps({
	changeKey: Function,
});

const isDataLoaded = computed(() => {
	return loadingStore.isLoading;
});

const showInfo = (severity, summary, detail) => {
	toastInstance.add({
		severity: severity,
		summary: summary,
		detail: detail,
		life: 3000,
	});
};

//Data
const selectedCourse = ref();
const selectedStudent = ref();
const grade = ref(null);
const newGrade = new Grade(null, null, null, null, null, 0);

const student = computed(() => {
	const studentMap = new Map();

	gradeStore.grades.forEach(grade => {
		studentMap.set(grade.studentCode, {
			name: grade.studentName,
			code: grade.studentCode,
		});
	});

	return [...studentMap.values()];
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
	return !!selectedCourse.value;
});

const isStudentSelected = computed(() => {
	return !!selectedStudent.value;
});

const isGrade = computed(() => {
	return !!grade.value;
});

const cancelClick = () => {
	init();
	visible.value = false;
	showInfo('info', 'Adding info', 'Adding a new grade has been canceled');
};

const saveClick = () => {
	try {
		if (grade && selectedCourse && selectedStudent) {
			newGrade.grade = grade.value;
			newGrade.courseCode = selectedCourse.value[0].code;
			newGrade.studentCode = selectedStudent.value[0].code;
			//console.log(newGrade)
			gradeStore.postGrade(newGrade);
			//changeKey();
			showInfo(
				'success',
				'Adding success',
				'Adding a new grade has been successfully.'
			);
		} else {
			throw error;
		}
	} catch (error) {
		showInfo(
			'error',
			'Adding error',
			'Adding a new grade has been errored. ' + error
		);
	} finally {
		visible.value = false;
		init();
	}
};

const init = () => {
	grade.value = null;
	selectedCourse.value = null;
	selectedStudent.value = null;
};
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
						:selectionLimit="1"
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
					@click="saveClick"
					@click.prevent="changeKey"
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
