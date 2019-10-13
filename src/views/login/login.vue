<template>
  <div class="login" style="color: #333;">
    <div class="layui-row" style="margin: 0 auto;width: 50%;">
      <div class="layui-row title1">维科嘉丰EOM</div>
      <div class="layui-row title2">Welcome back! Please login to your account.</div>
      <div class="layui-row layui-form">
        <div class="layui-row flex-center text-center" style="margin: 60px 0 30px 0;">
          <div class="layui-col-lg2">用户名称</div>
          <div class="layui-col-lg6">
            <input type="text" name="username" class="layui-input">
          </div>
        </div>
        <div class="layui-row flex-center text-center" style="margin: 30px 0 30px 0;">
          <div class="layui-col-lg2">登录密码</div>
          <div class="layui-col-lg6">
            <input type="password" name="password" class="layui-input">
          </div>
        </div>
        <div class="layui-row flex-center text-center" style="margin: 30px 0 30px 0;">
          <div class="layui-col-lg2">5+2</div>
          <div class="layui-col-lg6">
            <input type="text" name="password" class="layui-input">
          </div>
        </div>
        <div class="layui-row flex-center" style="margin: 30px 0 30px 0;">
          <div class="layui-col-lg2"></div>
          <div class="layui-col-lg6">
            <input type="checkbox" name="remember" title="记住密码">
          </div>
        </div>
        <div class="layui-row flex-center" style="margin: 30px 0 30px 0;">
          <div class="layui-col-lg2"></div>
          <button class="layui-btn layui-btn-normal layui-btn-lg" @click="login">登录</button>
        </div>
      </div>
      <login-box
        id="login"
        ref="login"
      ></login-box>
    </div>
  </div>
</template>

<script>
  import LoginBox from "./loginBox";
  export default {
    name: "login",
    components: {LoginBox},
    created() {
      this.layui.use('form', ()=> {
        let form = this.layui.form;
        form.on('select()', (data)=> {
          console.log(data.value)
        });
        // form.verify({
        //   username: function(value, item){ //value：表单的值、item：表单的DOM对象
        //     if(!new RegExp("^[a-zA-Z0-9_\u4e00-\u9fa5\\s·]+$").test(value)){
        //       return '用户名不能有特殊字符';
        //     }
        //     if(/(^\_)|(\__)|(\_+$)/.test(value)){
        //       return '用户名首尾不能出现下划线\'_\'';
        //     }
        //     if(/^\d+\d+\d$/.test(value)){
        //       return '用户名不能全为数字';
        //     }
        //   }
        //
        //   //我们既支持上述函数式的方式，也支持下述数组的形式
        //   //数组的两个值分别代表：[正则匹配、匹配不符时的提示文字]
        //   ,password: [
        //     /^[\S]{6,12}$/
        //     ,'密码必须6到12位，且不能出现空格'
        //   ]
        // });
        form.render()
      })
    },
    methods: {
      login() {
        layer.open({
          title:'登录提示',
          area: '500px',
          btn: ['登录授权账号','继续登录后台'],
          success: (layero) =>{
            layero.find('.layui-layer-btn').css({
              'text-align': 'center',
              'display': 'flex'
            })
            layero.find('.layui-layer-btn0').css('width', '42%');
            layero.find('.layui-layer-btn1').css('width', '42%');
          },
          content: $('#login').html()
          ,yes: (index, layero)=>{
            this.$refs.login.triggle()
            this.$router.push({
              path: '/g=1/zzjg'
            })
          }
          ,btn2: (index, layero) => {
            this.$router.push({
              path: '/g=1/zzjg'
            })
            this.$store.commit('setUser', {
              username: 'System'
            })
          }
          ,cancel: function(){
          }
        });
      }
    }
  }
</script>

<style scoped lang="stylus">
  @import "../../common/stylus/common.styl"
  .title1{
    font-family: "微软雅黑 Bold", "微软雅黑 Regular"
    font-weight: 700;
    font-style: normal;
    font-size: 36px;
    text-align: center;
    margin-bottom: 15px;
    margin-top: 70px;
  }
  .title2{
    font-size: 18px;
    color: rgb(201, 201, 201);
    text-align: center;
    margin-bottom: 70px;
  }
  .layui-btn
    width: 50%;
    margin: 0 auto;
</style>
