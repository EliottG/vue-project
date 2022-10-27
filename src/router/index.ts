import { createRouter, createWebHistory } from "vue-router";
import AppVue from "../App.vue";
import WorkingTime from "../components/WorkingTime.vue";
import WorkingTimes from "../components/WorkingTimes.vue";
import ClockManager from "../components/ClockManager.vue";
import ChartManager from "../components/ChartManager.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: AppVue,
    },
    {
      path: "/working-times",
      name: "working-times",
      component: WorkingTimes,
    },
    {
      path: "/working-time",
      name: "working-time",
      component: WorkingTime,
    },
    {
      path: "/clock-manager",
      name: "clock-manager",
      component: ClockManager,
    },
    {
      path: "/chart-manager",
      name: "chart-manager",
      component: ChartManager,
    },
  ],
});

export default router;
