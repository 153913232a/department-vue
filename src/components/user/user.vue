<template>
  <div class="layui-body"
       style="transition: all 0.5s ease 0s;bottom: 0;"
       :style="{left:(!$store.state.isSpread ? '220px !important': '50px')}">
    <layui-body-header
      :hasBT="true"
      :bread="$store.state.currentNavTitle"
    ></layui-body-header>
    <div class="layui-fluid" style="padding: 15px;background-color:#f2f2f2;">
      <div class="layui-card" style="height: 100%;">
        <div class="layui-form layui-card-header layuiadmin-card-header-auto" lay-filter="layadmin-useradmin-formlist" style="padding: 15px;height: auto;">
          <div class="layui-form-item">
            <div class="layui-inline">
              <label class="layui-form-label">姓名</label>
              <div class="layui-input-block">
                <input type="text" name="name" placeholder="请输入" autocomplete="off" class="layui-input">
              </div>
            </div>
            <div class="layui-inline">
              <label class="layui-form-label">手机号</label>
              <div class="layui-input-block">
                <input type="text" name="phone" placeholder="请输入" autocomplete="off" class="layui-input">
              </div>
            </div>
            <div class="layui-inline">
              <label class="layui-form-label">用户名</label>
              <div class="layui-input-block">
                <input type="text" name="userName" placeholder="请输入" autocomplete="off" class="layui-input">
              </div>
            </div>
            <div class="layui-inline">
              <label class="layui-form-label">角色</label>
              <div class="layui-input-block">
                <select class="form-control input-sm"
                        name="part"
                        lay-filter="part"
                        aria-invalid="false">
                  <option value="0">管理员</option>
                  <option value="1">超级管理员</option>
                  <option value="2">纠错员</option>
                  <option value="3">采购员</option>
                  <option value="4">推销员</option>
                  <option value="5">运营人员</option>
                  <option value="6">编辑</option>
                </select>
              </div>
            </div>
            <div class="layui-inline">
              <button class="layui-btn layuiadmin-btn-admin" lay-submit="" lay-filter="LAY-user-back-search">
                <i class="layui-icon layui-icon-search layuiadmin-button-btn"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="layui-card-body">
          <script type="text/html" id="toolbarDemo">
            <div class="layui-btn-container">
              <button class="layui-btn" lay-event="add">添加</button>
              <button class="layui-btn" lay-event="delete">删除</button>
              <!--<button class="layui-btn" lay-event="update">编辑</button>-->
            </div>
          </script>
          <table id="demo" lay-filter="test"></table>
        </div>
      </div>
    </div>
    <box :datas="addDatas" id="createNewW"></box>
  </div>
</template>

<script>
  import LayuiBodyHeader from "../layui-body-header/layui-body-header";
  import axios from 'axios'
  import Box from '../box/box'
  export default {
    name: "xsht",
    data() {
      return {
        tableIns: {},
        table: null,
        bread: [],
        addDatas: [
          {name: '姓名',code: 'name', content: '<input type="text" name="name" class="layui-input" lay-verify="required">'},
          {name: '性别',code: 'gender', content: '<select name="gender" lay-filter="gender" aria-invalid="false"><option value="1">男</option><option value="2">女</option></select>'},
          {name: '年龄',code: 'age', content: '<input type="text" name="age" class="layui-input" lay-verify="number">'},
          {name: '手机号码', code:'phone',content: '<input type="text" name="phone" class="layui-input" lay-verify="phone">'},
          {name: '角色', code:'rangeName', content: '<select name="rangeName" lay-filter="rangeName" aria-invalid="false"><option value="0">超级管理员</option><option value="1">管理员</option></select>'},
          {name: '用户名',code:'userName', content: ' <input type="text" name="userName" class="layui-input" lay-verify="required">'},
          {name: '密码', code: 'passWord',content: '<input type="text" name="passWord" class="layui-input" lay-verify="required">'},
          {name: '备注', code:'remark',content: '<input type="text" name="remark" class="layui-input">'}
        ],
        updateData: {}
      }
    },
    computed: {
      getSpread() {
        return this.$store.state.isSpread
      }
    },
    methods: {
      add() {
        layer.open({
          type: 1,
          closeBtn: 2,
          title:'添加管理员',
          area: '500px',
          btn: [],
          content: $('#createNewW').html(),
          success: (layero, index) => {
            layero.addClass('layui-form');
            $('.layui-layer-title').css({
              'background-color': '#20222A',
              'height': '50px',
              'color': 'white'
            })
            $('.layui-layer-title').add
            $('.layui-layer-setwin').css({
              'color': 'white'
            })
            // layero.find('.layui-layer-btn0').attr({
            //   'lay-filter' : 'create',
            //   'lay-submit' : '',
            // });
            // layero.find('.layui-layer-btn1').attr({
            //   'lay-filter' : 'cancel',
            //   'lay-submit' : '',
            // });
            this.layui.form.on('submit(add)', (data)=> {
              console.log(data);
              axios({
                method: 'post',
                url: 'api/user/insert',
                data: data.field
              }).then(res => {
                this.reloadTable();
              })
              layer.closeAll();
            });
            this.layui.form.render();
          }
          ,yes: (index, layero)=>{
          }
          ,btn2: (index, layero) => {
          }
          ,cancel: function(){
          }
        });
      },
      delete(data) {
        axios({
          method: 'post',
          url: 'api/user/delete',
          data
        }).then(res => {
          this.reloadTable();
        })
      },
      reloadTable() {
        this.tableIns.reload({
          where: { //设定异步数据接口的额外参数，任意设
            gender:''
          }
        })
        // this.table.render()
      },
      reload() {
        this.tableIns.reload({
          where: { //设定异步数据接口的额外参数，任意设
            gender:''
          }
        })
        // this.layui.table.render()

      }
    },
    created() {
      // this.$store.commit('setCurrentNavTitle', '销售合同-内贸')
    },
    mounted() {

      this.layui.use('table', ()=> {
        var table = this.layui.table;

        //监听事件 新增和删除
        table.on('toolbar(test)', (obj)=>{
          var checkStatus = table.checkStatus(obj.config.id);
          console.log(checkStatus)
          switch(obj.event){
            case 'add':
              this.add();
              break;
            case 'delete':
              this.delete(checkStatus.data)
              break;
            // case 'update':
            //   this.update()
            //   console.log('update')
            //   break;
          };
        });


        table.on('edit(test)', (obj)=>{ //注：edit是固定事件名，test是table原始容器的属性 lay-filter="对应的值"
          axios({
            method: 'post',
            url: 'api/user/update',
            data: obj.data
          }).then(res => {
            this.reloadTable();
          })
        });


        // var $ = this.layui.$, active = {
        //   delete: () => { //获取选中数据
        //     var checkStatus = this.table.checkStatus('test')
        //       , data = checkStatus.data;
        //     if (data.length ===0) {
        //       layer.msg("请选择数据");
        //       return;
        //     }
        //     axios({
        //       method: 'post',
        //       url: 'api/user/delete',
        //       data
        //     }).then(res => {
        //       this.reloadTable();
        //     })
        //   },
        //   // add: () =>{
        //   //   this.add()
        //   // },
        //   // update: () => {
        //   //   var checkStatus = this.table.checkStatus('demo')
        //   //     , data = checkStatus.data;
        //   //   if (data.length !=1) {
        //   //     layer.msg("请选择一条数据")
        //   //     return;
        //   //   }
        //   //   this.update(data)
        //   // }
        // }
        //
        // $('.operate').on('click', function(){
        //   console.log('click')
        //   var type = $(this).data('type');
        //   active[type] ? active[type].call(this) : '';
        // });

        //第一个实例
        this.tableIns = table.render({
          elem: '#demo'
          ,toolbar: '#toolbarDemo',
          height: 340
          , url: '/api/user/getUsers' //数据接口
          , page: true //开启分页
          , cols: [[ //表头
            {type:'checkbox'},
            {field: 'id', title: 'ID', sort: true}
            , {field: 'name', title: '姓名', edit: 'text'}
            , {field: 'gender', title: '性别', sort: true, edit: 'text'}
            , {field: 'age', title: '年龄', edit: 'text'}
            , {field: 'phone', title: '手机号',}
            , {field: 'userName', title: '用户名', sort: true}
            , {field: 'passWord', title: '密码', sort: true}
            , {field: 'gender', title: '等级'}
            , {field: 'remark', title: '备注', sort: true, edit: 'text'}
          ]],
          parseData: function(res){ //res 即为原始返回的数据
            console.log(res);
            return {
              "code": res.code, //解析接口状态
              "msg": res.message, //解析提示文本
              "count": res.total, //解析数据长度
              "data": res.data //解析数据列表
            };
        }
        });

      });

      this.layui.use('form', ()=> {
        let form = this.layui.form;
        form.render()
        form.on('select(shzt)', (data)=>{
          console.log(data);
          // this.tableIns.reload({
          //   where: { //设定异步数据接口的额外参数，任意设
          //     gender: data.value
          //   }
          // })
          this.reload();
        });
      });
    },
    watch: {
      getSpread(val) {
        this.reload()
      }
    },
    components: {LayuiBodyHeader, Box}
  }
</script>

<style scoped lang="stylus">
  @import "../../common/stylus/mixin.styl";
  @import "../../common/stylus/common.styl"
  .paginator-position
    float right
    margin-right: 20px
  .layui-icon-search
    position: absolute;
    left: 10px;
    top:50%;
    transform: translateY(-50%)

</style>
