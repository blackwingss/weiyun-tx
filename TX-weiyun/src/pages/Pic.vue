<template>
  <div>
    <div id="all">
      <div class="all-view">
        <div class="pics_content clearfix">
          <h2>图片({{pictures.length}}张)</h2>
          <div class="divider"></div>
          <div class="content">
            <ul>
              <li v-for="item in pictures" :class="isView ? 'thum_view' : 'list_view'">
                <img :src="item.url">                
                <p v-show="!isView">{{item.name}}</p>
                <a :href="item.url" :class="isView ? 'cover' : 'rightBtn'" target="_blank">查看大图</a>
              </li>
            </ul>
          </div>
        </div> 
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      pictures: 'getPictures',
      isView: 'getIsView'
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
