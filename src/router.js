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
      path: "/404",
      component: () => import("@/views/404.vue"),
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
      path: "/nested",
      component: Layout,
      redirect: "/nested/menu1",
      name: "nested",
      meta: {
        title: "nested",
        icon: "el-icon-goods"
      },
      children: [
        {
          path: "menu1",
          component: () => import("@/views/nested/menu1/index"), // Parent router-view
          name: "menu1",
          meta: {
            title: "menu1"
          },
          children: [
            {
              path: "menu1-1",
              component: () => import("@/views/nested/menu1/menu1-1"),
              name: "menu1-1",
              meta: {
                title: "menu1-1"
              }
            },
            {
              path: "menu1-2",
              component: () => import("@/views/nested/menu1/menu1-2"),
              name: "menu1-2",
              meta: {
                title: "menu1-2"
              },
              children: [
                {
                  path: "menu1-2-1",
                  component: () =>
                    import("@/views/nested/menu1/menu1-2/menu1-2-1"),
                  name: "menu1-2-1",
                  meta: {
                    title: "menu1-2-1"
                  }
                },
                {
                  path: "menu1-2-2",
                  component: () =>
                    import("@/views/nested/menu1/menu1-2/menu1-2-2"),
                  name: "menu1-2-2",
                  meta: {
                    title: "menu1-2-2"
                  }
                }
              ]
            },
            {
              path: "menu1-3",
              component: () => import("@/views/nested/menu1/menu1-3"),
              name: "menu1-3",
              meta: {
                title: "menu1-3"
              }
            }
          ]
        },
        {
          path: "menu2",
          component: () => import("@/views/nested/menu2/index"),
          meta: {
            title: "menu2"
          }
        }
      ]
    },
    {
      path: "*",
      redirect: "/404",
      hidden: true
    }
  ]
});
