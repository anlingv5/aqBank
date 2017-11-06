<template>
<div class="markCom">
	<mt-header title="练习题" :fixed="true">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回首页</mt-button>
      </router-link>
    </mt-header>

    <div class="aqCom">
       <mt-checklist
        :title="(currentId+1)+'、'+currentData.title"
        v-model="value"
        :options="options">
       </mt-checklist>
       <p style="color:red;font-size: 12px;" v-if="showMsg">提示：此题为不定项选择题</p>
       <p>你选择的答案：{{value}}</p>
       <div class="resultBox" v-if="currentShow==true">
          <hr>
          <div class="result_status">正确答案：<span>{{currentData.answer}}</span></div>
          <div class="result_msg">答题参考：<span>{{currentData.explan}}</span></div>
      </div>
    </div>

    <router-link :to="{ path:'/mark',query:{id:currentId-1,rshow:false}}" v-if="currentId!=0"><mt-button type="primary">上一题</mt-button></router-link>
    <router-link :to="{ path:'/mark',query:{id:currentId+1,rshow:false}}" v-if="currentId!=totalData.length-1"><mt-button type="danger">下一题</mt-button></router-link>
</div>
</template>

<script>
export default({
   data(){
     return {
       currentData:{},
       currentShow:false,
       currentId:0,
       value:[],
       options:[],
       showMsg:false
     }
   },
   computed:{
      totalData(){
         return this.$store.state.totalData;
      }
   },
   watch:{
      '$route'(to,from){
         this.getData(to.query); //监听路由变化
      },
      value(){
         this.checkEqul(this.value,this.currentData.answer);
      }
   },
   mounted(){
      this.$nextTick(()=>{
         this.getData(this.$route.query);
      })
   },
   methods:{
      // 获取数据
      getData(state){
         this.currentId = state.id;
         this.currentData = this.totalData[state.id];
         this.options =[].concat(this.currentData.options); //注意数组的赋值
         // 根据路由，注意布尔值的判断控制结果的显示
         if (state.rshow.toString()== 'false') {
            this.currentShow = false;
            this.value = [];
         }else if (state.rshow.toString() == 'true'){
            this.currentShow = true;
            this.value =  this.currentData.current.sort();
         }
         // 根据答案的字段长度，判读是否为多选提示
         if (this.currentData.answer.length >1) {
            this.showMsg = true;
         }else{
            this.showMsg = false;
         }
         // 判断当前是否展示选项结果
         if (this.currentData.current.length > 0) {
             this.value = this.currentData.current.sort();
         }
         // 监听切换路由效果，并记录路由值
         this.$store.commit("checkTabUrl",state);

      },
      // 判断用户选择的答案是否和正确答案相同
      checkEqul(value,answer){
        if (value.length != answer.length) {
           this.$store.commit('addStatus',[this.currentId,"error",this.value]);
        }else{
          for (var i = 0; i < value.length; i++) {
            if (answer.includes(value[i])) {
               this.$store.commit('addStatus',[this.currentId,"ok",this.value]);
            }else{
              this.$store.commit('addStatus',[this.currentId,"error",this.value]);}
            }
        }

      }
   }
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