<template>
  <div>
    1123
    <input type="text" v-model="user.userName" placeholder="请输入" autocomplete="off" class="layui-input">

    <input type="text" v-model="user.passWord" placeholder="请输入" autocomplete="off" class="layui-input">

    <button @click="login">sss</button>
    <button @click="loginout">out</button>
    <button @click="auth">auth</button>
    <button @click="test">test</button>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "test",
    data() {
      return {
        user: {
          userName: '',
          passWord: ''
        }
      }
    },
    methods: {
      login() {
        // Send a POST request
        axios({
          method: 'post',
          url: 'api/user/login',
          data: this.user
        }).then(res=> {
          console.log(res)
        });
      },
      loginout() {
        axios({
          method: 'post',
          url: 'api/user/logout'
        }).then(res=> {
          document.cookie = res.data + '=;  expires=Thu, 01 Jan 1970 00:00:01 GMT;'
        });
      },
      auth() {
        axios({
          method: 'post',
          url: 'api/user/auth',
          data: {
            userName: 'b'
          }
        }).then(res=> {
          console.log(res)
        });
      },
      test() {
        axios({
          method: 'get',
          url: 'api/student/test'
        }).then(res => {

        })
      }
    }
  }
</script>

<style scoped>

</style>
