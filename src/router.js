import Vue from "vue";
import Router from "vue-router";
import Layout from "./views/layout/Layout.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/login",
      component: () => import("@/views/login.vue"),
      hidden: true
    },
    {
      path: "/",
      component: Layout,
      redirect: "/dashboard",
      name: "Dashboard",
      hidden: true,
      children: [
        {
          path: "dashboard",
          component: () => import("@/views/dashboard/index")
        }
      ]
    },
    {
      path: "/example",
      component: Layout,
      redirect: "/example/table",
      name: "Example",
      meta: {
        title: "Example",
        icon: "el-icon-menu"
      },
      children: [
        {
          path: "table",
          name: "Table",
          component: () => import("@/views/table/index"),
          meta: {
            title: "Table",
            icon: "el-icon-success"
          }
        },
        {
          path: "tree",
          name: "Tree",
          component: () => import("@/views/tree/index"),
          meta: {
            title: "Tree",
            icon: "el-icon-success"
          }
        }
      ]
    },

    {
      path: "/form",
      component: Layout,
      children: [
        {
          path: "index",
          name: "Form",
          component: () => import("@/views/form/index"),
          meta: {
            title: "Form",
            icon: "el-icon-tickets"
          }
        }
      ]
    },
    {
      path: "*",
      redirect: "/login",
      hidden: true
    }
  ]
});
