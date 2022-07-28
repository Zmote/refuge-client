import Vue from "vue";
import Vuex from "vuex";
import backendApi from "@/backend-api";
import { AxiosResponse } from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: null,
  },
  getters: {},
  mutations: {
    loginSuccess(state, token) {
      state.token = token;
    },
    signUpSuccess(state, token) {
      state.token = token;
    },
  },
  actions: {
    async login({ commit }, user) {
      const response: AxiosResponse = await backendApi.login(
        user.username,
        user.password
      );
      console.log("response", response);
      commit("loginSuccess", response.data.token);
    },
    async signup({ commit }, user) {
      const response: AxiosResponse = await backendApi.signup(
        user.username,
        user.password
      );
      commit("loginSuccess", response.data.token);
    },
  },
  modules: {},
});
