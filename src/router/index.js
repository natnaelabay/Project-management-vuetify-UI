import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../views/Dashboard";
import projects from "../views/projects";
import team from "../views/team";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "dashboard",
    component: Dashboard,
  },
  {
    path: "/projects",
    name: "project",
    component: projects,
  },

  {
    path: "/team",
    name: "team",
    component: team,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
