import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store';
Vue.use(VueRouter);
const routes = [
    {
        path: '/login',
        name: 'login',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import (/* webpackChunkName: "login" */ '@/views/login')
    }, 
    {
        path: '/',
        name: 'homeIndex',
        component: (resolve) => {
            require(['@/views/menu'], resolve);
        },
        children: [
            {
                path: '/yard',
                name: 'yard',
                meta: {
                    activeUrl: 'yard',
                },
                component: (resolve) => {
                    require(['@/views/yard/list'], resolve);
                }
            },
            {
                path: '/yardDetail/:id',
                name: 'yardDetail',
                meta: {
                    activeUrl: 'yard',
                },
                component: (resolve) => {
                    require(['@/views/yard/index'], resolve);
                }
            },
            {
                path: '/room',
                name: 'room',
                meta: {
                    activeUrl: 'room',
                },
                component: (resolve) => {
                    require(['@/views/room/list'], resolve);
                }
            },
            {
                path: '/roomDetail/:id',
                name: 'roomDetail',
                meta: {
                    activeUrl: 'room',
                },
                component: (resolve) => {
                    require(['@/views/room/index'], resolve);
                }
            },
            {
                path: '/user',
                name: 'user',
                meta: {
                    activeUrl: 'user',
                },
                component: (resolve) => {
                    require(['@/views/user/list'], resolve);
                }
            },
            {
                path: '/userDetail/:id',
                name: 'userDetail',
                meta: {
                    activeUrl: 'user',
                },
                component: (resolve) => {
                    require(['@/views/user/index'], resolve);
                }
            },
        ]
    },
    {
        // not found handler
        path: '*',
        name: 'other',
        meta: {
            auth: false
        },
        component: (resolve) => {
            require(['@/views/login'], resolve);
        }
    }
];
const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
    if (to.name === 'login') {
        store.commit('clearUser');
        next();
    } else {
        //查找 token
        if (store.state.user.info.token) {
            next();
        } else {
            router.push({name: 'login'});
        }
    }
})
export default router;
