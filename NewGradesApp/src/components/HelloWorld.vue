<script setup>
import Button from 'primevue/button';
//import { computed, ref } from 'vue';

defineProps({
	msg: String,
	toggleTheme: Function,
	themeIco: String,
});

//const count = ref(0);
</script>

<template>
	<Toolbar style="border-radius: 3rem; padding: 1rem 1rem 1rem 1.5rem">
		<template #start>
			<div class="flex align-items-center gap-2">
				<svg
					width="35"
					height="40"
					viewBox="0 0 35 40"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="..." fill="var(--text-color)" />
					<path d="..." fill="var(--surface-card)" />
				</svg>
				<Button label="Files" text plain />
				<Button label="Edit" text plain />
				<Button label="View" text plain />
			</div>
		</template>

		<template #end>
			<div class="flex align-items-center gap-2">
				<Button label="Share" severity="contrast" size="small" />
				<Avatar
					image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
					style="width: 32px; height: 32px"
				/>
			</div>
		</template>
	</Toolbar>

	<h1>{{ msg }}</h1>

	<div class="card">
		<Button @click.prevent="toggleTheme" :icon="themeIco"></Button>
		<p>
			Edit
			<code>components/HelloWorld.vue</code> to test HMR
		</p>
	</div>

	<p>
		Check out
		<a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
			>create-vue</a
		>, the official Vue + Vite starter
	</p>
	<p>
		Install
		<a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
		in your IDE for a better DX
	</p>
	<p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped></style>
