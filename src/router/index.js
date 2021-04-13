import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import firebase from 'firebase'

const routes = [
  {
    path: '/:pathMatch(.*)*',
    redirect: '/login'
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/misCompras',
    name: 'MisCompras',
    component: () => import(/* webpackChunkName: "misCompras" */ '../views/MisCompras.vue'),
    // meta: {
    //   requiresAuth: true
    // }
  },
  {
    path: '/pasarela',
    name: 'PasarelaDePagos',
    component: () => import(/* webpackChunkName: "pasarela" */ '../views/PasarelaDePagos.vue'),
    // meta: {
    //   requiresAuth: true
    // }

  },
  {
    path: '/consolidado',
    name: 'Consolidado',
    component: () => import(/* webpackChunkName: "consolidado" */ '../views/Consolidado.vue'),
    // meta: {
    //   requiresAuth: true
    // }
  },
  {
    path: '/curso/:id',
    name: 'Curso',
    component: () => import(/* webpackChunkName: "curso" */ '../views/Curso.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
   if (to.matched.some(ruta => ruta.meta.requiresAuth)) {
     const user =  firebase.auth().currentUser;
   
    // const user =  'lrodriguez@gmail.com'; 
    if (user) {
       next();
     } else {
       next({
         name: 'Login'
       })
     }
   } else {
     next();
   }
 })

// router.beforeEach((to, from, next) => {
//   let user = firebase.auth().currentUser;
//   let autorizacion = to.matched.some(ruta => ruta.meta.requiresAuth);
    
    // if (autorizacion && !user) {
    //    console.log(autorizacion),
    //    console.log(user),
    //    next('login');
    //  } else if(!autorizacion && user){
    //    next('/')
    //  } else{
    //    next();
    //  }
  
// })


export default router
