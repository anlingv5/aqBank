<template>
<div class="aqtemplate">
	<mt-checklist
	  :title="currentData.id+'、'+currentData.title"
	  v-model="value"
	  :options="currentData.options"
	  :max="currentData.answer.length">
	</mt-checklist>
	<p style="text-align: left;">选中的答案：{{ value }}</p>

	<div class="resultBox" v-if="showResult">
		<hr>
		<div class="result_status">正确答案：<span>B</span></div>
		<div class="result_msg">答题参考：<span>这个问题吗？可以这样子开解析的，但是呢只可意会不可言传</span></div>
	</div>
	<div class="btns">
       <mt-button type="primary" @click="toPre" v-if="index!=0">上一题</mt-button>
       <mt-button type="danger" @click="toNext" v-if="index!=totalData.length-1">下一题</mt-button>
    </div>
</div>
</template>

<script>
import Vue from 'vue';
import { Checklist } from 'mint-ui';
import { Button } from 'mint-ui';
Vue.component(Button.name, Button);
Vue.component(Checklist.name, Checklist);

export default{
   data(){
   	 return{
   	 	value:[],
   	 	currentData:'',
        index:0,
        totalData:[],
        showResult:false
   	 }
   },
   beforeMount(){
   	  this.totalData = JSON.parse(sessionStorage.data);
	  this.currentData = this.totalData[0];
   },
   watch:{
      value(){
      	 if (this.value.toString() == this.totalData[this.index].answer.toString()) {
      	 	 this.totalData[this.index].status ="ok";
      	 }else{
      	 	this.totalData[this.index].status = "error";
      	 }
      	this.totalData[this.index].current = this.value;
      	sessionStorage.data = JSON.stringify(this.totalData);
      }
   },
   methods:{
      toNext(){
  	    this.index +=1;
  	    this.value = this.totalData[this.index].current;
  	    this.currentData = this.totalData[this.index];
      },
      toPre(){
     	this.index = this.index -1;
     	this.value = this.totalData[this.index].current;
     	this.currentData = this.totalData[this.index];
      }
   }
}
</script>

<style scoped lang="less">
.aqtemplate{
	display: inline-block;
	width: 100%;
	.mint-checklist{
		text-align: left;
		label{
			font-size: 15px;
			line-height:30px;
		}
	}
	.resultBox{
		margin-top: 2.67vw;
		text-align: left;
		font-size: 4.2vw;
		line-height: 7.45vw;
		div{
			padding: 2.67vw;
		}

	}
}
</style>