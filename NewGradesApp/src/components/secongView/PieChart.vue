<script setup>
import { ref, computed, onMounted } from 'vue';
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

onMounted(() => {
	chartData.value = setChartData();
	chartOptions.value = setChartOptions();
});

const chartData = ref();
const chartOptions = ref();

const setChartData = () => {
	return {
		labels: ['Very good', 'Good', 'Satisfactory', 'Poor', 'Very poor'],
		datasets: [
			{
				data: [
					actualGradesStats.value['>20'],
					actualGradesStats.value['>15'],
					actualGradesStats.value['>10'],
					actualGradesStats.value['>5'],
					actualGradesStats.value['<5'],
				],
				backgroundColor: [
					'rgba(20%, 83%, 60%, 0.8)',
					'rgba(75%, 52%, 99%, 0.8)',
					'rgba(38%, 65%, 98%, 0.8)',
					'rgba(98%, 75%, 14%, 0.8)',
					'rgba(100%, 38%, 38%, 0.8)',
				],
				hoverBackgroundColor: [
					'#34d399',
					'#c084fc',
					'#60a5fa',
					'#fbbf24',
					'#ff6161',
				],
			},
		],
	};
};

const setChartOptions = () => {
	const documentStyle = getComputedStyle(document.documentElement);
	const textColor = documentStyle.getPropertyValue('--text-color');

	return {
		plugins: {
			legend: {
				labels: {
					usePointStyle: true,
					color: textColor,
				},
			},
		},
	};
};
</script>

<template>
	<Card style="width: 100%">
		<template #title>
			<span class="font-bold">Pie graph stats:</span>
		</template>
		<template #content>
			<div class="card flex justify-content-center">
				<Chart
					type="pie"
					:data="chartData"
					:options="chartOptions"
					class="w-full md:w-30rem"
				/>
			</div>
		</template>
	</Card>
</template>
