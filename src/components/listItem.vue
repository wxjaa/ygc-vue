<template>
	<li class="p-tb p-lr bg-white vux-1px-b">
		<router-link to="workTransferDetail.html" class="color-black">
			<slot name="head"></slot>
			<div class="flex ub-ver">
				<div class="flex">
					<div class="ub-f1 "><span class="fontC">主题：</span>UI转交关于</div>
					<span class="uba02 bg-red p-lr05 font-75">待确认</span>
				</div>
				<div class="font-75">
					<span class="fontC">部门：</span>技术部
                        <span class="m-l font-75 fontC">
                            2017-02-29
                        </span>
                        <span class="m-l font-75 fontC">
                            16-21
                        </span>
				</div>
			</div>

		</router-link>
	</li>
</template>
<script type="text/ecmascript-6">
	export default{
		name: 'listItem',
		data(){
		},
		porps: []
	}
</script>
