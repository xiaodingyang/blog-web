import React, { Component } from 'react';
import { Row, Col, Icon, Tag, Input } from 'antd';
import { getBlogList } from "@/servers/blog";
import { getList } from '@/servers/blogClass'
import { TopBanner } from './style'
import { Link } from 'react-router-dom'
const { Search } = Input;
export class rightSlide extends Component {
    constructor(...arg) {
        super(...arg)
        this.state = {
            listData: [],
            tagList: [],
            newList: []
        }
    }

    componentDidMount() {

        getList().then(res => {
            this.setState({ tagList: res })
        })
        getBlogList().then(res => {
            this.setState({ newList: res })
        })


    }
    render() {
        const newBlog = this.state.newList.filter((item, idx) => idx < 3)

        return (
            <TopBanner>

                <div className="base-right-item new-blog animated fadeInRight">
                    <div className="line">最新文章</div>
                    {
                        newBlog.map((item, idx) => {
                            return <div className="blog-item" key={idx}>
                                <div className="img"><Link to={{
                                    pathname: '/blog/detail',
                                    query: { id: item.id }
                                }}><img src={item.src} alt="" /></Link></div>
                                <div className="content">
                                    <h3>{item.title}</h3>
                                    <div className="bottom">
                                        <p className="read"><Link to={{
                                            pathname: '/blog/detail',
                                            query: { id: item.id }
                                        }}>阅读全文</Link></p>
                                        <p className="time">{item.createdTime}</p>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>


                <div className="base-right-item weather animated fadeInRight delay-1s">
                    <div className="line">天气预报</div>
                    <iframe title="天气预报" scrolling="no" src="https://tianqiapi.com/api.php?style=ts&skin=pitaya&column=2" frameBorder="0" width="100%" height="230" allowtransparency="true"></iframe>
                </div>

                <div className="base-right-item tag animated fadeInRight delay-2s">
                    <div className="line">文章标签</div>
                    <div className="tag-content">
                        <Tag onClick={() => this.props.clickTag()} color="purple" style={{ cursor: 'pointer' }}>全部</Tag>
                        {
                            this.state.tagList.map((item, idx) => {
                                return <Tag
                                    key={idx}
                                    onClick={() => this.props.clickTag(item.code)}
                                    style={{ cursor: 'pointer' }}
                                    color={`rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.7)`}>{item.name}</Tag>
                            })
                        }
                    </div>
                </div>
            </TopBanner>
        );
    }
}

export default rightSlide;
