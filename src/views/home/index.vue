<!--
 * @Description: 平台主页
 * @Author: flq
 * @Date: 2020-03-01 22:16:51
 * @LastEditors: ''
 * @LastEditTime: 2020-03-04 00:01:59
 -->
<template>
  <div id="mainPage">
    <el-header>123</el-header>
    <el-container>
      <el-aside>
        <el-menu 
          default-active="1-4-1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose" 
          :collapse="isCollapse"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">风格</span>
            </template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">空间</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-document"></i>
            <span slot="title">分类</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">产品</span>
          </el-menu-item>
          <el-menu-item index="5">
            <i class="el-icon-setting"></i>
            <span slot="title">产品详情</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      isCollapse: false
    }
  },
  created() {},
  computed: {},
  mounted () {},
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}

</script>

<style lang='stylus' scoped>
#mainPage
  height 100%
  background pink
  .el-header 
    height 50px
    background #fff
  .el-container
    height 100%
    .el-aside
      width 240px !important
      height 100%
      ul
        height 100%
        。el-submenu .el-submenu__title
          text-align left
  
</style>