import axios from "axios";

export const req = (method, url, params) => {
    console.log(params)
    return axios({
        baseURL: 'http://localhost:8080',
        method: method,
        url: url,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: params,
        traditional: true,
        transformRequest: [
            function (data) {
                let ret = ''
                for (let it in data) {
                    ret +=
                        encodeURIComponent(it) +
                        '=' +
                        encodeURIComponent(data[it]) +
                        '&'
                }
                return ret
            }
        ]
    }).then(res => res.data);
};

export const studentList = () => {
    return req('GET', '/allStudents')
}

export const uploadStudentExcel = (params) => {
    return req('POST', '/uploadStudentExcel', params)
}

export const uploadTeacherExcel = (params) => {
    return req('POST', '/uploadTeacherExcel', params)
}

export const uploadCourseExcel = (params) => {
    return req('POST', '/uploadCourseExcel', params)
}

export const uploadStudentCourseExcel = (params) => {
    return req('POST', '/uploadStudentCourseExcel', params)
}

export const uploadTeacherCourseExcel = (params) => {
    return req('POST', '/uploadTeacherCourseExcel', params)
}