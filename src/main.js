import { createApp } from "vue";
import naive from "naive-ui";
import App from "./App";
import router from "./router/index.js";
import 'github-markdown-css/github-markdown.css'
import {saveAs} from 'file-saver';
//import Vue from 'vue'
//import router from './router'
//import VueResource from 'vue-resource'

//Vue.config.productionTip = false;
//Vue.use(VueResource)

//const app = createApp(App);

//app.use(naive);

//app.mount("#app");

/*new Vue({
	el: '#app',
	router,//引用router
	template: '<App/>',
	components: { App }
})*/
createApp(App).use(router).use(naive).mount('#app');