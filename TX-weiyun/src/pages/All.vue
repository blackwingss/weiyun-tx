<template>
  <div id="all">
    <p v-for="item in results">
      <span>{{item.content}}</span>
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      results: 'getTodos'
    })
  },
  mounted () {
    this.$store.dispatch('get_todos')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
