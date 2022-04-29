import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import Auth from "./module/auth";
import Device from "./module/device";

// Create a new store instance.
const store = new Vuex.Store({
  state() {
    return {
      count: 0,
    };
  },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
  modules: {
    auth: Auth,
    device: Device,
  },
});

export default store;
