import { createStore } from 'vuex';

export default createStore({
  state: {
    authShowModel: false,
  },
  mutations: {
    toggleAuthModel: (state) => {
      state.authShowModel = !state.authShowModel;
    },
  },
  getters: {
    authShowModel: (state) => state.authShowModel,
  },
});
