import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Buefy from "buefy";
import "buefy/dist/buefy.css";
import Vue2TouchEvents from "vue2-touch-events";

Vue.use(Buefy);
Vue.use(Vue2TouchEvents, {
  swipeTolerance: 10,
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
