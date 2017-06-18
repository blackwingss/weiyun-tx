<template>
  <div>
    <div id="all">
      <div class="all-view">
        <div class="videos_content clearfix">
          <h2>视频({{videos.length}})</h2>
          <div class="divider"></div>
          <div class="content">
            <ul>
              <li v-for="item in videos" :class="bView ? 'thum_view' : 'list_view'">
                <video v-show="bView" :src="item.url"></video>
                <p v-show="!bView">{{item.name}}</p>
                <p class="createdAt" v-show="!bView">{{item.createdAt.split('T')[0]}} {{item.createdAt.split('T')[1].split('.')[0]}}</p>
                <a :href="item.url" :class="bView ? 'cover' : 'rightBtn'" target="_blank">播放</a>
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
      bView: 'getBview'
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
