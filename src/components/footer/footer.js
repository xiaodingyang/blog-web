import React, { Component } from 'react';
import Style from "./style";
import { Row, Col } from "antd";
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
                                    <div className="item">微信：15680930381</div>
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
                                    <p id="busuanzi_container_site_uv">本站访客数 <span id="busuanzi_value_site_uv"></span> 人次</p>
                                    <p>©Rieko © 2018 ,2019w All Rights Reserved.2019网 - 轻阅读 , 看见好时光 苏ICP备17044739号-2</p>
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