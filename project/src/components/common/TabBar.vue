<template>
  <div class="tabBar">
    <mt-tabbar v-model="selected" :fixed="true">
      <mt-tab-item id="练习">
       <img slot="icon" src="../../assets/home.png">
        练习
      </mt-tab-item>
      <mt-tab-item id="答题卡">
        <img slot="icon" src="../../assets/bank.png">
        答题卡
      </mt-tab-item>
    </mt-tabbar>

    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="练习">
        <router-view></router-view>
      </mt-tab-container-item>
      <mt-tab-container-item id="答题卡">
         <resultComponent></resultComponent>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
import Vue from 'vue'
import startComponent from '@/components/start';
import resultComponent from '@/components/result';
import { Tabbar, TabItem } from 'mint-ui';
import { TabContainer, TabContainerItem } from 'mint-ui';
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
import store from '@/store/store'
import {mapState} from 'vuex'

export default {
   // data(){
   //  return {
   //      selected:"练习"
   //  }
   // },
   computed: {
     selected(){
       return store.state.tabSelect;
     }
   },
   components:{
     startComponent,resultComponent
   }
}
</script>

<style scoped lang="less">
.tabBar{
  .mint-tabbar{
    background: #ccc;
    .is-selected{
      background: #008dff;
      color:#fff;
    }
    .icon{
       width:2em; 
       height: 2em;
       vertical-align: -0.15em;
       fill: #fff;
       z-index: 999;
    }
  }
  
}
</style>