import axios from "utils/axios";
const http = new axios();

/* 获取简历列表 */
export function getResumeList() {
  return http.get("/resume/base/list");
}
/* 项目经验列表 */
export function getExperienceList() {
  return http.get("/resume/experience/list");
}
