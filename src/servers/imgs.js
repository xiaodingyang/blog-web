import axios from "utils/axios";
const http = new axios()

/* 获取图片列表 */
export function getList(params) {
    return http.get('/imgs/list', params)
}
