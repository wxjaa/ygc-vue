<template>
	<div v-on:touchstart="touchStart($event)" v-on:touchend="touchEnd" v-on:touchmove="touchMove" class="col-25 flex p-b05"
		 style="flex-direction: column;align-items: center">
		<img class="uba100" :src='head'
			 alt="" style="height:15vw;width:15vw;">
		<span>{{name}}</span>
	</div>
</template>
<script type="text/ecmascript-6">
	export default{
		name: "personItem",
		data(){
			return {
				timeOutEvent: 0
			}
		},
		props: {
			head: {
				type: String,
				required: true
			},
			name: {
				type: String,
				required: true
			}
		},
		methods: {
			touchStart: function (e) {
				console.log(this)
				try {
					e.preventDefault()
					this.timeOutEvent = setTimeout(this.longPress, 1000);
				} catch (e) {
					alert(e)
				}
			},
			touchMove: function () {
				clearTimeout(this.timeOutEvent)
				this.timeOutEvent = 0
			},
			touchEnd: function () {
				clearTimeout(this.timeOutEvent)
				this.timeOutEvent = 0
			},
			longPress: function () {
				alert("长安")
			}
		}
	}
</script>
