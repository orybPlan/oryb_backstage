<!--
 * @module: mainPage
 * @fileName: aside.vue
 * @Description: 导航栏组件
 * @Author: DuXin
 * @Date: 2019-04-09 16:52:28
 -->
<template>
 <div>
   <el-menu
      class="el-menu-vertical"
      :background-color="backgroundColor"
      :text-color="textColor"
      :active-text-color="activeTextColor"
      :default-active="defaultActive"
      :collapse="collapse"
      @select="selectHandler"
      @open="openHandler"
      @close="closeHandler"
      >
      <template  v-for="(item , index ) in navData" >
        <menuItem :key='index' :item='item' :textColor='textColor'></menuItem>
      </template>
    </el-menu>
 </div>
</template>

<script>
import menuItem from './menuItem'
export default {
  props: {
    navData: {
      type: Array,
      required: true
    },
    backgroundColor: {
      type: String,
      default: '#005BAC'
    },
    textColor: {
      type: String,
      default: '#D9D9D9'
    },
    defaultActive: {
      type: String,
      default: '1'
    },
    activeTextColor: {
      type: String,
      default: '#FFF'
    },
    defaultOpeneds: {
      type: Array
    },
    collapse: {
      type: Boolean,
      default: false
    },
    uniqueOpened: {
      type: Boolean
    }
  },
  data () {
    return {
    }
  },

  components: {
    menuItem
  },

  computed: {},

  mounted () {},

  methods: {
    selectHandler (index, indexPath) {
      this.$emit('select', index, indexPath)
    },
    openHandler (index, indexPath) {
      this.$emit('open', index, indexPath)
    },
    closeHandler (index, indexPath) {
      this.$emit('close', index, indexPath)
    }
  }
}

</script>
<style scoped>
a{
  text-decoration:none
}
.el-menu{
  border-right: solid 1px transparent !important;
}
.el-menu-vertical:not(.el-menu--collapse) {
  width: 252px;
}
.el-menu-vertical >>> .el-submenu__title i {
  color: #fff;
  font-weight: 600
}

.el-menu-vertical >>> .el-menu-item,
.el-menu-vertical >>> .el-submenu__title {
  height: 56px;
  line-height: 56px;
  font-size:15px
}

.el-menu-vertical>>> .el-submenu__title,
.el-menu-vertical > .el-menu-item {
    font-size: 16px;
    padding: 0 20px;
}
</style>
