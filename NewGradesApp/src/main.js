import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import PrimeVue from 'primevue/config';

import Button from 'primevue/button';
import Toolbar from 'primevue/toolbar';

import './assets/app.css';
//import 'primevue/resources/themes/aura-light-purple/theme.css';
//import 'primevue/resources/themes/aura-dark-purple/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

const app = createApp(App);

const pinia = createPinia();
app.use(pinia);

app.use(PrimeVue);
app.component('Button', Button);
app.component('Toolbar', Toolbar);

app.mount('#app');
