import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index'
import solution from '@/page/solution'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
			path: '/solution',
			name: 'solution',
			component: solution
    }
  ]
})
