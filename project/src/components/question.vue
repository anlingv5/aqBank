<template>
<div class="questionBox">
   <mt-header title="单选题" :fixed="true" v-if="showMsg==false" slot="left">
	  <router-link to="/" slot="left">
	    <mt-button icon="back">返回首页</mt-button>
	  </router-link>
   </mt-header>
   <mt-header title="不定性选择题" :fixed="true" v-if="showMsg==true">
     <router-link to="/" slot="left">
      <mt-button icon="back">返回首页</mt-button>
    </router-link>
   </mt-header>
	<mt-checklist style="margin-top:50px;"
    :title="(currentId+1)+'、'+currentData.title"
    v-model="currentData.current"
    :options="currentData.options">
   </mt-checklist>
   <p style="text-align:left;">你选择的答案：{{currentData.current}}</p>
   
    
	<mt-button size="small" type="primary" v-if="currentId >0" @click="toBefore()">上一题</mt-button>
	<mt-button size="small" type="primary" @click="toNext()" v-if="currentId <(aqData.length-1)">下一题</mt-button>
	<mt-button size="small" type="primary" v-if="currentId==(aqData.length-1)" @click="toResult()">结束答题</mt-button>
    <mt-button size="small" type="danger" @click="showResult">查看答案</mt-button> 

   <div class="resultBox" v-if="currentShow==true">
      <hr>
      <div class="result_status">正确答案：<span>{{currentData.answer}}</span></div>
      <div class="result_msg">答题参考：<span>{{currentData.explan}}</span></div>
  </div>
</div>
</template>

<script>

export default {
	data(){
		return {
			showMsg:false,
			currentShow:false
		}
	},
	computed:{
		aqData(){
			return this.$store.state.totalData;
		},
		currentData(){
			return this.$store.state.currentData;
		},
		currentId(){
			return this.$store.state.currentId;
		}
	},
	watch:{
		currentData(){
			this.checkEqul(this.currentData.current,this.currentData.answer);
		}
	},
	mounted(){
		this.$nextTick(()=>{
			this.$store.commit('addCurrentData',this.aqData[this.currentId])
			this.controlMsg();
		})
	},
	methods:{
		// 判断用户选择的答案是否和正确答案相同
      checkEqul(value,answer){
        if (value.toString().length== answer.toString().length) {
           value.sort();
           answer.sort();
           this.$store.commit('addStatus',[this.currentId,"ok",this.currentData.current]);
        }else{          
           this.$store.commit('addStatus',[this.currentId,"error",this.currentData.current]);
        }
      },
      showResult(){
      	//用户是否可以查看答案
      	this.currentShow = true;
      },
      toBefore(){
      	this.$store.commit('addCurrentId',this.currentId-1);
      	this.currentShow = false;
      	this.$store.commit('addCurrentData',this.aqData[this.currentId]);
      	this.controlMsg();
      },
      toNext(){
      	this.$store.commit('addCurrentId',this.currentId+1);
      	this.currentShow = false;
      	this.$store.commit('addCurrentData',this.aqData[this.currentId]);
      	this.controlMsg();
      },
      controlMsg(){
      	// 根据答案的字段长度，判读是否为多选提示
         if (this.currentData.answer.toString().length >1) {
            this.showMsg = true;
         }else{
            this.showMsg = false;
         }
      },
      toResult(){
      	this.$router.push({ path:'/answerCard' });
      }

	}
}
</script>

<style>
.mint-checklist{
	text-align: left;
}
.mint-checklist-title{
	font-size: 16px;
	line-height: 30px;
}
.resultBox{
	text-align: left;
}
</style>