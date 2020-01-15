import axios from "utils/axios";
const http = new axios()

/* 获取简历列表 */
export function getResumeList() {
    return http.get('https://www.easy-mock.com/mock/5ddf7df87605f1121decf2c9/myBlog/')
}