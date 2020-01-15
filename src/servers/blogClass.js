import axios from "utils/axios";
const http = new axios()

/* 获取博客列表 */
export function getList(params) {
    return http.get('/blogClass/list', params)
}

/* 新增博客 */
export function newBlogClass(params) {
    return http.post('/blogClass/new', params)
}

/* 删除博客 */
export function deleteBlogClass(params) {
    return http.post('/blogClass/delete', params)
}

/* 更新博客 */
export function updateBlogClass(params) {
    return http.post('/blogClass/update', params)
}
