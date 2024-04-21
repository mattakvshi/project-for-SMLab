<script setup>
import { onMounted } from 'vue';

import { useStudentStore } from '../../store/modules/student';
import { useGradeStore } from '../../store/modules/grade';
import { useLoadingStore } from '../../store/modules/loading';

import LineGraph from './LineGraph.vue';
import GradesChart from './GradesChart.vue';

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
</script>

<template>
	<div class="flex align-items-center flex-column gap-6">
		<line-graph></line-graph>
		<grades-chart></grades-chart>
	</div>
</template>

<style scoped></style>
