import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import router from './router';
import PrimeVue from 'primevue/config';

import Button from 'primevue/button';
import Toolbar from 'primevue/toolbar';
import Avatar from 'primevue/avatar';
import Menu from 'primevue/menu';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Sidebar from 'primevue/sidebar';
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import FloatLabel from 'primevue/floatlabel';
import InputNumber from 'primevue/inputnumber';
import MultiSelect from 'primevue/multiselect';

import './assets/app.css';
//import 'primevue/resources/themes/aura-light-purple/theme.css';
//import 'primevue/resources/themes/aura-dark-purple/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import '/node_modules/primeflex/primeflex.css';

const app = createApp(App);

const pinia = createPinia();
app.use(pinia);

app.use(PrimeVue);
app.component('Button', Button);
app.component('Toolbar', Toolbar);
app.component('Avatar', Avatar);
app.component('Menu', Menu);
app.component('DataTable', DataTable);
app.component('Column', Column);
app.component('Sidebar', Sidebar);
app.component('Dialog', Dialog);
app.component('InputText', InputText);
app.component('FloatLabel', FloatLabel);
app.component('InputNumber', InputNumber);
app.component('MultiSelect', MultiSelect);

app.use(router);

app.mount('#app');
