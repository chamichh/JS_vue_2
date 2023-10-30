import { createRouter, createWebHistory } from 'vue-router';
import { user } from './global-store.js';
import HomeComponent from './components/HomeComponent.vue';
import AboutMeComponent from './components/AboutMeComponent.vue';
import LandingComponent from './components/LandingComponent.vue';

const routes = [
  { path: '/', component: LandingComponent },
  {
    path: '/home',
    component: HomeComponent,
    meta: { requiresLogin: true },
  },
  {
    path: '/about-me',
    component: AboutMeComponent,
    meta: { requiresLogin: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  if (user.loggedInStatus) {
    if (to.path === '/') {
      next('/home');
    } else {
      next();
    }
  } else {
    if (to.path === '/home' || to.path === '/about-me') {
      next('/');
    } else {
      next();
    }
  }
});

export default router;