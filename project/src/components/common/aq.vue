<template>
<div class="aqtemplate">
	<mt-checklist
	  title="复选框列表"
	  v-model="value"
	  :options="['选项A', '选项B', '选项C']"
	  :max="max">
	</mt-checklist>
	<div class="resultBox">
		<hr>
		<div class="result_status">正确答案：<span>B</span></div>
		<div class="result_msg">答题参考：<span>这个问题吗？可以这样子开解析的，但是呢只可意会不可言传</span></div>
	</div>
</div>
</template>

<script>
import Vue from 'vue';
import { Checklist } from 'mint-ui';

Vue.component(Checklist.name, Checklist);

export default{
   data(){
   	 return{
   	 	value:[],
        max:1
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