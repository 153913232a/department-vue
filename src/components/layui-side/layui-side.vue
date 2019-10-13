<template>
  <div class="layui-side">
    <div class="layui-side-scroll">
      <ul class="layui-nav layui-nav-tree" lay-shrink="all" lay-filter="bigData"
          ref="spread"
          :style="{width:(!$store.state.isSpread ? '100%': '50px')}"
          style="background-color: #20222A;height: 100%;transition:all .5s">
        <li v-for="(menu, index) in menus" @mouseenter="hoverEvent(index, menu)" @mouseleave="mouseOut" class="layui-nav-item">
          <a href="javascript:;" :class="{'tip': ind === index}"
             :style="{
               paddingLeft:(!$store.state.isSpread ? '45px': '0'),
               paddingRight: (!$store.state.isSpread ? '30px': '0')
               }">
            <i class="layui-icon" :class="'layui-icon-'+menu.type"></i>
            <cite v-show="!$store.state.isSpread">{{menu.title}}</cite>
          </a>
          <dl class="layui-nav-child" v-show="!$store.state.isSpread">
            <dd v-for="(item,id) in menu.children">
              <router-link :to="item.path">{{item.title}}</router-link>
            </dd>
          </dl>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "layui-side",
    data() {
      return {
        menus: [
          {
            title: '用户管理',type: 'user',
            children: [
              {
                title: '用户列表',
                path: '/user'
              },
              {
                title: '历史列表',
                path: '/user'
              }
            ]
          },
          {
            title: '角色管理',type: 'auz',children: [
              {
                title: '角色列表',
                path: '/user'
              }
            ]
          },
          {
            title: '损耗管理',type: 'app',children: [
              {
                title: '损耗列表',
                path: '/user'
              }
            ]
          },
          {
            title: '宿舍管理',type: 'home',children: [
              {
                title: '宿舍列表',
                path: '/user'
              },
              {
                title: '评分列表',
                path: '/user'
              }
            ]
          },
          {
            title: '学生管理',type:'username' ,children: [
              {
                title: '学生列表',
                path: '/user'
              }
            ]
          },
          {
            title: '统计中心',type: 'component',children: [
              {
                title: '统计中心列表',
                path: '/user'
              }
            ]
          },
          {
            title: '系统设置',type: 'set', children: [
              {
                title: '基本资料',
                path: '/user'
              },
              {
                title: '修改密码',
                path: '/user'
              }
            ]
          },
        ],
        ind:0
      }
    },
    props: {
      isSpread: false
    },
    created() {

    },
    mounted() {
      this.layui.use('element', ()=>{
        var element = this.layui.element; //导航的hover效果、二级菜单等功能，需要依赖element模块

        // //监听导航点击
        // element.on('nav(bigData)', function(elem){
        //   console.log(elem.text())
        // });

        element.on('nav(bigData)', (data)=>{
          if (this.$store.state.isSpread) {
            // $('.layui-nav-more').css({
            //   'display': 'block'
            // })
            // this.$store.commit('setSpread', false);
            return
          }

          let innerText = data[0].innerText;
          let innerHtml = data[0].innerHTML;
          let a = this.$store.state.currentNavTitle;
          if (innerText === innerHtml) {
            if (!a.length) {
              a.push(innerText)
            } else {
              if (a.indexOf(innerText) != -1 && a.length > 1 && a[1] === innerText) {  // 如果已经有了
                return
              }
              if (a.length > 1) {
                a.pop()
              }
              a.push(innerText)
            }
            this.$store.commit('setCurrentNavTitle', a)
          } else {
            if (!a.length) {
              this.$store.commit('setCurrentNavTitle', [innerText])
            } else {
              if (a.indexOf(innerText) != -1) {
                return
              }
              this.$store.commit('setCurrentNavTitle', [innerText])
            }
          }
        });
      });
    },
    methods: {
      hoverEvent:function(id, menu) {
        if (!this.$store.state.isSpread)
          return
        this.ind = id
        this.$nextTick(() => {
          this.layerIndex = layer.tips(menu.title, '.tip', {
            time:0
          });
        })
      },
      mouseOut() {
        if (!this.$store.state.isSpread)
          return
        layer.closeAll()
      }
    },
    watch: {
      isSpread(val) {
        if (val) {
          $('.layui-nav-more').css({
            'display': 'none'
          })
        } else {
          $('.layui-nav-more').css({
            'display': 'block'
          })
        }
      }
    }
  }
</script>

<style scoped lang="stylus">
  .fade-enter-active, .fade-leave-active
    transition: opacity .5s;

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
    opacity: 0

  .layui-side
    width:220px !important
   .layui-side-scroll
     width: 100% !important
     .layui-nav-item
       a
         height: 40px;
         line-height: 40px;
         padding-left: 45px;
         padding-right: 30px;
         padding-top: 8px;
         padding-bottom: 8px;
         i
           position: absolute;
           top: 50%;
           left: 20px;
           margin-top: -19px;
         .layui-nav-more
           right: 35px !important

</style>
