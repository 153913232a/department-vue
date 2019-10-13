<template>
  <div class="layui-container" :style="{margin: !$store.state.isSpread? '0 auto': '0'}">
    <div class="layui-row layui-breadcrumb layui-header" style="background-color: white">
      <a v-for="(item, index) in bread" :style="{color:(index===bread.length - 1 ? '#666 !important': '#999')}">
        {{item}}
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "layui-body-header",
    data() {
      return {
        changeObj: {
          'ksgl': '客商',
          'ywsq': '业务',
          'xsht': '合同',
          'htsk': '收款',
          'httk': '退款',
          'fpgl': '发票',
          'cght': '合同',
          'jggl': '机构'
        }
      }
    },
    props:{
      hasBT: false,
      BTName: '',
      bread: {
        type: Array,
        default: []
      }
    },
    computed: {
      getTitleName() {
        const currentNavTitle = this.$store.state.currentNavTitle
        if (currentNavTitle.length >=8) {
          return currentNavTitle.substring(0,6)
        } else {
          return currentNavTitle
        }
      }
    },
    methods:{
      create() {
        if (this.BTName === 'jggl') {
          this.$emit('createInstitution')
          return
        }
        this.$router.push({
          path: `/g=1/${this.BTName}-create`
        })
      }
    }
  }
</script>

<style scoped>
  .title {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px 4px 10px 4px;
  }
  .title-name{
    flex: 6;
    font-size: 18px;
    font-weight: 700;
    font-style: normal;
    color: #666666;
  }
  .layui-header {
    height: 50px;
    line-height: 50px;
    margin-bottom: 0;
    border-radius: 0;
  }
</style>
