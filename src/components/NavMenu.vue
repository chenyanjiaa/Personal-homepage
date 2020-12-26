<template>
  <div class="navMenu">
    <el-menu
      style="height:100%"
      class="el-menu-vertical-demo"
      background-color="#001529"
      text-color="#ccc"
      :collapse="isCollapse"
      :default-active="active"
      router
      active-text-color="#fff">
      <div style="position: absolute;bottom: 0;width: 100%;border-top: 1px solid #666;cursor:pointer;z-index:1;background: #001529;">
        <i :class="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'" style="color:#909399; height:56px; width:100%; line-height:56px; font-size:20px;margin-left:20px" @click="foldBtn"></i>
      </div>
      <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
        <i class="el-icon-setting"></i>
        <span slot="title">{{ item.navItem }}</span>
      </el-menu-item>
      <!-- <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item> -->
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'NavMenu',
  data() {
    return {
      isCollapse: false,
      active: '/',
      navList:[
        {name:'/',navItem:'首页'},
        {name:'/life',navItem:'日常生活'},
        {name:'/user',navItem:'新的用户'},
        {name:'/personalCenter',navItem:'个人中心'},
        {name:'/manageCenter',navItem:'管理员中心'},
      ]
    }
  },
  watch: {
    // $route(newVal, oldVal) {
    //   let num = null
    //   this.navList.forEach((item, index) => {
    //     if(item.name === newVal.path) {
    //       num = index
    //     }
    //   })
    //   document.querySelectorAll('.el-menu-item')[num].setAttribute("style","background-color: #1890ff !important")
    //   console.log(newVal.path, num, document.querySelectorAll('.el-menu-item')[num])
    // }
  },
  methods: {
    foldBtn() {
      this.isCollapse ? this.isCollapse = false : this.isCollapse = true
    }
  }
}
</script>

<style scoped>
  .navMenu {
    background: #545c64;
    margin-right: 5px;
  }
  .navMenu li:hover {
    color: #fff !important;
    background: #1890ff !important;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
  }
  .is-active {
    background: #1890ff !important;
  }
</style>