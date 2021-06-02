import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ManualBrews from '../views/ManualBrews.vue'
import Machines from '../views/Machines.vue'
import Beans from '../views/Beans.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/manual-brews',
    name: 'ManualBrews',
    component: ManualBrews
  },
  {
    path: '/machines',
    name: 'Machines',
    component: Machines
  },
  {
  path: '/beans',
  name: 'Beans',
  component: Beans
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
        return { el: to.hash };
    }
    return { x: 0, y: 0 };
}
})

export default router
