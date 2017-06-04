<template>
	<div>
		<header class="header bg-header">办公</header>
		<div class="title1 vux-1px-t bg-white">
			通用办公
		</div>
		<div class="vux-1px-t row no-gutter bg-white">
			<model-item v-for="item in general" :key="item.id" :url="item.url" :text="item.text" :src="item.img"></model-item>
		</div>
		<div class="title1 vux-1px-t bg-white">
			专业管理
		</div>
		<div class="vux-1px-t row no-gutter bg-white">
			<model-item v-for="item in ProfessionalManager" :key="item.id" :url="item.url" :text="item.text" :src="item.img"></model-item>
		</div>
	</div>
</template>
<style scoped>
	.header {
		text-align: center;
		padding: .5rem 0;
		font-size: 1.1rem;
	}

	.title1 {
		padding-bottom: .5rem;
		padding-top: .5rem;
		color: #000;
		font-size: 1rem;
		margin-top: 1rem;
		padding-left: .5rem;
	}
</style>
<script type="text/ecmascript-6">
	import H from '@/components/header.vue'
	import modelItem from '@/components/modelItem'
	export default{
		name: "index",
		data(){
			return {
				general: [
					{
						text: "审批",
						id:'1',
						url: "#",
						img: require('@/assets/img/apply.png')
					}, {
						text: "行政备案",
						url: "/record",
						id:'2',
						img: require('@/assets/img/apply.png')
					}, {
						text: "班组支付",
						url: "#",
						id:'3',
						img: require('@/assets/img/apply.png')
					}, {
						text: "施工日志",
						url: "#",
						id:'4',
						img: require('@/assets/img/apply.png')
					},
				],
				ProfessionalManager: [{
					text: "工作台历",
					url: "#",
					id:'11',
					img: require('@/assets/img/apply.png')
				},
					{
						text: "阳光采购",
						url: "#",
						id:'12',
						img: require('@/assets/img/apply.png')
					},
					{
						text: "考勤打卡",
						url: "#",
						id:'13',
						img: require('@/assets/img/apply.png')
					},
					{
						text: "业务销售",
						url: "#",
						id:'14',
						img: require('@/assets/img/apply.png')
					},
					{
						text: "市场",
						url: "#",
						id:'15',
						img: require('@/assets/img/apply.png')
					}
				]
			}
		},
		components: {
			H,
			modelItem
		}
	}
</script>
