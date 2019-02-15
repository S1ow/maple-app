<template name="graceMaskView">
	<view class="grace-mask" v-if="show">
		<view class="grace-mask-view" :style="{background:bgcolor}" v-if="show">
			<slot></slot>
		</view>
	</view>
</template>
<script>
export default {
	name : "graceMaskView",
	props :{
		show : {
			type : Boolean,
			default : false
		},
		bgcolor : {
			type : String,
			default : "#FFFFFF"
		}
	}
}
</script>
<style>
.grace-mask{background:rgba(0, 0, 0, 0.6); position:fixed; width:100%; height:100%; left:0; top:0; z-index:1;}
.grace-mask-view{width:70%; position:fixed; left:50%; top:50%; background:#FFF; border-radius:6px; z-index:99; transform: translate(-50%, -50%);}
</style>