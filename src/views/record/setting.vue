<template>
    <div class="page page-current">
		<h title="设置">
		</h>
		<div class="content">
			<router-link to="/record/setManager" class="flex bg-white color-black p-tb05 p-l05 m-t05 rightIcon">设置管理员</router-link>
			<router-link to="/record/setOperator" class="flex bg-white color-black p-tb05 m-t05 p-l05 rightIcon">设置操作员</router-link>
		</div>
    </div>
</template>
<script type="text/ecmascript-6">
	import H from "@/components/header.vue"
	export default{
		name:"setting",
		components:{
			H
		}
	}
</script>
