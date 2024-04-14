<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const menu = ref();
const items = ref([
	{
		label: 'Menu',
		items: [
			{
				label: 'Grades',
				icon: 'pi pi-list',
				command: () => {
					router.push('/');
				},
			},
			{
				label: 'Second view',
				icon: 'pi pi-chart-pie',
				command: () => {
					router.push('/second');
				},
			},
		],
	},
]);

const toggle = event => {
	menu.value.toggle(event);
};
</script>

<template>
	<div class="row-block">
		<Button
			type="button"
			icon="pi pi-bars"
			@click="toggle"
			aria-haspopup="true"
			aria-controls="overlay_menu"
		/>
		<Menu ref="menu" id="overlay_menu" :model="items" :popup="true" />
	</div>
</template>

<style scoped>
.row-block {
	display: flex;
	align-items: center;
	gap: 20px;
}
</style>
