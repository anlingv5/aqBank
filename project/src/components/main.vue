<template>
  <div class="mainComponent">
    <router-view></router-view>
    <div class="tab">
       <router-link tag="li" :to="{path:'/mark',query:{id:tabUrlPath.id,rshow:tabUrlPath.rshow},activeClass:'buttom-nav-active'}">
          <img src="../assets/home.png">
          <span>练习题</span>
       </router-link>
       <router-link tag="li" :to="{path:'/result',activeClass:'buttom-nav-active'}">
          <img src="../assets/bank.png">
          <span>答题卡</span>
       </router-link>
    </div>
  </div>
</template>

<script>
export default {
   data(){
      return {
        toPath:''
      }
   },
   computed:{
      tabUrlPath(){
         return this.$store.state.tabUrlPath
      }
   }
}
</script>

<style scoped lang="less">
.mainComponent{
  width:100%;
  height: 100%;
  overflow: hidden;
  .tab{
    position: fixed;
    bottom: 0;
    left: 0;
    line-height: 13.33vw;
    width:100%;
    li{
        float: left;
        width: 50%;
        list-style: none;
        display: block;
        background: #ccc;
        color:#fff;
        img{
          width:6.73vw;
          vertical-align: middle;
        }
        span{
           line-height:20px;
           font-size: 3.73vw;
        }
    }
    .router-link-active{
      background: #26a2ff;
    }
  }
}
</style>