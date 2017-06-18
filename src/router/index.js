import Vue from 'vue'
import Router from 'vue-router'
//import Hello from '@/components/Hello'
const index = resolve => require(['@/views/index.vue'], resolve)
const record = resolve => require(['@/views/record/index.vue'], resolve)
const workTransferDetail = resolve => require(['@/views/record/workTransferDetail.vue'], resolve)
const recordSetting = resolve => require(['@/views/record/setting.vue'], resolve)
Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'index',
			component: index
		},
		{
			path: '/record',
			name: 'record',
			component: record
		},
		{
			path: '/record/workTransferDetail',
			name: 'workTransferDetail',
			component: workTransferDetail
		},
		{
			path: "/record/recordSetting",
			name: 'setting',
			component: recordSetting
		}
	]
})
