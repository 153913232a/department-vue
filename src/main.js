import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import './common/stylus/index.styl';
import '../node_modules/layui-src/src/css/layui.css'
import '../node_modules/layui-src/src/layui'
// import '../node_modules/layui-src/src/lay/modules/element'
// import '../node_modules/layui-src/src/lay/modules/form'
// import '../node_modules/layui-src/src/lay/modules/laydate'
// import '../node_modules/layui-src/src/css/modules/laydate/default/laydate.css'
// import '../node_modules/layui-src/src/lay/modules/layer'
// import '../node_modules/layui-src/src/lay/modules/laypage'
// window.layui.modules
Vue.prototype.layui = window.layui

const breadArray = {
  'ksgl': '客商管理',
  'ywsq': '业务申请',
  'nmxs': '内贸销售',
  'nwcg': '内贸采购',
  'wmxs': '外贸销售',
  'wmcg': '外贸采购'
}
Vue.prototype.breadArray = breadArray
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
