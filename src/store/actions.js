import api from "@/helpers/api";
export async function searchMeals({ commit }, keyword) {
  try {
    const res = await api.get(`search.php?s=${keyword}`);
    commit("setSearchedMeals", res.data.meals);
    console.log(res.data.meals);
  } catch (err) {
    console.log(err);
  }
}
