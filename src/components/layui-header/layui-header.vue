<template>
  <div class="layui-header">
    <div class="layui-logo" ref="spread" style="transition: all .5s">S</div>
    <!-- 头部区域（可配合layui已有的水平导航） -->
    <ul class="layui-nav layui-layout-left left" lay-filter="bigData"

        :style="{left:(!$store.state.isSpread ? '220px !important': '55px')}">
      <li class="layui-nav-item">
        <a href="" target="_blank" title="侧边伸缩">
        <i class="layui-icon layui-icon-spread-left" style="font-size: 16px;" @click="spread($event)"  v-show="$store.state.isSpread"></i>
        <i class="layui-icon layui-icon-shrink-right" style="font-size: 16px;"@click="spread($event)"  v-show="!$store.state.isSpread"></i>
        </a>
      </li>
      <li class="layui-nav-item layui-hide-xs" lay-unselect="">
        <a href="" target="_blank" title="前台">
          <i class="layui-icon layui-icon-website" style="font-size: 16px;"></i>
        </a>
      </li>
      <li class="layui-nav-item" lay-unselect="">
        <a href="javascript:;" layadmin-event="refresh" title="刷新" @click="refresh($event)">
          <i class="layui-icon layui-icon-refresh-3" style="font-size: 16px;"></i>
        </a>
      </li>
      <!--<li class="layui-nav-item"><a href="javascript:;">客商管理</a></li>-->
      <!--<li class="layui-nav-item"><a href="javascript:;">意向业务</a></li>-->
      <!--<li class="layui-nav-item">-->
        <!--<a href="javascript:;">{{$store.state.currentNavTitle}}</a>-->
      <!--</li>-->
    </ul>
    <ul class="layui-nav layui-layout-right" lay-filter="bigData">
      <li class="layui-nav-item">
        <a href="javascript:;" >
          <img src="http://t.cn/RCzsdCq" class="layui-nav-img">
          {{$store.state.user.username}}
        </a>
        <dl class="layui-nav-child">
          <dd><a href="javascript:;">基本资料</a></dd>
          <dd><a href="javascript:;">安全设置</a></dd>
        </dl>
      </li>
      <li class="layui-nav-item"><a href="">退了</a></li>
      <li class="layui-nav-item"><a href="javascript:;" @click="moreTip">
        <i class="layui-icon layui-icon-more-vertical">
        </i></a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "admin-header",
    created() {

    },
    data() {
      return {
        isSpread: false
      }
    },
    methods: {
      moreTip() {
        layer.open({
          title: '公告',
          area: ['500px', '400px'],
          type: 1,
          anim: 1,
          isOutAnim: true,
          content: '公告内容',
          success: ()=> {
            $('.layui-layer-content').css({
              "color": '#333333',
              "text-align":"center"
            })
          }
        })
      },
      refresh(e) {
        e && e.preventDefault();
        this.$emit('refresh')
      },
      spread(e) {
        e && e.preventDefault();
        this.$store.state.isSpread = !this.$store.state.isSpread
        this.$store.commit('setSpread',this.$store.state.isSpread)
        if (this.$store.state.isSpread) {
          this.$refs.spread.style.width = '50px';
        } else {
          this.$refs.spread.style.width = '220px';
        }
        this.$emit('spread')
      }
    },
    mounted() {
      // this.layui.use('element', ()=> {
      //   var element = this.layui.element;
      //   element.hover('bigData', function (data) {
      //     console.log(data)
      //   });
      // })
    }
  }
</script>

<style scoped>
  .layui-header {
    background-color: #393D49 !important;
  }
  /*.layui-header >>> .layui-nav-item a{*/
    /*color: #333333;*/
    /*padding: 0 30px;*/
  /*}*/
  .layui-this {
    font-weight: 700;
    font-style: normal;
    font-size: 14px;
    color: #999999;
  }
 .layui-header >>> .layui-logo {
   background-color: #20222A !important;
   color: rgba(255,255,255,.8);
   width: 220px;
 }
 .left .layui-nav-item {
   margin: 0 20px;
 }
  .left .layui-nav-item a {
    padding: 0 !important;
  }
</style>
