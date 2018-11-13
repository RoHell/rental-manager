import Vue from "vue";
import "./plugins/axios";
import App from "./App.vue";
import router from "./router";
import store from "./vuex/index";
import "./firebase";
import "./registerServiceWorker";
import VueFire from "vuefire";

Vue.use(VueFire);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
