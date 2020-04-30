import React, { Component } from "react";
import Style from "./style";
import { Row, Col } from "antd";
// import "http:busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js";
export class footer extends Component {
  render() {
    return (
      <Style>
        <div className="footer">
          <div className="container">
            <div className="body">
              <div className="content">
                <div className="about">
                  <h2>关于</h2>
                  <div className="item"></div>
                </div>
                <div className="connection">
                  <h2>联系站长</h2>
                  <div className="item">QQ：18698193@qq.com</div>
                  <div className="item">WX：15680930381</div>
                </div>
                <div className="link">
                  <h2>友情链接</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom">
            <Row>
              <Col span={16} offset={4}>
                <div className="content">
                  <p id="busuanzi_container_site_pv">
                    本站访客数 <span id="busuanzi_value_site_pv"></span> 人次
                  </p>
                  <p>
                    长安归故里，故里有长安。 顾名长安与故里 蜀ICP备19041187号-1
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Style>
    );
  }
}

export default footer;
