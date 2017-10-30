<template>
  <div id="app">
    <TabBar></TabBar>
  </div>
</template>

<script>
import TabBar from '@/components/common/Tabbar'
import Vue from 'vue'

export default {
  name: 'app',
  components:{
      TabBar
  }
}
</script>

<style>
body{
  background: #fff;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 20px;
}
</style>
