<script setup>
import { ref } from 'vue';

const visible = ref(false);

//Data
const course = ref(null);
const student = ref(null);
const grade = ref(null);

const selectedCities = ref();
const cities = ref([
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
]);
</script>


<template>
	<div class="card flex justify-content-center">
		<Button
			icon="pi pi-plus"
			style="width: 40px; height: 40px"
			@click="visible = true"
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
					<MultiSelect v-model="selectedCities" :options="cities" filter optionLabel="name" placeholder="Select course"
            :maxSelectedLabels="1" class="w-full md:w-20rem" />
					<label for="course" class="font-semibold w-6rem">Course</label>
				</FloatLabel>
			</div>
			<div class="flex align-items-center gap-3 mb-5">
				<FloatLabel>
					<!-- <InputText id="student" v-model="student" class="flex-auto" autocomplete="off" /> -->
					<MultiSelect v-model="selectedCities" :options="cities" filter optionLabel="name" placeholder="Select student"
            :maxSelectedLabels="1" class="w-full md:w-20rem" />
					<label for="student" class="font-semibold w-6rem">Student</label>
				</FloatLabel>
			</div>
			<div class="flex align-items-center gap-3 mb-5" :style="{ width: '20rem' }">
				<FloatLabel :style="{ width: '20rem' }">
					<InputNumber id="grade"  v-model="grade" class="flex-auto" autocomplete="off" inputId="minmax-buttons" showButtons :min="1" :max="25" :style="{ width: '20rem' }"/>
					<label for="grade" class="font-semibold w-6rem" :style="{ width: '20rem' }">Grade</label>
				</FloatLabel>
			</div>
			<div class="flex justify-content-end gap-2">
				<Button
					type="button"
					label="Cancel"
					severity="secondary"
					@click="visible = false"
				></Button>
				<Button type="button" label="Save" @click="visible = false"></Button>
			</div>
		</Dialog>
	</div>
</template>


<style scoped>
.w-100{
	width: 100px;
}
</style>
