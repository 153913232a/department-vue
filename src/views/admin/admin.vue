<template>
  <div class="layui-layout layui-layout-admin">
    <layui-header
      @spread="spread"
      @refresh="refresh"
    ></layui-header>
    <layui-side :isSpread="isSpread" @reload="reload" ref="refresh"></layui-side>
    <router-view ref="layuiBody"></router-view>
  </div>
</template>

<script>
  import LayuiHeader from '../../components/layui-header/layui-header'
  import LayuiFooter from "../../components/layui-footer/layui-footer";
  import LayuiSide from "../../components/layui-side/layui-side";
  export default {
    name: "admin",
    components: {LayuiSide, LayuiFooter, LayuiHeader},
    created() {
      let self = this
      this.layui.use('element',function () {
        let element = self.layui.element
        element.init();
        // element.on('nav(bigData)', function (elem) {
        //   console.log(elem);
        // });
        // element.on('nav(test)', function (elem) {
        //   console.log(elem);
        // })
      });
    },
    data() {
      return {
        isSpread: false
      }
    },
    methods: {
      spread() {
        console.log('render')
        this.$refs.layuiBody.reloadTable()
        this.isSpread = this.$store.state.isSpread
      },
      reload() {
        console.log('render')
        this.$refs.layuiBody.reloadTable()
      },
      refresh() {
        console.log('reload')
        this.$refs.layuiBody.reload()
      }
    }
  }
</script>

<style scoped lang="stylus">

  .layui-layout >>> .layui-body{
    color #333333
    left 220px
  }
</style>
