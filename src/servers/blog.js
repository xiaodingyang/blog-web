import axios from "utils/axios";
const http = new axios();

/* 获取博客列表 */
export function getBlogList(params) {
  return http.get("/blog/list", params);
}
