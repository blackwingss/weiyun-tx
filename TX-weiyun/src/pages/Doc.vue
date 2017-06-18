<template>
  <div>
    <div id="all">
      <div class="all-view">
        <div class="docs_content clearfix">
          <h2>文档({{pdfs.length}})</h2>
          <div class="divider"></div>
          <div class="content">
            <ul>
              <li v-for="item in pdfs" class="list_view">
                <p><a :href="item.url" target="_blank">{{item.name}}</a></p>
                <p class="createdAt">{{item.createdAt.split('T')[0]}} {{item.createdAt.split('T')[1].split('.')[0]}}</p>
                <a :href="item.url" class="rightBtn" target="_blank">查看</a>
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
      pdfs: 'getPdfs'
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
