<template>
  <div id="startComponent">
  	<div class="bgImg"><p>欢迎来到胖胖题库</p></div>
  	<router-link to="/main">进入正题</router-link>
  </div>
</template>

<script>
import Vue from 'vue';
import { Button } from 'mint-ui';
Vue.component(Button.name, Button);

export default {
	data(){
		return{
			img:'./static/img/bg.png'
		}
	}
}
	
</script>

<style scoped lang="less">
#startComponent{
	height: 100%;
	overflow: hidden;
   .bgImg{
   	  height: 50vh;
   	  background: #008dff;
   	  p{
   	  	line-height: 50vh;
   	  	color:#fff;
   	  }
   }
   a{
	   	width:40vw;
	   	background: #008dff;
	   	line-height: 10.67vw;
	   	padding: 10px;
	   	margin-top: 20px;
	   	display: inline-block;
	   	color:#fff;
	   	border-radius: 5px;
   }
}
</style>

