<template>
	<div class="page page-current">
		<H title="行政备案" :showBack=true>
			<router-link slot="right" to="setting.html"
						 class="icon color-gray external iconfont icon-set pull-right"></router-link>
		</H>
		<div class="content">
			<div class="row no-gutter bg-white">
				<type-item :active="idx==index?true:false" :idx="index" v-for="(item,index) in type" :key="item.id" :url="item.url" :text="item.text"
							:src="idx==index?item.active_img:item.img"></type-item>

			</div>
		</div>
	</div>
</template>
<script type="text/ecmascript-6">
	import H from '@/components/header.vue';
	import typeItem from '@/components/typeItem.vue'
	export default{
		name: 'record',
		data(){
			return {
				type: [{
					img:require("@/assets/img/offer.png"),
					active_img:require("@/assets/img/offer-active.png"),
					text:'工作移交',
					type:'1',
					url:'#'
				},{
					img:require("@/assets/img/offer.png"),
					active_img:require("@/assets/img/offer-active.png"),
					text:'资料移交',
					type:'2',
					url:'#'
				},{
					img:require("@/assets/img/offer.png"),
					active_img:require("@/assets/img/offer-active.png"),
					text:'年检续费',
					type:'3',
					url:'#'
				},{
					img:require("@/assets/img/offer.png"),
					active_img:require("@/assets/img/offer-active.png"),
					text:'业务账号',
					type:'4',
					url:'#'
				}],
				idx:0
			}
		},
		methods:{
			changeType: function () {
				console.log(this)
			}
		},
		components: {
			H,
			typeItem
		},

	}
</script>
