<template>
  <el-col>
    <el-select class="type-select" v-model="value" placeholder="请选择" @change="submit" style="padding-bottom: 20px">
      <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
      </el-option>
    </el-select>
    <el-table
        :data="tableData"
        border
        style="width: 100%">
      <el-table-column
          prop="cid"
          label="课程号"
          width="180">
      </el-table-column>
      <el-table-column
          prop="fcid"
          label="前置课程号"
          width="180">
      </el-table-column>
      <el-table-column
          prop="name"
          label="课程名">
      </el-table-column>
      <el-table-column
          prop="credit"
          label="学分">
      </el-table-column>
      <el-table-column
          prop="maxScore"
          label="最高分">
      </el-table-column>
      <el-table-column
          prop="maxScoreStudentName"
          label="最高分姓名">
      </el-table-column>
    </el-table>
  </el-col>
</template>

<script>
import {req} from "../api/api";

export default {
  name: "CourseList",
  data() {
    return {
      value: 'allCourses',
      options: [
        {
          value: "allCourses",
          label: "全部课程"
        },
        {
          value: "findCourseWithFcid",
          label: "先行课号为“300001”的课程名"
        },
        {
          value: "courseChooseCountAndAvgScore",
          label: "每门课程的选修人数和平均成绩"
        }, {
          value: "courseMaxScoreWithStudentName",
          label: "求每门课程最高成绩以及最高成绩对应的学生姓名"
        }
      ],
      tableData: []
    }
  },
  methods: {
    submit() {
      req('GET', this.value).then((res) => {
        this.tableData = res
      })
    },
  },
  mounted() {
    this.submit()
  }
}
</script>

<style scoped>

</style>