import { deleteApi, getApi, postApi, putApi } from "../../utils/api.config";

const Auth = {
  state: () => ({
    devices: [],
    detailDevice: {},
  }),
  mutations: {
    setDevices(state, devices) {
      state.devices = devices;
    },
    setDetailsDevice(state, details) {
      state.detailDevice = details;
    },
  },
  actions: {
    async getDevices({ commit }) {
      try {
        const response = await getApi("/device");
        commit("setDevices", response.data);
      } catch (err) {
        console.log(err);
      } finally {
        alert("Get list Devices error.");
      }
    },

    async getDetailsDevice({ commit }, deviceId) {
      const response = await getApi(`/device/details/${id}`);
      commit("setDetailsDevice", response.data);
    },

    async createDevice(
      { state, commit },
      { deviceType, status, maximumGuess, subcribeTime, expTime }
    ) {
      const response = await postApi("/device", {
        deviceType,
        status,
        maximumGuess,
        subcribeTime,
        expTime,
      });
      commit("setDevices", [...state.devices, response.data]);
    },

    async updateDevice({ dispatch }, { deviceId, data }) {
      await putApi(`/device/${deviceId}`, data);
      dispatch("getDevices");
    },

    async deleteDevice({ dispatch }) {
      await deleteApi(`/device/${deviceId}`);
      dispatch("getDevices");
    },
  },
  getters: {
    getDevices(state) {
      return state.devices;
    },
    getDetailsDevice(state) {
      return state.detailDevice;
    },
  },
};

export default Auth;
