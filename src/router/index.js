// 导入组件
import Vue from 'vue';
import Router from 'vue-router';
// 首页
import Main from '../views/Main';
/**
 * 基础菜单
 */
// 课程管理
import StudentList from '../views/StudentList';
import Login from "../views/Login";
import TeacherList from "../views/TeacherList";
import CourseList from "../views/CourseList";
import UploadExcel from "../views/UploadExcel";
import ChooseCourse from "../views/ChooseCourse";

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
            }
            ]
        }]
})
