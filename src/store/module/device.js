import { deleteApi, getApi, postApi, putApi } from "../../utils/api.config";

const Device = {
  state: {
    devices: [],
    detailDevice: {},
  },
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
      }
    },

    async getDetailsDevice({ commit }, deviceId) {
      const response = await getApi(`/device/details/${deviceId}`);
      commit("setDetailsDevice", response.data);
    },

    async createDevice(
      { state, commit },
      { type, name, status, maximumGuess, subcribeTime, expTime }
    ) {
      let isSuccess = true;
      let errorMessage = null;
      try {
        const response = await postApi("/device", {
          type,
          name,
          status,
          maximumGuess,
          subcribeTime,
          expTime,
        });
        commit("setDevices", [...state.devices, response.data]);
      } catch (err) {
        isSuccess = false;
        errorMessage = err.response.data.message;
      } finally {
        if (!isSuccess) {
          alert(`ERROR: ${errorMessage}`);
        } else {
          alert("Create new device successfully.");
        }
      }
    },

    async updateDevice({ dispatch }, { deviceId, data }) {
      await putApi(`/device/${deviceId}`, data);
      dispatch("getDevices");
    },

    async deleteDevice({ dispatch }, deviceId) {
      await deleteApi(`/device/${deviceId}`);
      dispatch("getDevices");
    },
  },
  getters: {
    getDevices(state) {
      return state;
    },
    getDetailsDevice(state) {
      return state.detailDevice;
    },
  },
};

export default Device;
