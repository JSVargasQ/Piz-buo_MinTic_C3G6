import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import "bootstrap/dist/css/bootstrap.css";

import "bootstrap/dist/js/bootstrap.js";
import "jquery/dist/jquery.js";
import "wowjs/dist/wow.js";


export const BASE_URL = "https://pizzeria-backend-c3g6.herokuapp.com";

createApp(App).use(router).mount('#app')
