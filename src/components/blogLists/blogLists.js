import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import { Style } from './style';
const arr = ['fadeInLeft', 'fadeInLeftBig', 'fadeInRight', 'fadeInRightBig', 'fadeInUp', 'fadeInUpBig', 'flipInX', 'flipInY', 'lightSpeedIn',
    'rotateIn', 'rotateInUpLeft', 'rotateIn', 'rotateInDownLeft', 'rotateInDownRight', 'rotateInUpRight', 'jackInTheBox',]
export class blogLists extends Component {
    render() {
        const { data } = this.props
        const count = Math.floor(Math.random() * arr.length)
        const to = {
            pathname: '/blog/detail',
            query: { id: data.id }
        }
        return (
            <Style>
                <div className={`list-item animated ${arr[count]}`}>
                    <div className="create-time">{data.createdTime}</div>
                    <div className="img"><Link
                        to={to}><img src={data.src} alt="" /></Link></div>
                    <h3><Link to={to}>{data.title}</Link></h3>
                    <div className="content">{data.description}</div>
                    <p className="read"><Link
                        to={to}>阅读全文 ></Link></p>
                    {
                        // <div className="bottom">
                        //     <span><Icon type="eye" theme="twoTone" twoToneColor="#eb2f96" /><span id="busuanzi_value_page_pv"></span>浏览</span>
                        //     <span><Icon type="highlight" /> {data.comments} 评论</span>
                        //     <span><Icon type="heart" theme="twoTone" twoToneColor="#eb2f96" /> {data.likes} 喜欢</span>
                        // </div>
                    }
                </div>
            </Style>
        );
    }
}

export default blogLists;
