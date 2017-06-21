<template>
	<div class="page page-current">
		<h title="设置管理员" :showBack="true"></h>
		<div class="content">
			<div class="color-gray p-tb05 p-l075">
				已有管理员
			</div>
			<div class="row bg-white no-gutter p-tb05 vux-1px-b">
				<!--<div class="col-25 flex p-b05" style="flex-direction: column;align-items: center">
					<img src='http://gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i3/TB10LfcHFXXXXXKXpXXXXXXXXXX_!!0-item_pic.jpg_250x250q60.jpg'
						 alt="" style="height:15vw;width:15vw;border-radius: 8vw">
					<span>周宇</span>
				</div>
				<div class="col-25 flex p-b05" style="flex-direction: column;align-items: center">
					<img src='http://gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i3/TB10LfcHFXXXXXKXpXXXXXXXXXX_!!0-item_pic.jpg_250x250q60.jpg'
						 alt="" style="height:15vw;width:15vw;border-radius: 8vw">
					<span>周宇</span>
				</div>
				<div class="col-25 flex p-b05" style="flex-direction: column;align-items: center">
					<img src='http://gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i3/TB10LfcHFXXXXXKXpXXXXXXXXXX_!!0-item_pic.jpg_250x250q60.jpg'
						 alt="" style="height:15vw;width:15vw;border-radius: 8vw">
					<span>周宇</span>
				</div>
				<div class="col-25 flex p-b05" style="flex-direction: column;align-items: center">
					<img src='http://gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i3/TB10LfcHFXXXXXKXpXXXXXXXXXX_!!0-item_pic.jpg_250x250q60.jpg'
						 alt="" style="height:15vw;width:15vw;border-radius: 8vw">
					<span>周宇</span>
				</div>
				<div class="col-25 flex p-b05" style="flex-direction: column;align-items: center">
					<img src='http://gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i3/TB10LfcHFXXXXXKXpXXXXXXXXXX_!!0-item_pic.jpg_250x250q60.jpg'
						 alt="" style="height:15vw;width:15vw;border-radius: 8vw">
					<span>周宇</span>
				</div>-->
				<person-item v-for="item in personList" :head="item.head" :name="item.name" :key="item.id"></person-item>
				<div class="col-25 flex p-b05" style="flex-direction: column;align-items: center">
					<img src='../../assets/img/addPerson.png'
						 alt="" style="height:15vw;width:15vw;border-radius: 8vw">
					<span>添加管理员</span>
				</div>
			</div>
			<div class="bg-white text-center p-lr2 color-gray p-tb05">
				注：长按头像删除管理员，此处删除/添加的管理员只是行政备案的管理员，不涉及有工程管理员
			</div>
		</div>
	</div>
</template>
<script type="text/ecmascript-6">
	import H from "@/components/header.vue"
	import personItem from "@/components/personItem.vue"
	export default{
		data(){
			return {
				personList: [
					{
						head: 'http://gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i3/TB10LfcHFXXXXXKXpXXXXXXXXXX_!!0-item_pic.jpg_250x250q60.jpg',
						name: '周瑜',
						id: "121221"
					},
					{
						head: 'http://gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i3/TB10LfcHFXXXXXKXpXXXXXXXXXX_!!0-item_pic.jpg_250x250q60.jpg',
						name: '黄盖',
						id: "235325"
					},
					{
						head: 'http://gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i3/TB10LfcHFXXXXXKXpXXXXXXXXXX_!!0-item_pic.jpg_250x250q60.jpg',
						name: '赵云',
						id: "734234"
					},
					{
						head: 'http://gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i3/TB10LfcHFXXXXXKXpXXXXXXXXXX_!!0-item_pic.jpg_250x250q60.jpg',
						name: '张飞',
						id: "12424"
					}
				]
			}
		},
		components: {
			H,
			personItem
		}
	}
</script>
