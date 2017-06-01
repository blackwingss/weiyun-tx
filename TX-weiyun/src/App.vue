<template>
  <div id="app">
    <w-Header></w-Header>
    <div class="container">
      <w-Sider></w-Sider>
      <router-view class="view"></router-view>
    </div>    
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Sider from '@/components/Sider.vue';
export default {
  components: {
    'w-Header': Header,
    'w-Sider': Sider
  }  
}
</script>

<style lang="scss">
@import './assets/css/reset.css';
#app {
  overflow-y: hidden;
  .container {
    display: -webkit-flex;
    display: flex;
    .view {
      flex: 1;
    }
  }
}

</style>
