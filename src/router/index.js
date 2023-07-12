import * as VueRouter from "vue-router";
import HomeView from "@/views/HomeView.vue";


const routes = [{
  path: '/',
  component: HomeView
}];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

export default router;
