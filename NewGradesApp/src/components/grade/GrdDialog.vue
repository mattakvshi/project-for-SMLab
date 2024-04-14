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
				>Add all information on student.</span
			>
			<div class="flex align-items-center gap-3 mb-3">
				<label for="course" class="font-semibold w-6rem">Course</label>
				<InputText id="course" class="flex-auto" autocomplete="off" />
			</div>
			<div class="flex align-items-center gap-3 mb-5">
				<label for="student" class="font-semibold w-6rem">Student</label>
				<InputText id="student" class="flex-auto" autocomplete="off" />
			</div>
			<div class="flex align-items-center gap-3 mb-5">
				<label for="grade" class="font-semibold w-6rem">Grade</label>
				<InputText id="grade" class="flex-auto" autocomplete="off" />
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

<script setup>
import { ref } from 'vue';

const visible = ref(false);
</script>
