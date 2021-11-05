<template>
  <el-container class="index-con">
    <el-aside class="el-left-side">
      <el-menu
          default-active="1-1" class="el-menu-vertical"
          @select="selectIndex"
          :unique-opened=true
          :collapse=false
          active-text-color="dodgerblue">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-user" v-if="chooseIndex === '1'" style="color: dodgerblue"></i>
            <i class="el-icon-user" v-else></i>
            <span slot="title">展示信息</span>
          </template>
          <el-menu-item index="studentList">学生</el-menu-item>
          <el-menu-item index="teacherList">教师信息</el-menu-item>
          <el-menu-item index="courseList">课程信息</el-menu-item>
          <el-menu-item index="chooseCourse">选课管理</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-menu" v-if="chooseIndex === '2'" style="color: dodgerblue"></i>
            <i class="el-icon-menu" v-else></i>
            <span slot="title">实验二</span>
          </template>
          <el-menu-item index="uploadExcel">上传excel数据</el-menu-item>
          <el-menu-item index="2-2">添加信息</el-menu-item>
          <el-menu-item index="2-3">已修课程</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-data-line" v-if="chooseIndex === '3'" style="color: dodgerblue"></i>
            <i class="el-icon-data-line" v-else></i>
            <span slot="title">实验三</span>
          </template>
          <el-menu-item index="3-1">修改信息</el-menu-item>
          <el-menu-item index="3-2">选课成绩</el-menu-item>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-document" v-if="chooseIndex === '4'" style="color: dodgerblue"></i>
            <i class="el-icon-document" v-else></i>
            <span slot="title">实验四</span>
          </template>
          <el-menu-item index="4-2">奖项查询</el-menu-item>
          <el-menu-item index="4-3">惩罚查询</el-menu-item>
          <el-menu-item index="4-1">实践成果</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-container class="main-con">
      <el-main clss="index-main">
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>

export default {
  name: 'Main',
  data() {
    return {
      isCollapse: false,
      chooseIndex: '1'
    }
  },
  // 注册组件
  components: {},
  methods: {
    selectIndex(index, indexPath) {
      this.chooseIndex = indexPath[0]
      console.log(indexPath)
      this.$router.push('/index/' + indexPath[1]).catch(() => {
      });
    },
  },
}
</script>
<style>
.index-con {
  height: 100%;
  width: 100%;
  box-sizing: border-box;
}

.el-menu-vertical {
  width: 200px;
  text-align: left;
}

.el-left-side {
  width: auto !important;
}
</style>
