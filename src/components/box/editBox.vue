<template>
  <div class="layui-row" style="padding: 15px 45px 15px 45px;" v-show="false">
    <div class="layui-form-item">
      <label class="layui-form-label">姓名</label>
      <input type="text" v-model="updateData.name" name="name" class="layui-input" lay-verify="required">
    </div>
    <div class="layui-form-item">
      <label class="layui-form-label">性别</label>
      <select name="gender" v-model="updateData.gender" lay-filter="gender" aria-invalid="false"><option value="1">男</option><option value="2">女</option></select>
    </div>
    <div class="layui-form-item">
      <label class="layui-form-label">年龄</label>
      <input type="text" name="age" v-model="updateData.age" class="layui-input" lay-verify="number">
    </div>
    <div class="layui-form-item">
      <label class="layui-form-label">手机号码</label>
      <input type="text" name="phone" v-model="updateData.phone" class="layui-input" lay-verify="phone">
    </div>
    <div class="layui-form-item">
      <label class="layui-form-label">角色</label>
      <select name="rangeName" v-model="updateData.rangeName" lay-filter="rangeName" aria-invalid="false"><option value="0">超级管理员</option><option value="1">管理员</option></select>
    </div>
    <div class="layui-form-item">
      <label class="layui-form-label">用户名</label>
      <input type="text" name="userName" v-model="updateData.userName" class="layui-input" lay-verify="required">
    </div>
    <div class="layui-form-item">
      <label class="layui-form-label">密码</label>
      <input type="text" name="passWord" v-model="updateData.passWord" class="layui-input" lay-verify="required">
    </div>
    <div class="layui-form-item">
      <label class="layui-form-label">备注</label>
      <input type="text" name="remark" class="layui-input" v-model="updateData.remark">
    </div>
    <div class="layui-input-inline">
      <input type="button" lay-submit="" lay-filter="edit" value="确认" class="layui-btn" style="margin-left: 140px;">
    </div>
  </div>
</template>

<script>
    export default {
      name: "editBox",
      props: {
        updateData: {
          type: Object,
          default: {}
        }
      }
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
