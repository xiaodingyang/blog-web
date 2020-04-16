import { LoadableImport } from "utils/utils";

export default [
  {
    path: "/index",
    name: "首页",
    icon: "home",
    component: LoadableImport(() => import("containers/home")),
  },
  {
    path: "/blog",
    name: "博客",
    icon: "book",
    component: LoadableImport(() => import("containers/blog")),
  },
  {
    path: "/resume",
    name: "简历",
    icon: "book",
    component: LoadableImport(() => import("containers/resume")),
  },
  {
    path: "/comment",
    name: "留言",
    icon: "lock",
    component: LoadableImport(() => import("containers/comment/comment")),
  },
];
