<template>
	<router-link :to="url" class="bg-blue vux-1px text-center"
	   style="z-index:999;position: fixed;right:1rem;bottom:3rem;height:3rem;width:3rem;line-height: 3rem;opacity: .8;border-radius: 100%">
		{{text}} </router-link>
</template>
<script type="text/ecmascript-6">
	export default{
		name:'fixedBtn',
		data(){},
		props:{
			url:String,
			text:{
				default:'添加',
				type:String
			}
		}
	}
</script>
