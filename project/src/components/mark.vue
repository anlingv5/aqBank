<template>
<div class="markCom">
	<mt-header title="练习题" :fixed="true">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回首页</mt-button>
      </router-link>
    </mt-header>
    <aqCom :data="currentData" :show="currentShow"></aqCom>

    <router-link :to="{ path:'/mark',query:{id:JSON.parse(currentId-1),rshow:false}}" v-if="currentId!=0">上一题</router-link>
    <router-link :to="{ path:'/mark',query:{id:JSON.parse(currentId)+1,rshow:false}}" v-if="currentId!=totalData.length-1">下一题</router-link>
</div>
</template>

<script>
import aqCom from '@/components/common/aqCom'
import aqBank from '@/components/common/data'

export default({
   data(){
     return {
       totalData:[],
       currentData:{},
       currentShow:false,
       currentId:0
     }
   },
   components:{
    	aqCom
   },
   created(){
      this.totalData = aqBank.dataBank; //第一次获取前20个数据
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
         this.currentId = state.id;
         this.currentData = this.totalData[state.id];
         this.currentShow = Boolean(state.rshow);
         sessionStorage.setItem("urlPath",this.$route.fullPath);
         sessionStorage.setItem("data",JSON.stringify(this.totalData));
      }
   }
})
</script>

<style scoped lang="less">

</style>