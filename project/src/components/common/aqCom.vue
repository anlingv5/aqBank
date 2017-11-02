<template>
<div class="aqCom">
	 <mt-checklist
	  :title="data.id+'、'+data.title"
	  v-model="value"
	  :options="data.options">
	 </mt-checklist>
	 <p>你选择的答案：{{value}}</p>
   <div class="resultBox" v-if="showResult">
  		<hr>
  		<div class="result_status">正确答案：<span>B</span></div>
  		<div class="result_msg">答题参考：<span>这个问题吗？可以这样子开解析的，但是呢只可意会不可言传</span></div>
	</div>
</div>
</template>

<script>
import store from '@/store/index'

export default({
	props:{
       data: {
       	 type:Object
       },
       show:{
       	 type:Boolean
       }
 	},
  data(){
 	  return{
 	  	value:[],
 	  	showResult:true
 	  }
  },
  watch:{
    value(){
    	 if (this.value.toString() == this.data.answer.toString()) {
    	 	  store.commit('addStatus',this.data.id,"ok"); 
    	 }else{
    	 	  store.commit('addStatus',this.data.id,"error"); 
    	 }
    	 store.commit('addCurrent',this.data.id,this.value);
    }
 },
})
</script>

<style scoped lang="less">
.aqCom{
	margin-top: 14vw;
  .mint-checklist{
    label{
      text-align: justify;
      display: inline-block;
      font-size:4.25vw;
    }
    .mint-cell{
      text-align: left;
    }
  }
  p{
    text-align: justify;
    font-size: 4vw;
  }
  div{
    text-align: justify;
    font-size: 4vw;
    margin-bottom: 3.25vw;
    line-height:6.25vw;
  }
  
}
</style>