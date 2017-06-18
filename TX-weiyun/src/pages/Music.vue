<template>
  <div>
    <div id="all">
      <div class="all-view">
        <div class="musics_content clearfix">
          <h2>音乐({{musics.length}})</h2>
          <div class="divider"></div>
          <div class="content">
            <ul>
              <li v-for="item in musics" class="list_view">
                <audio :src="item.url" controls></audio>
                <p>{{item.name}}</p>
                <p class="createdAt">{{item.createdAt.split('T')[0]}} {{item.createdAt.split('T')[1].split('.')[0]}}</p>
                <a :href="item.url" class="rightBtn" target="_blank">下载</a>
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
      musics: 'getMusics'
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
