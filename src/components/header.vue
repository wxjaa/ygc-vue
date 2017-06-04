<template>
	<header class="bar bar-nav bg-header">
		<a v-if="showBack" v-on:click="goBack" class="icon icon-left pull-left"></a>
		<slot name="right">
		</slot>
		<h1 class="title">{{title}}</h1>
	</header>
</template>
<script type="text/ecmascript-6">
	export default{
		name: 'header',
		props: {
			showBack: {
				type: Boolean,
				default: false
			},
			title: String
		},
		methods: {
			goBack: function () {
				window.history.back()
			}
		}
	}
</script>
