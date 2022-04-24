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
    login({ commit }, payload) {
      commit("setToken", payload);
    },
  },
  getters: {
    getToken(state) {
      return state.token;
    },
  },
};

export default Auth;
