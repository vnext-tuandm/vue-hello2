import Router from 'vue-router'
import DashboardUser from "../components/users/dashboard/Dashboard.component.vue";
import DashboardAdmin from "../components/admins/dashboard/Dashboard.component.vue";
import Login from "../components/globals/login/Login.component.vue";
import NotFound from "../components/globals/notfound/NotFound.component.vue";

const routes = [
  {
    path: "/user",
    name: "DashboardUser",
    component: DashboardUser,
    meta: {
        requiresAuth: true,
        layout: 'AppLayout'
    }
  },
  {
    path: "/admin",
    name: "DashboardAdmin",
    component: DashboardAdmin,
    meta: {
        requiresAuth: true,
        is_admin : true,
        layout: 'AppLayout'
    }
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
        guest: true,
        layout: 'AppLayout'
    }
  },
  {
    path: '/404',
    name: 'NotFound',
    component: NotFound,
    meta: {
      layout: 'AppLayout'
    }
  }
];

const router = new Router({
  mode: "history",
  routes,
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
      if (localStorage.getItem('jwt') == null) {
        next({
          path: '/login',
          params: { nextUrl: to.fullPath }
        })
      } else {
        let user = JSON.parse(localStorage.getItem('user'))
        console.log(user)
        console.log(to.matched)
        if (to.matched.some(record => record.meta.is_admin)) {
          if (user.is_admin == 1) {
            next()
          } else {
            next({ name: 'DashboardUser' })
          }
        } else {
          next()
        }
      }
    } else if (to.matched.some(record => record.meta.guest)) {
      if (localStorage.getItem('jwt') == null) {
        next()
      } else {
        next({ name: 'DashboardUser' })
      }
    } else {
      next()
    }
})

export default router;