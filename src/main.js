import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "@/store";
import "./plugins/element.js";
import "@/styles/index.scss"; // global css
import "normalize.css/normalize.css"; // A modern alternative to CSS resets
import "@/permission"; // permission control

Vue.config.productionTip = true;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
