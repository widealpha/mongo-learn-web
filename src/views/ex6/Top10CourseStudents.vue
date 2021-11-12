<template>
  <el-col>
    <el-row>
      <el-select class="type-select" v-model="value" placeholder="请选择" @change="submit" style="padding-bottom: 20px">
        <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
        </el-option>
      </el-select>
    </el-row>
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
      <el-table-column
          prop="courseCount"
          label="选课数目">
      </el-table-column>
    </el-table>
  </el-col>
</template>

<script>
import {req} from "../../api/api";

export default {
  name: "Top10CourseStudents",
  data() {
    return {
      selectSid: '',
      loading: true,
      tableData: [],
      value: 'chooseCourseTop10Students',
      options: [
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
    },
    selectStudents() {
      req('GET', 'chooseCourseTop10Students', {'sid': this.selectSid}).then((res) => this.tableData = res)
    }
  },
  mounted() {
    this.selectStudents()
  }
}
</script>

<style scoped>

</style>