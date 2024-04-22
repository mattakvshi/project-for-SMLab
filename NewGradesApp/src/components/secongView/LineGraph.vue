<script setup>
import { computed, onMounted, ref } from 'vue';
import { useGradeStore } from '../../store/modules/grade';

const gradeStore = useGradeStore();

const gradeCategories = ref({
	'>20': 0,
	'>15': 0,
	'>10': 0,
	'>5': 0,
	'<5': 0,
});

const actualGradesData = computed(() => {
	return gradeStore.grades.filter(grade => !grade.isDelete);
});

const actualGradesGrade = computed(() => {
	return actualGradesData.value.map(grade => grade.grade);
});

const actualGradesStats = computed(() => {
	gradeCategories.value['<5'] = 0;
	gradeCategories.value['>5'] = 0;
	gradeCategories.value['>10'] = 0;
	gradeCategories.value['>15'] = 0;
	gradeCategories.value['>20'] = 0;

	actualGradesGrade.value.forEach(grade => {
		switch (true) {
			case grade <= 5:
				gradeCategories.value['<5']++;
				break;
			case grade <= 10:
				gradeCategories.value['>5']++;
				break;
			case grade <= 15:
				gradeCategories.value['>10']++;
				break;
			case grade <= 20:
				gradeCategories.value['>15']++;
				break;
			default:
				gradeCategories.value['>20']++;
		}
	});

	return gradeCategories.value;
});

//console.log(actualGradesStats.value);
//console.log(actualGradesStats.value[4]);

const value = ref([
	{
		label: 'Very good',
		color: '#34d399',
		value:
			(actualGradesStats.value['>20'] / actualGradesGrade.value.length) * 100,
	},
	{
		label: 'Good',
		color: '#c084fc',
		value:
			(actualGradesStats.value['>15'] / actualGradesGrade.value.length) * 100,
	},
	{
		label: 'Satisfactory',
		color: '#60a5fa',
		value:
			(actualGradesStats.value['>10'] / actualGradesGrade.value.length) * 100,
	},
	{
		label: 'Poor',
		color: '#fbbf24',
		value:
			(actualGradesStats.value['>5'] / actualGradesGrade.value.length) * 100,
	},
	{
		label: 'Very poor',
		color: '#ff6161',
		value:
			(actualGradesStats.value['<5'] / actualGradesGrade.value.length) * 100,
	},
]);
</script>

<template>
	<Card style="max-width: 90%">
		<template #title>
			<span class="font-bold">Line graph stats:</span>
		</template>
		<template #content>
			<div class="card">
				<MeterGroup :value="value" />
			</div>
		</template>
	</Card>
</template>
