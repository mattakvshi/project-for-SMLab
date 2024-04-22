<script setup>
import { ref, computed } from 'vue';
import { useGradeStore } from '../../store/modules/grade';

const gradeStore = useGradeStore();

const actualSortGradesData = computed(() => {
	return gradeStore.grades
		.filter(grade => !grade.isDelete)
		.sort((grad1, grade2) => (grad1['grade'] < grade2['grade'] ? 1 : -1));
});

//console.log(actualSortGradesData.value);

const data = ref({
	label: actualSortGradesData.value[0].studentName,
	position: 1,
	styleClass: 'bg-yellow-600 text-white border-round-xl',
	icon: 'pi pi-star-fill mr-2 text-yellow-200',
	children: [
		{
			label: actualSortGradesData.value[2].studentName,
			position: 2,
			styleClass: 'bg-primary-400 text-white border-round-xl',
			icon: 'pi pi-star-fill mr-2 text-bluegray-200',
		},
		{
			label: actualSortGradesData.value[3].studentName,
			position: 3,
			styleClass: 'bg-blue-400 text-white border-round-xl',
			icon: 'pi pi-star-fill mr-2 text-bluegray-200',
		},
	],
});
</script>

<template>
	<Card style="max-width: 90%">
		<template #title>
			<span class="font-bold">Top charts:</span>
		</template>
		<template #content>
			<div class="card overflow-x-auto">
				<OrganizationChart :value="data">
					<template #default="slotProps">
						<i :class="slotProps.node.icon"></i>
						<span class="font-bold mr-1">{{ slotProps.node.position }}</span>
						<span class="font-bold">{{ slotProps.node.label }}</span>
					</template>
				</OrganizationChart>
			</div>
		</template>
	</Card>
</template>
