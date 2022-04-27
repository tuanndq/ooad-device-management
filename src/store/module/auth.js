import { postApi } from "../../utils/api.config";

const Auth = {
  state: () => ({
    token: null,
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

      commit("setToken", token);
    },

    async register({ commit }, { username, password }) {
      const response = await postApi(`/auth/register`, {
        username,
        password,
      });

      console.log(response.data);

      const { token } = response.data;

      commit("setToken", token);
    },
  },
  getters: {
    getToken(state) {
      return state.token;
    },
  },
};

export default Auth;
