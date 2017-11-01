<template>
<div class="aqCom">
	 <mt-checklist
	  :title="data.id+'、'+data.title"
	  v-model="value"
	  :options="data.options">
	 </mt-checklist>
	 <p>当前</p>
     <div class="resultBox" v-if="showResult">
		<hr>
		<div class="result_status">正确答案：<span>B</span></div>
		<div class="result_msg">答题参考：<span>这个问题吗？可以这样子开解析的，但是呢只可意会不可言传</span></div>
	</div>
</div>
</template>

<script>
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
   	  	showResult:false
   	  }
    },
    watch:{
      value(){
      	 if (this.value.toString() == this.data.answer.toString()) {
      	 	 this.data.status ="ok";
      	 }else{
      	 	 this.data.status = "error";
      	 }
      	 this.data.current = this.value;
      }
   },

})
</script>

<style scoped lang="less">
.aqCom{
	margin-top: 14vw;
}
</style>