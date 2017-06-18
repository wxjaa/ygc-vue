<template>
	<li  class="p-tb p-lr bg-white vux-1px-b">
	<router-link to="record/workTransferDetail" class="color-black">
		<div class="flex ub-ver">
			<div class="flex">
				<div class="ub-f1 "><span class="fontC">主题：</span>{{theme}}</div>
				<span class="uba02 bg-yellow p-lr05 font-75" v-if="status==1">待确认</span>
				<span class="uba02 bg-blue p-lr05 font-75" v-else-if="status==2">已确认</span>
				<span class="uba02 bg-red p-lr05 font-75" v-else-if="status==3">已拒绝</span>
			</div>
			<div class="font-75">
				<span class="fontC">部门：</span>{{department}}
                        <span class="m-l font-75 fontC">
                            {{date}}
                        </span>
                        <span class="m-l font-75 fontC">
                            {{time}}
                        </span>
			</div>
		</div>

	</router-link></li>
</template>
<script type="text/ecmascript-6">
	export default{
		name: 'listItem',
		data(){
			return {}
		},
		props: ['theme', "department", "date", "time", "status"]
	}
</script>
