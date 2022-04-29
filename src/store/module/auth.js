import { postApi } from "../../utils/api.config";

const Auth = {
  state: () => ({
    token: JSON.parse(localStorage.getItem("token")),
  }),
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
  },
  actions: {
    async login({ commit }, { username, password }) {
      const response = await postApi(`/auth/login`, {
        username,
        password,
      });

      const { token } = response.data;
      localStorage.setItem("token", JSON.stringify(token));
      commit("setToken", token);
    },

    async register({ commit }, { username, password }) {
      const response = await postApi(`/auth/register`, {
        username,
        password,
      });

      const { token } = response.data;
      localStorage.setItem("token", JSON.stringify(token));
      commit("setToken", token);
    },

    logout({ commit }) {
      localStorage.removeItem("token");
      commit("setToken", null);
    },
  },
  getters: {
    getToken(state) {
      return state.token;
    },
  },
};

export default Auth;
