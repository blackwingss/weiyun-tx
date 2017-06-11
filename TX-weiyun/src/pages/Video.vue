<template>
  <div>
    <div id="all">
      <div class="all-view">
        <div class="videos_content clearfix">
          <h2>视频({{videos.length}}部)</h2>
          <div class="divider"></div>
          <div class="content">
            <ul>
              <li v-for="item in videos" :class="isView ? 'thum_view' : 'list_view'">
                <video v-show="isView" :src="item.url"></video>
                <p v-show="!isView">{{item.name}}</p>
                <a :href="item.url" :class="isView ? 'cover' : 'rightBtn'" target="_blank">播放</a>
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
      videos: 'getVideos',
      isView: 'getIsView'
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
