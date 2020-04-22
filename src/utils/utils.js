import Cookies from "js-cookie";
import Loadable from "react-loadable";
import Loading from "components/loading/loading";
import React from "react";
import { getList } from "@/servers/imgs";

/* 获取 userInfo 列表 */
export function getUserInfo(obj) {
  return Cookies.get("userInfo") && JSON.parse(Cookies.get("userInfo"));
}

/* 解析图片 */
export async function getImgUrl(imgKeyList = []) {
  let img = [];
  await getList().then((res) => {
    if (res) {
      res.forEach((item) => {
        imgKeyList.forEach((key) => {
          if (item.imgKey === key && imgKeyList.length === 1) {
            img = item.imgList.map((item) => item.url);
          }
          if (item.imgKey === key && imgKeyList.length > 1) {
            img.push({
              key,
              url: item.imgList.map((item) => item.url),
            });
          }
        });
      });
    }
  });
  console.log("img", img);
  return img;
}

//过场组件默认采用通用的，若传入了loading，则采用传入的过场组件
export function LoadableImport(loader) {
  return Loadable({
    loader,
    loading: () => <Loading></Loading>,
  });
}
