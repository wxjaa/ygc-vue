import Vue from 'vue'
import Router from 'vue-router'
//import Hello from '@/components/Hello'
const index = resolve => require(['@/views/index.vue'], resolve)
const record = resolve => require(['@/views/record/index.vue'], resolve)
const workTransferDetail = resolve => require(['@/views/record/workTransferDetail.vue'], resolve)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
	  {
		  path:'/record',
		  name:'record',
		  component:record
	  },
	  {
		  path:'/workTransferDetail',
		  name:'workTransferDetail',
		  component:workTransferDetail
	  }
  ]
})
