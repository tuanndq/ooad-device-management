import Vue from "vue";
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";

import store from "./store";

import App from "./App.vue";

Vue.use(VueMaterial);

Vue.config.productionTip = false;

Vue.config.errorHandler = (err) => {
  if (err.message !== "Cannot read property 'badInput' of undefined") {
    console.error(err);
  }
};

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
