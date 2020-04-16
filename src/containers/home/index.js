import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Page1Style } from "./style";
import Rain from "components/rain/rain";
export class Page1Content extends Component {
  render() {
    return (
      <Page1Style>
        <Rain bg="https://xiaodingyang-1300707163.cos.ap-chengdu.myqcloud.com/myBlog/page1.jpg"></Rain>
        <div className="body container">
          <h1 className="step animated bounceInDown">Hello, I'm Silence.</h1>
          <h2 className="step animated bounceInLeft">
            欢迎来到我的个人博客，我是一名前端工程师。
          </h2>
          <div className="btn">
            <Link to="/blog">点击进入我的博客</Link>
          </div>
        </div>
      </Page1Style>
    );
  }
}

export default Page1Content;
