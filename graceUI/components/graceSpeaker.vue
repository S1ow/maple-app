<template name="graceSpeaker">
	<view class="grace-swiper-msg">
	  <view class="grace-swiper-msg-icon">
		<image :src="icon" mode="widthFix"></image>
	  </view>
	  <swiper :vertical="vertical" autoplay="true" circular="true" :interval="interval">
		<swiper-item v-for="(item, index) in msgs" :key="index">
		  <navigator :url="item.url" :open-type="item.opentype">{{item.title}}</navigator>
		</swiper-item>
	  </swiper>
	</view>
</template>
<script>
export default {
	name: "graceSpeaker",
	props: {
		msgs : {
      type  : Array,
      default : function(){return [];}
    },
    icon : {
      type  : String,
      default : ""
    },
    interval : {
      type : Number,
      default: 3000
    },
    vertical : {
      type : Boolean,
      default : true
    }
	}
}
</script>
<style>
.grace-swiper-msg{width:100%; padding:10upx 0; display:flex; flex-wrap:nowrap;}
.grace-swiper-msg-icon{width:50upx; margin:20upx 20upx 20upx 10upx; flex-shrink:0;}
.grace-swiper-msg-icon image{width:50upx; height:50upx;}
.grace-swiper-msg swiper{width:100%; height:90upx;}
.grace-swiper-msg swiper-item{line-height:90upx;}
.grace-swiper-msg navigator{line-height:90upx;}
</style>