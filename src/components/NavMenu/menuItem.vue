<!--
 * @module: menuItem.vue
 * @fileName: menuItem.vue
 * @Description: 菜单组件下的递归子组件
 * @Author: DuXin
 * @Date: 2019-04-15 10:00:01
 -->
<template>
  <el-submenu v-if="item.children && item.children.length >= 1" :index="item.id" :popper-append-to-body="false">
    <template slot="title">
      <svg class="icon-svg aui-sidebar__menu-icon" aria-hidden="true"><use :xlink:href="`#${item.icon}`"></use></svg>
      <span class="item_name">{{ item.name }}</span>
    </template>
    <menu-item v-for="items in item.children" :key="items.id" :item="items"></menu-item>
  </el-submenu>
  <el-menu-item v-else :index="item.id" @click="gotoRouteHandle(item.url,item.target)">
    <svg class="icon-svg aui-sidebar__menu-icon" aria-hidden="true"><use :xlink:href="`#${item.icon}`"></use></svg>
    <span class="item_name">{{ item.name }}</span>
  </el-menu-item>
</template>

<script>
import MenuItem from './menuItem'
export default {
  name: 'MenuItem',
  // props: [ 'item', 'textColor' ],
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  components: {
    MenuItem
  },
  created () {
    // console.log(this.item)
  },
  methods: {
    // 通过menuId与动态(菜单)路由进行匹配跳转至指定路由
    gotoRouteHandle (url, target) {
      if (target === '_blank') { // 跳转新url
        if (url.indexOf('ymc') >= 0) {
          let goUrl = 'http://10.20.200.175:30571/' + (url.indexOf('/ymc/airConditioningMonitoring') >= 0 ? 'air.html' : 'power.html')
          window.open(goUrl, '_blank')
        } else {
          window.open(url, '_blank')
        }
      } else {
        this.$router.push({ path: url })
      }
      // var route = window.SITE_CONFIG['dynamicMenuRoutes'].filter(item => item.meta.menuId === menuId)[0]
      // if (route) {
      //   this.$router.push({ name: route.name })
      // }
    }
  }
  // render (h) {
  //   let menuItem
  //   let iconClass = this.item.icon
  //   // let icon = this.item.icon ? <i class={['iot', iconClass]} style={{ color: this.textColor }}></i> : ''
  //   let icon = this.item.icon ? <svg class='icon-svg aui-sidebar__menu-icon' aria-hidden='true'><use href='iconClass'></use></svg> : ''
  //   let pathIndex = ''
  //   if (this.item.url) {
  //     pathIndex = this.item.url
  //   } else {
  //     pathIndex = Math.floor(Math.random() * 100000).toString()
  //   }
  //   if (!this.item.children || !this.item.children.length) {
  //     menuItem = <router-link to={this.item.url}>
  //       <el-menu-item index={pathIndex}>
  //         {icon}
  //         <span slot="title">{this.item.name}</span>
  //       </el-menu-item>
  //     </router-link>
  //     // menuItem = <el-menu-item index={this.item.path}>
  //     //   {icon}
  //     //   <span slot="title">{this.item.name}</span>
  //     // </el-menu-item>
  //   } else {
  //     // menuItem = <el-submenu
  //     //   index={Math.floor(Math.random() * 100000).toString()}>
  //     menuItem = <el-submenu
  //       index={pathIndex}>
  //       <template slot="title">
  //         {icon}
  //         <span>{this.item.name}</span>
  //       </template>
  //       {
  //         this.item.children.map((_item, index) => {
  //           return (
  //             <MenuItem
  //               key={index}
  //               item={_item}
  //               textColor={this.textColor}
  //             >
  //             </MenuItem>
  //           )
  //         })
  //       }
  //     </el-submenu>
  //   }
  //   return menuItem
  // }
}

</script>
<style lang='stylus' scoped>
.icon-svg
  width 18px
  height 18px
  color: inherit !important;
  fill: currentColor;
  margin-right: 5px;
.iot
  margin-right 5px
  width 30px
  display inline-block
  fontSize 20px
  &.iotguizeliankucebiantubiao-
    fontSize 12px
.el-menu-item.is-active
   background-color #004f96 !important
   position relative
   &:after
     content ""
     absolute(right 0 top 0)
     width 4px
     height 100%;
     background  $white
     round-corners()
a
  text-decoration none
.item_name
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
  display inline-block
  width 80%
</style>
