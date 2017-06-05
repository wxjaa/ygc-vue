<template>
	<div @click="changeType" class="grid-item  w100" :class="active?'active':''" :to="url">
		<img :src="src">
		<span class="grid-center">{{text}}</span>
	</div>
</template>
<style scoped>
	.grid-item {
		display: flex;
		float: left;
		padding: .5rem 0;
		flex-direction: column;
		align-items: center;

	}

	.grid-item:not(:nth-child(4n)) {
		border-right: 1px solid #ccc
	}

	.grid-item > img {
		width: 10vw
	}

	.grid-center {
		display: block;
		text-align: center;
		color: #666;
		margin-top: 0.2rem
	}
	.grid-item.active > .grid-center {
		color: #26BBFF;
	}
</style>
<script type="text/ecmascript-6">
	export default{
		name: 'typeItem',
		props: {
			text: String,
			src: String,
			url: String,
			active:{
				default:false,
				type:Boolean
			}
		},
		methods:{
			changeType: function () {
				console.log(this)
			}
		},
	}
</script>
