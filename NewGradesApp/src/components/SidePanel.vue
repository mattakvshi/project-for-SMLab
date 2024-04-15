<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../store/modules/auth';

const visible = ref(false);

const router = useRouter();
const authStor = useAuthStore();

const pushToGrades = () => {
	router.push('/');
};

const pushToSecond = () => {
	router.push('/second');
};
</script>

<template>
	<div class="card flex justify-content-center">
		<Sidebar v-model:visible="visible">
			<template #container="{ closeCallback }">
				<div class="flex flex-column h-full">
					<div
						class="flex align-items-center justify-content-between px-4 pt-3 flex-shrink-0"
					>
						<span class="inline-flex align-items-center gap-2">
							<router-link to="/">
								<img
									@click="closeCallback"
									alt="SMLab"
									src="/src/assets/img/logo_gavr.png"
									style="
										width: 120px;
										background-color: #ece9fc;
										border-radius: 50px;
										padding: 0.5rem 1rem;
									"
								/>
							</router-link>
						</span>
						<span>
							<Button
								type="button"
								@click="closeCallback"
								icon="pi pi-times"
								rounded
								outlined
								class="h-2rem w-2rem"
							></Button>
						</span>
					</div>
					<div class="overflow-y-auto">
						<ul class="list-none p-0 m-0 overflow-hidden">
							<li @click="pushToGrades">
								<a
									@click="closeCallback"
									class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"
								>
									<i class="pi pi-list mr-2"></i>
									<span class="font-medium">Grades</span>
								</a>
							</li>
							<li @click="pushToSecond">
								<a
									@click="closeCallback"
									class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"
								>
									<i class="pi pi-chart-pie mr-2"></i>
									<span class="font-medium">Second View</span>
								</a>
							</li>
						</ul>
					</div>
					<div class="mt-auto">
						<hr class="mb-3 mx-3 border-top-1 border-none surface-border" />
						<a
							class="m-3 flex align-items-center cursor-pointer p-3 gap-2 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"
						>
							<Avatar
								icon="pi pi-user"
								class="mr-2"
								size="large"
								style="background-color: #ece9fc; color: #2a1261"
								shape="circle"
							/>
							<span class="font-bold"> {{ authStor.user }}</span>
						</a>
					</div>
				</div>
			</template>
		</Sidebar>
		<Button icon="pi pi-bars" @click="visible = true" />
	</div>
</template>
