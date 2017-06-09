<template>
  <div>
    <div id="note">
      <ul>
        <li v-for="item in results">
          <a :href="item.url">{{item.name}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters({
      results: 'getDocs'
    })
  },
  mounted () {
    this.$store.dispatch('get_files')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#note {
  padding: 30px;
  ul {
    list-style: none;
    li{
      width: 100%;
      height: 50px;
      text-align: center;
      line-height: 50px;
      background-color: #ccc;
    }
  }
}
</style>

