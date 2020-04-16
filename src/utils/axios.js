/******************************************/
/************** 封装axios请求 **************/
/******************************************/
import axios from "axios";
import { message } from "antd";
import other from "@/redux/action/other";
import { store } from "../index";
// 请求超时
axios.defaults.timeout = 20000;
axios.defaults.withCredentials = true; // 配置允许跨域携带cookie
axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest"; // 标识这是一个 ajax 请求
axios.defaults.baseURL =
  process.env.NODE_ENV !== "development"
    ? "http://xiaodingyang.com:8000/api"
    : "http://localhost:8001/api";
// request拦截器
axios.interceptors.request.use((config) => {
  return config;
});

// response 拦截器
axios.interceptors.response.use((response) => {
  if (response.status === 200) {
    if (response.data.status && response.data.status !== 200) {
      message.error(response.data.message);
      store.dispatch(other.setLoading(false));
      return null;
    }
    return response.data.data || response.data;
  } else {
    // 非200请求抱错
    message.error(response.data.msg || "服务异常");
    store.dispatch(other.setLoading(false));
    return [];
  }
});

// 请求函数的封装
export default class http {
  get(url, params) {
    let data = setParams(params);
    return axios
      .get(url, { params: data })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        message.error(error.message);
        throw error;
      });
  }

  post(url, params) {
    let data = setParams(params);
    return axios
      .post(url, data)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        message.error(error.message);
        throw error;
      });
  }
}
function setParams(obj) {
  let data = {};
  for (const key in obj) {
    if (obj[key] || obj[key] === 0) {
      data[key] = obj[key];
    }
  }
  return data;
}
