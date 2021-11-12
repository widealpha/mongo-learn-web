<template>
  <el-col>
    <el-dialog title="添加教师信息" :visible="dialogShow" @close="dialogShow = false">
      <el-input placeholder="教师号" v-model="editData['tid']">
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
        border
        style="width: 100%">
      <el-table-column
          prop="tid"
          label="教师号"
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
          prop="dname"
          label="学院">
      </el-table-column>
    </el-table>
  </el-col>
</template>

<script>
import {req} from "../../api/api";

export default {
  name: "AddTeacher",
  data() {
    return {
      dialogShow: false,
      editData: {},
      value: 'allTeachers',
      options: [
        {
          value: "allTeachers",
          label: "全部教师"
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
      console.log(data)
    },
    submitUpdate() {
      this.dialogShow = false
      req('POST', '/addTeacher',this.editData).then(() => this.submit())
    }
  },
  mounted() {
    this.submit()
  }
}
</script>

<style scoped>

</style>