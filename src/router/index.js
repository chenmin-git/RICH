import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
	meta :{
		title:'RICH-登录'
	}
  },
  {
    path: '/Login',
    name: 'Login',
	component:Login,
	meta:{
		title:'RICH-登录'
	}
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
/* 路由发生变化修改页面title */
if (to.meta.title) {
document.title = to.meta.title
}
next()
})

export default router
