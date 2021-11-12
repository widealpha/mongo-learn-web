<template>
  <el-container>
    <el-col>
      <el-upload
          ref="upload"
          class="upload-excel"
          name="excel"
          :auto-upload="false"
          :action="submitLink()"
          :on-success="successUpload"
          :on-error="failedUpload"
          :on-progress="inUpload"
          drag
          multiple>
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">只能上传xls/xlsx文件，且不超过500kb</div>
      </el-upload>
      <el-select class="type-select" v-model="value" placeholder="请选择">
        <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
        </el-option>
      </el-select>
      <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
    </el-col>
  </el-container>
</template>

<script>

export default {
  name: "UploadExcel",
  data() {
    return {
      submitUrl: 'http://localhost:8080/uploadStudentExcel',
      options: [{
        value: 'student',
        label: '学生信息'
      }, {
        value: 'teacher',
        label: '教师信息'
      }, {
        value: 'course',
        label: '课程信息'
      }, {
        value: 'student_course',
        label: '学生选课'
      }, {
        value: 'teacher_course',
        label: '教师教课'
      }],
      value: 'student'
    }
  },
  methods: {
    submitUpload() {
      console.log(this.value)
      switch (this.value) {
        case "student":
          this.submitUrl = 'http://localhost:8080/uploadStudentExcel'
          break
        case "teacher":
          this.submitUrl = 'http://localhost:8080/uploadTeacherExcel'
          break
        case "course":
          this.submitUrl = 'http://localhost:8080/uploadCourseExcel'
          break
        case "student_course":
          this.submitUrl = 'http://localhost:8080/uploadStudentCourseExcel'
          break
        case "teacher_course":
          this.submitUrl = 'http://localhost:8080/uploadTeacherCourseExcel'
          break
      }
      this.$refs.upload.submit()
    },
    submitLink(){
      return this.submitUrl
    },
    successUpload() {
      this.$message.success('上传成功')
    },
    failedUpload() {
      this.$message.error('上传失败')
    },
    inUpload() {
      this.$message.info('正在上传')
    }
  }
}
</script>

<style scoped>
.type-select {
  margin: 10px
}
</style>