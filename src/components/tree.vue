<template>
  <dl class="layui-nav-child">
    <dd v-for="i in treeData" :class="[i.children.length > 0 ? 'layui-nav-item' : '', i.isOpen ? 'layui-nav-itemed' : '']">
      <a @click="nodeClick(i)" :style="{'text-align':'left','text-indent': ceng + 'em'}">{{i.title}}<span v-if="i.children.length > 0" class="layui-nav-more"></span></a>
      <tree v-if="i.children.length > 0" :treeData='i.children' @nodeClick="maopao" :ceng="Number(ceng) + 1"></tree>
    </dd>
  </dl>
</template>
<script>
  export default {
    name: 'tree',
    props: ['treeData', 'ceng'],
    data () {
      return {

      }
    },
    mounted () {

    },
    methods: {
      nodeClick (data) {
        this.$emit('nodeClick', data)
      },
      maopao (data) {
        this.$emit('nodeClick', data)
      }
    }
  }
</script>
