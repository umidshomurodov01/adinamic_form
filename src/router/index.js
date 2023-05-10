import { createRouter, createWebHistory } from "vue-router";
import ExploreView from "../layouts/ExploreView.vue";
import Home from "../views/Explore/Home.vue";
import DinamicFormTool from "../views/Explore/DinamicFormToll.vue";
import DinamicForm from "../views/Explore/DinamicForm.vue";

const routes = [
  
  {
    path: "/",
    name: "Explore",
    component: ExploreView,
    children: [
      {
        path: "/",
        name: "Home",
        component: Home,
        // beforeEnter: (to, from, next) => {
        //   if (JSON.parse(Cookies.get("account")).role !== "user") {
        //     router.push("/explore/admin");
        //   } else {
        //     next();
        //   }
        // },
      },
      {
        path: "/letter/:letter?",
        name: "byLetter",
        component: DinamicForm,
      },
      {
        path: "/by-ingredient/:ingredient?",
        name: "byIngredient",
        component: DinamicFormTool,
      },
    ],
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
// router.beforeEach((to, from, next) => {
//   if (!to.meta.nextLevelTest) {
//     next("/explore/test");
//   }
//   next();
// });

export default router;
