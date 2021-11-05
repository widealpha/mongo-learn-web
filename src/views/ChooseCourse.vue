<template>
  <el-col>
    <el-dialog title="修改选课信息" :visible="dialogShow" @close="dialogShow = false">
      <el-input placeholder="课程号" v-model="editData['cid']" :disabled="true">
        <template slot="prepend">课程号</template>
      </el-input>
      <div style="height: 10px"></div>
      <el-input placeholder="课程名" v-model="editData['name']" :disabled="true">
        <template slot="prepend">课程名</template>
      </el-input>
      <div style="height: 10px"></div>
      <el-input placeholder="前置课程号" v-model="editData['fcid']" :disabled="true">
        <template slot="prepend">前置课程号</template>
      </el-input>
      <div style="height: 10px"></div>
      <el-input placeholder="学分" v-model="editData['credit']" :disabled="true">
        <template slot="prepend">学分</template>
      </el-input>
      <div style="height: 10px"></div>
      <el-input placeholder="成绩" v-model="editData['score']">
        <template slot="prepend">成绩</template>
      </el-input>
      <div style="height: 10px"></div>
      <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpdate">修改</el-button>
    </el-dialog>
    <el-input v-model="selectSid" placeholder="输入要查询的学号">
      <template slot="prepend">学号</template>
      <el-button slot="append" icon="el-icon-search" @click="selectChooseCourses"></el-button>
    </el-input>
    <el-input v-model="cid" placeholder="课程号">
      <template slot="prepend">课程号</template>
      <el-button slot="append" icon="el-icon-upload" @click="chooseCourse"></el-button>
    </el-input>
    <el-table
        :data="tableData"
        height="250"
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
          prop="score"
          label="成绩">
      </el-table-column>
      <el-table-column
          fixed="right"
          label="操作"
          width="100">
        <template slot-scope="scope">
          <el-button @click="deleteStudentCourse(scope.row)" type="text" size="small">删除</el-button>
          <el-button @click="edit(scope.row)" type="text" size="small">编辑</el-button>
        </template>
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
      dialogShow: false,
      selectSid: '200800020101',
      cid: '300001',
      editData: {},
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
    selectChooseCourses() {
      req('POST', 'studentChooseCourse', {'sid': this.selectSid}).then((res) => this.tableData = res)
    },
    chooseCourse() {
      req('POST', 'studentChooseCourse', {
        'sid': this.selectSid,
        'cid': this.cid
      }).then(() => this.selectChooseCourses())
    },
    edit(data) {
      this.editData = data
      this.dialogShow = true
    },
    submitUpdate() {
      req('POST', 'updateScore', {
        'sid': this.selectSid,
        'cid': this.editData['cid'],
        'score': this.editData['score']
      }).then(() => this.selectChooseCourses())
    },
    deleteStudentCourse(data) {
      req('POST', 'deleteChooseCourse', {
        'sid': this.selectSid,
        'cid': data['cid']
      }).then(() => this.selectChooseCourses())
    }
  },
  mounted() {
    this.submit()
  }
}
</script>

<style scoped>

</style>