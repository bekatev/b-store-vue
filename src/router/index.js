import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import Products from "../components/Products.vue";
import Login from "../components/Login.vue";
import SignUp from "../components/SignUp.vue";
import AdminPanel from "../components/AdminPanel.vue";
import ProductDetail from "../components/ProductDetail.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/products",
    name: "Products",
    component: Products,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/products/:id",
    name: "ProductDetail",
    component: ProductDetail,
    props: true,
  },
  {
    path: "/admin",
    name: "AdminPanel",
    component: AdminPanel,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory("/b-store-vue/"), // Add the base path for GitHub Pages
  routes,
});

export default router;
