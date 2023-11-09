import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView";
import FriendListView from "../views/FriendListView";
import UserNewsView from "../views/UserNewsView";
import LoginView from "../views/LoginView";
import RegisterView from "../views/RegisterView";
import NotFoundView from "../views/NotFoundView";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/friendlist",
    name: "friendlist",
    component: FriendListView,
  },
  {
    path: "/usernews",
    name: "usernews",
    component: UserNewsView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/register",
    name: "register",
    component: RegisterView,
  },
  {
    path: "/404",
    name: "404",
    component: NotFoundView,
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
