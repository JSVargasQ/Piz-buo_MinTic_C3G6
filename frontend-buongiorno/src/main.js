import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import "bootstrap/dist/css/bootstrap.css";

import "bootstrap/dist/js/bootstrap.js";
import "jquery/dist/jquery.js";
import "wowjs/dist/wow.js";


export const BASE_URL = "http://127.0.0.1:8000";

createApp(App).use(router).mount('#app')
