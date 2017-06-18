<template>
	<div class="page page-current">
		<H title="行政备案" :showBack=true>
			<router-link slot="right" to="record/recordSetting"
						 class="icon color-gray external iconfont icon-set pull-right"></router-link>
		</H>
		<div class="content">
			<div class="row no-gutter bg-white">
				<div @click="changeType(index)" class="vux-1px-b col-25" v-for="(item,index) in type">
					<type-item :active="idx==index?true:false" :idx="index" :key="item.id" :url="item.url"
							   :text="item.text"
							   :src="idx==index?item.active_img:item.img"></type-item>
				</div>
			</div>
			<ul>
				<list-item v-for="(item,index) in dataList" :theme="item.theme" :department="item.department"
						   :date="item.date" :key="item.id"
						   :time="item.time" :status="item.status"></list-item>
			</ul>
		</div>
		<fixed-btn url="#" text="添加"></fixed-btn>
	</div>
</template>
<script type="text/ecmascript-6">
	import H from '@/components/header.vue';
	import typeItem from '@/components/typeItem.vue'
	import fixedBtn from '@/components/fixedBtn.vue'
	import listItem from '@/views/record/listItem.vue'
	import {mapState,mapAction} from "vuex"
	export default{
		name: 'record',
		data(){
			return {
				type: [{
					img: require("@/assets/img/offer.png"),
					active_img: require("@/assets/img/offer-active.png"),
					text: '工作移交',
					type: '1',
					url: '#'
				}, {
					img: require("@/assets/img/offer.png"),
					active_img: require("@/assets/img/offer-active.png"),
					text: '资料移交',
					type: '2',
					url: '#'
				}, {
					img: require("@/assets/img/offer.png"),
					active_img: require("@/assets/img/offer-active.png"),
					text: '年检续费',
					type: '3',
					url: '#'
				}, {
					img: require("@/assets/img/offer.png"),
					active_img: require("@/assets/img/offer-active.png"),
					text: '业务账号',
					type: '4',
					url: '#'
				}],
				dataList: [{
					id: '1',
					theme: "UI转交关羽",
					department: '技术部',
					date: '2017-05-23',
					time: '16:00',
					status: 1
				}, {
					id: '2',
					theme: "UI转交关羽",
					department: '技术部',
					date: '2017-05-23',
					time: '16:00',
					status: 2
				}, {
					id: '3',
					theme: "UI转交关羽",
					department: '技术部',
					date: '2017-05-23',
					time: '16:00',
					status: 3
				}, {
					id: '4',
					theme: "UI转交关羽",
					department: '技术部',
					date: '2017-05-23',
					time: '16:00',
					status: 3
				}]
			}
		},
		methods: {
			changeType: function (type) {
				this.$store.dispatch('changeRecordType',type)
			}
		},
		components: {
			H,
			typeItem,
			fixedBtn,
			listItem
		},
		computed: mapState({
			idx: state=>state.recordType
		})
	}
</script>
