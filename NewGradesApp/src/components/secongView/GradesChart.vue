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
	grade: actualSortGradesData.value[0].grade,
	position: 1,
	styleClass: 'bg-yellow-600 text-white border-round-xl',
	icon: 'pi pi-star-fill mr-2 text-yellow-200',
	severity: 'warning',
	children: [
		{
			label: actualSortGradesData.value[1].studentName,
			grade: actualSortGradesData.value[1].grade,
			position: 2,
			styleClass: 'bg-primary-400 text-white border-round-xl',
			icon: 'pi pi-star-fill mr-2 text-bluegray-200',
			severity: 'primary',
		},
		{
			label: actualSortGradesData.value[2].studentName,
			grade: actualSortGradesData.value[2].grade,
			position: 3,
			styleClass: 'bg-blue-400 text-white border-round-xl',
			icon: 'pi pi-star-fill mr-2 text-bluegray-200',
			severity: 'info',
		},
	],
});
</script>

<template>
	<Card style="width: 100%">
		<template #title>
			<span class="font-bold">Top charts:</span>
		</template>
		<template #content>
			<div class="card overflow-x-auto">
				<OrganizationChart :value="data">
					<template #default="slotProps">
						<div
							class="flex flex-column justify-content-center align-items-center gap-1"
						>
							<div
								class="flex flex-row justify-content-center align-items-center"
							>
								<i :class="slotProps.node.icon"></i>
								<span class="font-bold mr-1">{{
									slotProps.node.position
								}}</span>
								<span class="font-bold">{{ slotProps.node.label }}</span>
							</div>
							<div
								class="flex flex-row justify-content-center align-items-center"
							>
								<Tag
									:value="slotProps.node.grade"
									:severity="slotProps.node.severity"
								></Tag>
							</div>
						</div>
					</template>
				</OrganizationChart>
			</div>
		</template>
	</Card>
</template>
