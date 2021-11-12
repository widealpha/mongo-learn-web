<template>
  <el-col>
    <el-dialog title="添加学生信息" :visible="dialogShow" @close="dialogShow = false">
      <el-input placeholder="学号" v-model="editData['sid']">
        <template slot="prepend">教师号</template>
      </el-input>
      <div style="height: 10px"></div>
      <el-input placeholder="教师名" v-model="editData['name']">
        <template slot="prepend">教师名</template>
      </el-input>
      <div style="height: 10px"></div>
      <el-input placeholder="年龄" v-model="editData['age']">
        <template slot="prepend">年龄</template>
      </el-input>
      <div style="height: 10px"></div>
      <el-input placeholder="性别" v-model="editData['sex']">
        <template slot="prepend">性别</template>
      </el-input>
      <div style="height: 10px"></div>
      <el-input placeholder="生日" v-model="editData['birthday']">
        <template slot="prepend">生日</template>
      </el-input>
      <div style="height: 10px"></div>
      <el-input placeholder="学院" v-model="editData['dname']">
        <template slot="prepend">学院</template>
      </el-input>
      <div style="height: 10px"></div>
      <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpdate">提交添加</el-button>
    </el-dialog>
    <el-select class="type-select" v-model="value" placeholder="请选择" @change="submit" style="padding-bottom: 20px">
      <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
      </el-option>
    </el-select>
    <el-button style="margin: 10px;" type="success" @click="edit">添加</el-button>
    <el-table
        :data="tableData"
        loading="loading"
        border
        style="width: 100%">
      <el-table-column
          prop="sid"
          label="学号"
          width="180">
      </el-table-column>
      <el-table-column
          prop="name"
          label="姓名"
          width="180">
      </el-table-column>
      <el-table-column
          prop="sex"
          label="性别">
      </el-table-column>
      <el-table-column
          prop="age"
          label="年龄">
      </el-table-column>
      <el-table-column
          prop="class"
          label="班级">
      </el-table-column>
      <el-table-column
          prop="dname"
          label="学院">
      </el-table-column>
      <el-table-column
          prop="birthday"
          label="生日">
      </el-table-column>
    </el-table>
  </el-col>
</template>

<script>
import {req, studentList} from "../../api/api";

export default {
  name: "AddStudent",
  data() {
    return {
      editData: {},
      selectSid: '',
      loading: true,
      tableData: [],
      value: 'allStudents',
      dialogShow: false,
      options: [
        {
          value: "allStudents",
          label: "全部学生"
        },
        {
          value: "studentsYounger20",
          label: "年龄小于20岁的所有学生"
        },
        {
          value: "top10Students",
          label: "平均成绩排名前10的学生"
        },
        {
          value: "chooseCourseTop10Students",
          label: "选课数量排名前10的学生"
        },
      ]
    }
  },
  methods: {
    submit() {
      req('GET', this.value).then((res) => this.tableData = res)
      this.editData = {}
    },
    edit(data) {
      this.dialogShow = true
      this.editData = data
    },
    submitUpdate() {
      this.dialogShow = false
      req('POST', '/addStudent',this.editData).then(() => this.submit())
    }
  },
  mounted() {
    studentList().then((res) => {
      this.tableData = res
    })
  }
}
</script>

<style scoped>

</style>