<template>
	<router-link class="grid-item vux-1px-b col-25 " :class="active?'active':''" :to="url">
		<img :src="src">
		<span class="grid-center">{{text}}</span>
	</router-link>
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
		name: 'modelItem',
		props: {
			text: String,
			src: String,
			url: String,
			active:{
				default:false,
				type:Boolean
			}
		}
	}
</script>
