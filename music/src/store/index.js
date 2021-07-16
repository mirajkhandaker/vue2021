import { createStore } from 'vuex';
import { auth, userCollection } from '@/includes/firebase';

export default createStore({
  state: {
    authShowModel: false,
    userLoggedIn: false,
  },
  mutations: {
    toggleAuthModel: (state) => {
      state.authShowModel = !state.authShowModel;
    },
    toggleAuth: (state) => {
      state.userLoggedIn = !state.userLoggedIn;
    },
  },
  getters: {
    // authShowModel: (state) => state.authShowModel,
  },
  actions: {
    async register({ commit }, payload) {
      const userCred = await auth.createUserWithEmailAndPassword(
        payload.email, payload.password,
      );

      await userCollection.doc(userCred.user.uid).set({
        name: payload.name,
        email: payload.email,
        age: payload.age,
        country: payload.country,
      });

      await userCred.user.updateProfile({
        displayName: payload.name,
      });

      commit('toggleAuth');
    },
    async login({ commit }, payload) {
      await auth.signInWithEmailAndPassword(payload.email, payload.password);

      commit('toggleAuth');
    },
    init_login({ commit }) {
      const user = auth.currentUser;
      if (user) {
        commit('toggleAuth');
      }
    },
    async signOut({ commit }) {
      await auth.signOut();
      commit('toggleAuth');
    },
  },
});
