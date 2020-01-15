import React, { Component } from 'react';
import { Style } from "./style";
import { Input } from 'antd'
const { Search } = Input;
export class index extends Component {
    render() {
        return (
            <Style>
                <div className="header">
                    <h2 className=" animated bounceInDown delay-3s">Hi，欢迎你 </h2>
                    <div className="line  animated swing delay-2s"></div>
                    <div className="text  animated bounceInDown delay-1s">海到尽头天作岸，山登绝顶我为峰。</div>
                    <div className=" search animated fadeInRight">
                        <Search
                            placeholder="想了解什么？"
                            enterButton="Let's Go"
                            onSearch={value => {
                                window.location.href = '/blog/search?value=' + value;
                            }}
                        />
                    </div>
                </div>

            </Style>
        );
    }
}

export default index;
