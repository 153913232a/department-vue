<template>
  <div class="loginBox" v-show="false">
    <!--<div class="layui-row flex-center" style="margin-bottom: 60px;">-->
      <!--<button class="layui-btn layui-btn-normal layui-btn-lg system-login" style="width: 43%">继续登录后台</button>-->
      <!--<button class="layui-btn layui-btn-normal layui-btn-lg triggletable" style="width: 43%">登录授权账号</button>-->
    <!--</div>-->
    <div class="layui-row" v-show="isShow">
      <table class="layui-table">
        <colgroup>
          <col :width="constant.tableWidthM">
          <col :width="constant.tableWidthM">
          <col :width="constant.tableWidthM">
          <col :width="constant.tableWidthM">
        </colgroup>
        <thead>
        <tr>
          <th class="vertical-h">序号</th>
          <th class="vertical-h">姓名</th>
          <th class="vertical-h">部门</th>
          <th class="vertical-h">操作</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td class="vertical-h">1</td>
          <td class="vertical-h">大力</td>
          <td class="vertical-h">金属</td>
          <td class="vertical-h">
            <button class="layui-btn layui-btn-normal layui-btn-lg user-login" click-index="1">选择</button>
          </td>
        </tr>
        <tr>
          <td class="vertical-h">1</td>
          <td class="vertical-h">大力</td>
          <td class="vertical-h">金属</td>
          <td class="vertical-h">
            <button class="layui-btn layui-btn-normal layui-btn-lg">选择</button>
          </td>
        </tr>
        <tr>
          <td class="vertical-h">1</td>
          <td class="vertical-h">大力</td>
          <td class="vertical-h">金属</td>
          <td class="vertical-h">
            <button class="layui-btn layui-btn-normal layui-btn-lg">选择</button>
          </td>
        </tr>
        <tr>
          <td class="vertical-h">1</td>
          <td class="vertical-h">大力</td>
          <td class="vertical-h">金属</td>
          <td class="vertical-h">
            <button class="layui-btn layui-btn-normal layui-btn-lg">选择</button>
          </td>
        </tr>
        <tr>
          <td class="vertical-h">1</td>
          <td class="vertical-h">大力</td>
          <td class="vertical-h">金属</td>
          <td class="vertical-h">
            <button class="layui-btn layui-btn-normal layui-btn-lg">选择</button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import {constant} from "../../common/js/constant";

  export default {
    name: "loginBox",
    data() {
      return {
        constant: {},
        isShow: true
      }
    },
    created() {
      this.constant = constant
      // $(document).on('click', '.system-login', ()=> {
      //   console.log('响应点击事件');
      //   this.$store.commit('setUser', {
      //     username: 'System'
      //   })
      //   this.$router.push({
      //     path: '/g=1/zzjg'
      //   })
      //   // layer.msg('响应点击事件')
      // });
      // $(document).on('click', '.triggletable', ()=> {
      //   console.log('响应点击事件');
      //   this.triggle();
      //   // layer.msg('响应点击事件')
      // });
      $(document).on('click', '.user-login', (e)=> {
        console.log(e,'userlogin');
        // layer.msg('响应点击事件')
      });
    },
    methods: {
      triggle() {
        console.log('响应triggle');
        this.isShow = !this.isShow
      }
    }
  }
</script>

<style scoped lang="stylus">
  @import "../../common/stylus/common.styl";
  .loginBox{
    padding: 20px;
  }
</style>
