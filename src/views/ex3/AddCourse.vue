<template>
  <el-col style="height: 100%">
    <el-dialog title="添加课程信息" :visible="dialogShow" @close="dialogShow = false">
      <el-input placeholder="课程号" v-model="editData['cid']">
        <template slot="prepend">课程号</template>
      </el-input>
      <div style="height: 10px"></div>
      <el-input placeholder="课程名" v-model="editData['name']">
        <template slot="prepend">课程名</template>
      </el-input>
      <div style="height: 10px"></div>
      <el-input placeholder="前置课程号" v-model="editData['fcid']">
        <template slot="prepend">前置课程号</template>
      </el-input>
      <div style="height: 10px"></div>
      <el-input placeholder="学分" v-model="editData['credit']">
        <template slot="prepend">学分</template>
      </el-input>
      <div style="height: 10px"></div>
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
        border
        style="width: 100%;height:auto">
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
    </el-table>
  </el-col>
</template>

<script>
import {req} from "../../api/api";

export default {
  name: "AddCourse",
  data() {
    return {
      value: 'allCourses',
      dialogShow: false,
      editData: {},
      options: [
        {
          value: "allCourses",
          label: "全部课程"
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
      this.editData = {}
    },
    edit(data) {
      this.dialogShow = true
      this.editData = data
    },
    submitUpdate() {
      this.dialogShow = false
      req('POST', '/addCourse', this.editData).then(() => this.submit())
    }
  },
  mounted() {
    this.submit()
  }
}
</script>

<style scoped>

</style>