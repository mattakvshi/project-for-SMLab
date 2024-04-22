<script setup>
import { onMounted, ref, computed } from 'vue';

import { useStudentStore } from '../../store/modules/student';
import { useGradeStore } from '../../store/modules/grade';
import { useLoadingStore } from '../../store/modules/loading';

import LineGraph from './LineGraph.vue';
import GradesChart from './GradesChart.vue';
import BasicChart from './BasicChart.vue';
import PieChart from './PieChart.vue';

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
	<div
		class="flex align-items-center justify-content-center flex-row row-gap-4 column-gap-6 flex-wrap"
	>
		<div class="flex align-items-center flex-column row-gap-4 column-gap-1">
			<line-graph></line-graph>
			<grades-chart></grades-chart>
		</div>
		<div class="flex align-items-center flex-column column-gap-1">
			<pie-chart></pie-chart>
		</div>
		<div class="flex align-items-center flex-column column-gap-1">
			<basic-chart></basic-chart>
		</div>
	</div>
</template>

<style scoped></style>
