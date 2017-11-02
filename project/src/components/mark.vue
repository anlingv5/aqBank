<template>
<div class="markCom">
	<mt-header title="练习题" :fixed="true">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回首页</mt-button>
      </router-link>
    </mt-header>
    <aqCom :data="currentData" :show="currentShow"></aqCom>

    <router-link :to="{ path:'/mark',query:{id:JSON.parse(currentId)-1,rshow:false}}" v-if="currentId!=0"><mt-button type="primary">上一题</mt-button></router-link>
    <router-link :to="{ path:'/mark',query:{id:JSON.parse(currentId)+1,rshow:false}}" v-if="currentId!=totalData.length-1"><mt-button type="danger">下一题</mt-button></router-link>
</div>
</template>

<script>
import aqCom from '@/components/common/aqCom'
import store from '@/store/index'

export default({
   data(){
     return {
       currentData:{},
       currentShow:false,
       currentId:0
     }
   },
   components:{
    	aqCom
   },
   computed:{
      totalData(){
         return store.state.totalData
      }
   },
   watch:{
      '$route'(to,from){
         this.getData(to.query); //监听路由变化
      }
   },
   mounted(){
      this.$nextTick(()=>{
         this.getData(this.$route.query);
      })
   },
   methods:{
      getData(state){
         this.currentData = {};
         this.currentId = state.id;
         this.currentData = this.totalData[state.id];
         this.currentShow = Boolean(state.rshow);
      }
   }
})
</script>

<style scoped lang="less">

</style>