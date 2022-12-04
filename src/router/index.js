import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import BooksView from "../views/BooksView.vue";
import CartView from "../views/CartView.vue";
import ChargeView from "../views/ChargeView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import NotFoundView from "../views/NotFoundView.vue";
import store from "@/store";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      requireAuth: true,
    },
  },
  {
    path: "/books",
    name: "books",
    component: BooksView,
    meta: {
      requireAuth: true,
    },
  },
  {
    path: "/cart",
    name: "cart",
    component: CartView,
    meta: {
      requireAuth: true,
    },
  },
  {
    path: "/charge",
    name: "charge",
    component: ChargeView,
    meta: {
      requireAuth: true,
    },
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
    meta: {
      requireAuth: false,
    },
  },
  {
    path: "/register",
    name: "register",
    component: RegisterView,
    meta: {
      requireAuth: false,
    },
  },
  {
    path: "/404",
    name: "404",
    component: NotFoundView,
    meta: {
      requireAuth: false,
    },
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/404",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth && !store.state.user.isLogin) {
    next({ name: "login" });
  } else {
    next();
  }
});

export default router;
