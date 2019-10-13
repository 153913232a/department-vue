<template>
  <div class="layui-body">
  </div>
</template>

<script>
  export default {
    name: "layui-body",
    mounted() {
      this.$store.commit('setCurrentNavTitle', this.breadArray[this.$route.params.name])
    },
    methods: {
      getPath() {
        this.$store.commit('setCurrentNavTitle', this.breadArray[this.$route.params.name])
      }
    },
    watch: {
      '$route':'getPath'
    }
  }
</script>

<style scoped lang="stylus">

</style>
