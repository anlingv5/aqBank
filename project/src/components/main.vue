<template>
  <div class="mainComponent">
    <router-view></router-view>
    <div class="tab">
       <router-link tag="li" :to="{path:toPath,activeClass:'buttom-nav-active'}">练习题</router-link>
       <router-link tag="li" :to="{path:'/result',activeClass:'buttom-nav-active'}">答题卡</router-link>
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
   mounted(){
      this.$nextTick(()=>{
        this.toPath = sessionStorage.getItem("urlPath");
      })  
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
    }
    .router-link-active{
      background: #008dff;
    }
  }
}
</style>