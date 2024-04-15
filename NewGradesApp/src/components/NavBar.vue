<script setup>
import BigMenu from './BigMenu.vue';
//import MinMenu from './MinMenu.vue';
import SidePanel from './SidePanel.vue';

defineProps({
	toggleTheme: Function,
	themeIco: String,
});
</script>

<template>
	<Toolbar style="border-radius: 3rem; padding: 1rem 1rem 1rem 1.5rem">
		<template #start>
			<div class="big-screen-center">
				<big-menu></big-menu>
			</div>
			<div class="small-screen-center">
				<!-- <min-menu></min-menu> -->
				<side-panel></side-panel>
			</div>
		</template>

		<template #center>
			<div class="row-block big-screen-center">
				<a href="https://vitejs.dev" target="_blank">
					<img src="/vite.svg" class="logo" alt="Vite logo" />
				</a>
				<i class="pi pi-plus" style="color: 'var(--primary-color)'"></i>
				<a href="https://vuejs.org/" target="_blank">
					<img src="/src/assets/vue.svg" class="logo vue" alt="Vue logo" />
				</a>
				<i class="pi pi-plus" style="color: 'var(--primary-color)'"></i>
				<a href="https://pinia.vuejs.org/" target="_blank">
					<img
						src="https://pinia.vuejs.org/logo.svg"
						class="logo pinia"
						alt="Pinia logo"
					/>
				</a>
				<i class="pi pi-plus" style="color: 'var(--primary-color)'"></i>
				<svg
					width="165"
					height="40"
					viewBox="0 0 165 40"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M25.5739 18.0458L22.8661 17.4443L24.9722 20.4519V29.7756L32.193 23.7603V13.5344L28.8835 14.7374L25.5739 18.0458Z"
						fill="var(--primary-color)"
					></path>
					<path
						d="M8.72522 18.0458L11.433 17.4443L9.32696 20.4519V29.7756L2.10609 23.7603V13.5344L5.41565 14.7374L8.72522 18.0458Z"
						fill="var(--primary-color)"
					></path>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M10.2296 21.0534L12.6365 17.4443L14.1409 18.3466H20.1582L21.6626 17.4443L24.0696 21.0534V34.5878L22.2643 37.2947L20.1582 39.4H14.1409L12.0348 37.2947L10.2296 34.5878V21.0534Z"
						fill="var(--primary-color)"
					></path>
					<path
						d="M24.9722 35.4901L28.8835 31.5802V27.6702L24.9722 30.9786V35.4901Z"
						fill="var(--primary-color)"
					></path>
					<path
						d="M9.32697 35.4901L5.41566 31.5802V27.6702L9.32697 30.9786V35.4901Z"
						fill="var(--primary-color)"
					></path>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M21.0609 0H20.1583V5.7988L21.8141 1.78842L21.0609 0ZM19.5762 7.20849L18.9548 7.51908V0H17.7513V11.6281L19.5762 7.20849ZM17.7513 14.2483L22.3605 3.08549L23.4678 5.7145L19.8574 17.1435H17.7513V14.2483ZM16.5478 11.6718V0H15.3443V7.51908L14.8434 7.26869L16.5478 11.6718ZM14.1409 5.45385V0H13.2383L12.6085 1.49519L14.1409 5.45385ZM12.0497 2.82181L16.5478 14.4419V17.1435H14.7426L10.8313 5.7145L12.0497 2.82181Z"
						fill="var(--text-color)"
					></path>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M1.80522 12.3313L14.7426 17.1435H15.0435L11.1322 5.71452L0 4.81223L1.80522 12.3313ZM32.7948 12.3313L19.8574 17.1435H19.5565L23.167 5.71452L34.6 4.81223L32.7948 12.3313Z"
						fill="var(--primary-color)"
					></path>
					<path
						d="M24.0696 4.81221L30.3878 4.21069L26.1757 0H21.9635L24.0696 4.81221Z"
						fill="var(--text-color)"
					></path>
					<path
						d="M10.2295 4.81221L3.91129 4.21069L8.12346 0H12.3356L10.2295 4.81221Z"
						fill="var(--text-color)"
					></path>
					<path
						d="M4.70001 5.20001L11.2 5.70001L15.1 17.15H14.7L10.5 15.6L4.70001 5.20001Z"
						fill="var(--text-color)"
					></path>
					<path
						d="M29.8 5.20001L23.1 5.70001L19.4 17.15L19.9 17.14L23.8 15.7L29.8 5.20001Z"
						fill="var(--text-color)"
					></path>
					<path
						d="M12.1 18.2L12.6 17.4L14.3 18.2H20.3L21.6 17.4L22.2 18.2L17.15 26.8L12.1 18.2Z"
						fill="var(--text-color)"
					></path>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M12.0297 0L17.1214 13.1536L22.5526 0H12.0297Z"
						fill="var(--primary-color)"
					></path>
				</svg>
			</div>
			<div class="small-screen-center">
				<img
					@click="activeGrades"
					alt="SMLab"
					src="/src/assets/img/logo_gavr.png"
					style="
						width: 120px;
						background-color: #ece9fc;
						border-radius: 50px;
						padding: 0.5rem 1rem;
					"
				/>
			</div>
		</template>

		<template #end>
			<div class="row-block">
				<Button
					@click.prevent="toggleTheme"
					:icon="themeIco"
					severity="secondary"
					outlined
				></Button>
				<Avatar
					icon="pi pi-user"
					class="mr-2"
					size="xlarge"
					style="background-color: #ece9fc; color: #2a1261"
					shape="circle"
				/>
			</div>
		</template>
	</Toolbar>
</template>

<style scoped>
.row-block {
	display: flex;
	align-items: center;
	gap: 20px;
}
.logo {
	width: 40px;
	height: 40px;
}

@media (max-width: 1100px) {
	.big-screen-center {
		display: none;
	}
}

@media (min-width: 1100px) {
	.small-screen-center {
		display: none;
	}
}
</style>
