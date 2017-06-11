<template>
    <div class="page page-current">
		<h :showBack="true" title="工作移交详情">
		</h>
		<div class='content'>
			<div class="list-block m-tb05">
				<ul>
					<li class="vux-1px-b p-t05">
						<div class="item-content">
							<div class="item-inner  p-tb0">
								<div class="item-title label">部门：</div>
								<div class="item-input flex">
									<p class="ub-f1">技术部</p>
									<span>2015-02-31</span>
								</div>
							</div>
						</div>
					</li>
					<li class="vux-1px-b p-t05">
						<div class="item-content noHeight">
							<div class="item-inner noHeight p-tb0">
								<div class="item-title label">主题：</div>
								<div class="item-input flex">
									<p class="ub-f1">UI设计转交关羽</p>
									<span>13:51</span>
								</div>
							</div>
						</div>
					</li>
					<li class="vux-1px-b p-tb05">
						<div class="item-content ">
							<div class="item-inner align-stretch p-tb0 " >
								<div class=" label">备注：</div>
								<div class="ub-f1 m-tb0">
									上岛咖啡合计降温哦价位可即将noierjsor哦了就
								</div>
							</div>
						</div>
					</li>
				</ul>
				<div class="m-t05 flex bg-white p-l05 align-stretch">
					<div class="font-75 m-r105 color-gray">移交详情</div>
					<div class="ub-f1 p-t05">
						<ul>
							<li class="vux-1px-l flex"
								style="position: relative;border-color:rgb(38,187,255) !important;padding-bottom: 2rem;align-items: stretch">
								<img class="uba100"
									 src='http://gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i3/TB10LfcHFXXXXXKXpXXXXXXXXXX_!!0-item_pic.jpg_250x250q60.jpg'
									 alt="" style="height:15vw;width:15vw;margin-left:-7.5vw">
								<div class="ub-f1 p-lr05">
									<div class="font-75">诸葛亮 <span class="fontC">（发起人）</span></div>
									<div class="fontC font-06">2017-12-23 &nbsp; 13:15</div>
								</div>
							</li>
							<li class="vux-1px-l flex"
								style="position: relative;padding-bottom: 2rem;align-items: stretch">
								<img class="uba100"
									 src='http://gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i3/TB10LfcHFXXXXXKXpXXXXXXXXXX_!!0-item_pic.jpg_250x250q60.jpg'
									 alt="" style="height:15vw;width:15vw;margin-left:-7.5vw">
								<div class="ub-f1 p-lr05">
									<div class="flex">
										<div class="ub-f1 font-75">诸葛亮 <span class="fontC">（移交人）</span></div>
										<span class="uba02 bg-blue p-lr05 font-06">已确认</span>
									</div>
									<div class="fontC font-06">2017-12-23 &nbsp; 13:15</div>
									<div class="fontC font-06">
										多晶体sad开会的万起价危机嘿嘿看很喜欢看his恶化房可能是 两课时费
									</div>
								</div>
							</li>
							<li class="vux-1px-l flex"
								style="position: relative;padding-bottom: 2rem;align-items: stretch">
								<img class="uba100"
									 src='http://gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i3/TB10LfcHFXXXXXKXpXXXXXXXXXX_!!0-item_pic.jpg_250x250q60.jpg'
									 alt="" style="height:15vw;width:15vw;margin-left:-7.5vw">
								<div class="ub-f1 p-lr05">
									<div class="flex">
										<div class="ub-f1 font-75">小乔 <span class="fontC">（提醒人）</span></div>
										<span class="uba02 bg-red p-lr05 font-06">待确认</span>
									</div>
									<div class="fontC font-06">2017-12-23 &nbsp; 13:15</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
				<div class="m-t05 p-tb05 flex bg-white">
					<a href="#" class="ub-f1  text-center vux-1px-r">确 认</a>
					<a href="#" class="ub-f1  vux-1px-r text-center">拒 绝</a>
					<a href="" class="  ub-f1 text-center">留 言</a>
				</div>
			</div>
		</div>
    </div>
</template>
<script type="text/ecmascript-6">
	import H from "@/components/header.vue"
	export default{
		components:{
			H
		}
	}
</script>
