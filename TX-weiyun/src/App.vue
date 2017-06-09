<template>
    <div id="app">
      <w-Header></w-Header>
      <w-Sider></w-Sider>
      <router-view class="router-view"></router-view>   
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
  .router-view {
    box-sizing: border-box;
    width: 100%;
    height: 550px;
    overflow-y: auto;
    padding-left: 200px;
  }
}

</style>
