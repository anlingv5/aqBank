<template>
  <div class="mainComponent">
    <mt-header title="练习题" :fixed="true">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回首页</mt-button>
      </router-link>
    </mt-header>
    <aqTemplate></aqTemplate>
  </div>
</template>

<script>
import Vue from 'vue'
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);
import aqTemplate from '@/components/common/aq'
import dataBank from '@/assets/data'

export default {
   data(){
    return {
        dataBank:[] 
    }
   },
   components:{
      aqTemplate
   },
   beforeCreate(){
      this.dataBank = dataBank;
      sessionStorage.data = JSON.stringify(this.dataBank);
   }
}
</script>