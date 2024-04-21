<script setup>
import { onMounted } from 'vue';

import { useStudentStore } from '../../store/modules/student';
import { useGradeStore } from '../../store/modules/grade';
import { useLoadingStore } from '../../store/modules/loading';

import LineGraph from './LineGraph.vue';

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
	<div class="flex justify-content-center">
		<line-graph></line-graph>
	</div>
</template>

<style scoped></style>
