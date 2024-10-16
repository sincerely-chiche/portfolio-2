import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/services",
      name: "services",
      component: () => import("../views/Services.vue"),
    },
    {
      path: "/work",
      name: "work",
      component: () => import("../views/Work.vue"),
    },
    {
      path: "/resume",
      name: "resume",
      component: () => import("../views/Resume.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("../views/ContactUs.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
