import axios from "utils/axios";
const http = new axios()

/* 获取博客列表 */
export function getBlogList(params) {
    return http.get('/blog/list', params)
}

/* 新增博客 */
export function newBlog(params) {
    return http.post('/blog/new', params)
}

/* 删除博客 */
export function deleteBlog(params) {
    return http.post('/blog/delete', params)
}

/* 更新博客 */
export function updateBlog(params) {
    return http.post('/blog/update', params)
}


