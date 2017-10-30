<template>
  <div class="mainComponent">
    <mt-header title="练习题" :fixed="true">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回首页</mt-button>
      </router-link>
    </mt-header>
    <aqTemplate></aqTemplate>
    <div class="btns">
       <mt-button type="primary">上一题</mt-button>
       <mt-button type="danger">下一题</mt-button>
       <mt-button type="default" @click.ative="toResult">结束答题</mt-button>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);
import aqTemplate from '@/components/common/aq'
import { Button } from 'mint-ui';
Vue.component(Button.name, Button);

export default {
   props:{
      tabSelect:{
        type:String
      }
   },
   data(){
    return {
        selected:"练习"
    }
   },
   components:{
    aqTemplate
   },
   methods:{
    toResult(){
      this.selected = "答题卡";
    }
   }
}
</script>