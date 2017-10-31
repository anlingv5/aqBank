<template>
  <div id="startComponent">
  	<div class="bgImg" :style="{background:'url('+img+')'}"><p>欢迎来到气象中心练习题库</p></div>
  	<router-link to="/main">进入练习</router-link>
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

<style lang="less">
#startComponent{
   .bgImg{
   	  height: 100%;
   	  position: fixed;
   	  top:0;
   	  left: 0;
   	  width: 100%;
   	  z-index: 2;
   	  p{
   	  	line-height: 50vh;
   	  	color:#fff;
   	  }
   }
   a{
 	    position: fixed;
 	    top:70%;
 	    left: 25%;
 	    z-index:3;
	   	width:50%;
	   	background: rgba(150,188,218,0.69);
	   	line-height: 7.67vw;
	   	padding: 10px;
	   	margin-top: 20px;
	   	display: inline-block;
	   	color:#fff;
	   	border-radius: 25px;
	   	text-decoration: none;
   }
}
</style>

