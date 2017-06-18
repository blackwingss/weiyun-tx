<template>
  <div id="task">
    <h1 class="task-title">{{taskState.taskCount}} 个文件正在上传</h1>
    <progress id="progress" max="100" v-bind:value="percent"></progress>
    <span class="progress">{{percent}}%</span>
    <span v-show="!taskState.hasTask">完成</span>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters({
      percent: 'getProgress',
      taskState: 'getTaskState'
    })
  }
}
</script>

<style lang="scss">
#task {
  .task-title {
    font-weight: 400;
    font-size: 30px;
    padding-left: 40px;
  }
}
</style>
