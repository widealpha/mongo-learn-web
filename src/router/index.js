// 导入组件
import Vue from 'vue';
import Router from 'vue-router';
// 首页
import Main from '../views/Main';
/**
 * 基础菜单
 */
// 课程管理
import StudentList from '../views/ex4/StudentList';
import Login from "../views/Login";
import TeacherList from "../views/ex4/TeacherList";
import CourseList from "../views/ex4/CourseList";
import UploadExcel from "../views/ex3/UploadExcel";
import ChooseCourse from "../views/ex5/ChooseCourse";
import AddCourse from "../views/ex3/AddCourse"
import AddTeacher from "../views/ex3/AddTeacher"
import AddStudent from "../views/ex3/AddStudent"
import Top10Students from "../views/ex6/Top10Students";
import Top10CourseStudents from "../views/ex6/Top10CourseStudents";

// 启用路由
Vue.use(Router);

// 导出路由
export default new Router({
    mode: "hash",
    routes: [
        {
            path: '/',
            name: '登录',
            component: Login,
            iconCls: 'el-icon-tickets',
        }, {
            path: '/index',
            name: '首页',
            component: Main,
            iconCls: 'el-icon-tickets',
            children: [{
                path: 'studentList',
                name: '学生列表',
                component: StudentList,
            }, {
                path: 'teacherList',
                name: '教师列表',
                component: TeacherList,
            }, {
                path: 'courseList',
                name: '课程列表',
                component: CourseList,
            }, {
                path: 'uploadExcel',
                name: '上传信息',
                component: UploadExcel,
            }, {
                path: 'chooseCourse',
                name: '上传信息',
                component: ChooseCourse,
            }, {
                path: 'addCourse',
                name: '添加课程',
                component: AddCourse,
            }, {
                path: 'addTeacher',
                name: '添加教师',
                component: AddTeacher,
            }, {
                path: 'addStudent',
                name: '添加学生',
                component: AddStudent,
            }, {
                path: 'top10Students',
                name: '添加学生',
                component: Top10Students,
            }, {
                path: 'top10CourseStudents',
                name: '添加学生',
                component: Top10CourseStudents,
            }
            ]
        }]
})
