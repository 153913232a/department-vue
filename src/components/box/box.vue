<template>
 <div class="layui-row" style="padding: 15px 45px 15px 45px;" v-show="false">
   <div v-for="(data) in datas" class="layui-form-item">
     <label class="layui-form-label">{{data.name}}</label>
     <div class="layui-input-block" v-html="data.content"></div>
   </div>
   <div class="layui-input-inline">
     <input type="button" lay-submit="" lay-filter="add" value="确认" class="layui-btn" style="margin-left: 140px;">
   </div>
 </div>
</template>

<script>
    export default {
      name: "box",
      props: {
        datas: {
          type: Array,
          default: []
        }
      },
      // render: function (createElement) {
      //   return createElement('div', this.$slots.default)
      // }
    }
</script>

<style scoped lang="stylus">
  @import "../../common/stylus/common.styl"
  em{
    width: 100px;
    margin-right: 15px;
    margin-top: 15px;
    margin-bottom: 15px;
  }
  .layui-form-item{
    margin: 15px 100px 15px 30px !important;
    color: #0C0C0C !important;
  }
</style>
