import React, { Component } from 'react';
import { Style } from "./style";
import { getBlogList } from "@/servers/blog";
import { Icon, } from 'antd';
import Editor from '@/components/Editor'
import TopDisplay from "@/components/topDisplay";
import { Scrollbars } from 'react-custom-scrollbars';
export class index extends Component {
    constructor(...arg) {
        super(...arg)
        this.state = {
            detailData: [],
            id: '',
            titleObj: []
        }
    }
    componentDidMount() {
        if (this.props.location.query) window.sessionStorage.setItem('detail', JSON.stringify(this.props.location.query))
        const id = JSON.parse(window.sessionStorage.getItem('detail'))
        getBlogList(id).then(res => {
            this.setState({ detailData: res[0] }, () => {
                const topBar = document.querySelector('.for-toolbar')
                if (topBar) topBar.style.display = 'none'
                const id = document.querySelectorAll('[id]')
                let titleObj = [];
                id.forEach(item => {
                    if (item.tagName === 'H2' || item.tagName === 'H3' || item.tagName === 'H4') {
                        titleObj.push({
                            text: item.innerText,
                            url: item.id,
                            tagName: item.tagName,
                        })
                    }
                })
                this.setState({ titleObj });
            })
        })
    }
    scrollToAnchor(id) {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    }
    render() {
        const { detailData, titleObj } = this.state
        return (
            <Style>
                <div className="body">

                    <div className="blog-detail container">
                        <TopDisplay></TopDisplay>
                        <div style={{ display: 'flex', margin: '20px 0' }}>
                            <div className="detail-content base-left-item">
                                <Scrollbars>
                                    <div className="content" > <Editor value={detailData.content} preview={true} /> </div>
                                </Scrollbars>
                            </div>
                            <div className="base-right-item catalog">
                                <Scrollbars>
                                    <div className="line">文章目录</div>
                                    <div className="catalog-content">
                                        {
                                            titleObj.map((item, idx) => {
                                                if (item.tagName === 'H2') return <h2 key={idx}><a href="javascript:;" onClick={() => this.scrollToAnchor(item.url)}>{item.text}</a></h2>
                                                if (item.tagName === 'H3') return <h3 key={idx}><a href="javascript:;" onClick={() => this.scrollToAnchor(item.url)}>{item.text}</a></h3>
                                                if (item.tagName === 'H4') return <h4 key={idx}><a href="javascript:;" onClick={() => this.scrollToAnchor(item.url)}>{item.text}</a></h4>
                                                return ''
                                            })
                                        }

                                    </div>
                                </Scrollbars>
                            </div>
                        </div>


                    </div>
                </div>
            </Style>
        );
    }
}

export default index;
