<template>
  <div>
    <div id="all">
      <ul v-show="isView" class="thum-view">
        <li v-for="item in results">
          <img :src="item.url" alt="">         
        </li>    
      </ul>
      <ul v-show="!isView" class="list-view">
        <li v-for="item in results">
          <img :src="item.url" alt="">
          <p>{{item.name}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      results: 'getPictures',
      isView: 'getIsView'
    })
  },
  mounted () {
    this.$store.dispatch('get_files')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#all {
  ul.thum-view {
    padding: 10px 30px;
    list-style: none;
    li {
      float: left;
      width: 200px;
      height: 300px;
      margin: 8px;
      img {
        width: 100%;
        height: 100%;
      } 
    }
  }
  ul.list-view {
    padding: 10px 30px;
    list-style-type: decimal;
    li {
      width: 100%;
      text-align: left;
      margin: 10px 0;
      padding: 10px 0;
      line-height: 10px;     
      background-color: #f2f2f2;
      color: #000;
      img {
        vertical-align: top;
        margin-left: 10px;
        width: 30px;
        height: 30px;
        display: inline-block;
      }
      p{
        vertical-align: top;
        height: 30px;
        line-height: 30px;
        margin-left: 10px;
        display: inline-block;
      }
      &:hover {
        background-color: #999;
      }
    }
  }
}

</style>
