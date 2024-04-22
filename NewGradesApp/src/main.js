import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import PrimeVue from 'primevue/config';
import { createPinia } from 'pinia';

import Button from 'primevue/button';
import Toolbar from 'primevue/toolbar';
import Avatar from 'primevue/avatar';
import Menu from 'primevue/menu';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Sidebar from 'primevue/sidebar';
import Dialog from 'primevue/dialog';
import FloatLabel from 'primevue/floatlabel';
import InputNumber from 'primevue/inputnumber';
import MultiSelect from 'primevue/multiselect';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
import ProgressSpinner from 'primevue/progressspinner';
import Card from 'primevue/card';
import MeterGroup from 'primevue/metergroup';
import OrganizationChart from 'primevue/organizationchart';
import Chart from 'primevue/chart';
import Tag from 'primevue/tag';

import './assets/app.css';
//Темы перенесены в public для работы PrimeVue.changeTheme()
//import 'primevue/resources/themes/aura-light-purple/theme.css';
//import 'primevue/resources/themes/aura-dark-purple/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import '/node_modules/primeflex/primeflex.css';

const app = createApp(App);

// Инициировать Pinia
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
app.component('FloatLabel', FloatLabel);
app.component('InputNumber', InputNumber);
app.component('MultiSelect', MultiSelect);
app.component('Toast', Toast);
app.use(ToastService);
app.component('ProgressSpinner', ProgressSpinner);
app.component('Card', Card);
app.component('MeterGroup', MeterGroup);
app.component('OrganizationChart', OrganizationChart);
app.component('Chart', Chart);
app.component('Tag', Tag);

app.use(router);

app.mount('#app');
