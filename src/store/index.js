import { createStore } from "vuex";
// import state from "./state"
// import mutations from "./mutations"
// import actions from "./actions"

import api from "@/helpers/api";
export default createStore({
  state: {
    searchedMeals: [],
  },
  mutations: {
    setSearchedMeals(state, meals) {
      state.searchedMeals = meals;
    },
  },
  actions: {
    async searchMeals({ commit }, keyword) {
      try {
        const res = await api.get(`search.php?s=${keyword}`);
        commit("setSearchedMeals", res.data.meals);
        console.log(res.data.meals);
      } catch (err) {
        console.log(err);
      }
    },
  },
  // modules: {
  //   auth: authModule,
  //   test: testModule,
  // },
});
