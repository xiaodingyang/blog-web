import axios from "utils/axios";
const http = new axios()
/* 验证码 */
export function getCaptcha(params) {
    return http.get('/user/captcha', params)
}

/* 登录 */
export function login(params) {
    return http.post('/user/login', params)
}

/* 获取账户列表 */
export function getUserList(params) {
    return http.get('/user/list', params)
}

/* 新增用户 */
export function newUser(params) {
    return http.post('/user/new', params)
}

/* 删除用户 */
export function deleteUser(params) {
    return http.post('/user/delete', params)
}

/* 编辑用户 */
export function updateUser(params) {
    return http.post('/user/update', params)
}