import React, { Component } from 'react';
import BlogList from '../../components/blogLists/blogLists'
import { TopBanner } from './style'
import RightSlide from './rightSlide'
import { getBlogList } from "@/servers/blog";
import Swiper from 'components/swiper/swiper'
import { getList } from "@/servers/imgs";
import { getList as getBlogClassList } from "@/servers/blogClass";
import TopDisplay from "@/components/topDisplay";

class Blog extends Component {
    constructor(...arg) {
        super(...arg)
        this.state = {
            listData: [],
            swiperImg: [],
            originData: []
        }
    }
    componentDidMount() {
        getList().then(res => {
            this.setState({
                swiperImg: res[0].swiperImg.map(item => {
                    return {
                        src: item
                    }
                }),
            })
        })
        const listData = window.sessionStorage.getItem('blogList')
        listData ? this.setState({ listData: JSON.parse(listData), originData: JSON.parse(listData) }) : this.getBlogList()
    }
    getBlogList = (data) => {
        let listData = []
        getBlogClassList().then(res => {
            if (res) {
                res.forEach(item => {
                    getBlogList({ type: item.code }).then(res => {
                        listData.push({
                            data: res,
                            title: item.name,
                            type: item.code
                        })
                        window.sessionStorage.setItem('blogList', JSON.stringify(listData))
                        this.setState({ listData, originData: listData })
                    });
                })
            }
        })

    }
    clickTag = (type) => {
        const listData = type ? this.state.originData.filter(item => type === item.type) : this.state.originData
        this.setState({ listData })
    }

    render() {
        const { swiperImg, listData, originData } = this.state

        return (
            <TopBanner className="container">
                <TopDisplay></TopDisplay>
                <div className="base-index-page">
                    <div className="base-left">
                        <div className=" top-banner animated zoomInLeft" style={{ background: '#fff', padding: '10px', borderRadius: '5px' }}>
                            {swiperImg.length > 0 && <Swiper data={swiperImg} ></Swiper>}
                        </div>

                        <div className=" blog-list" style={{ marginTop: '20px' }}>
                            {
                                listData.map((item, idx) => item.data.length > 0 && <div className="blog-list-item" key={idx}>
                                    <div className="title">{item.title}</div>
                                    <div className="wrap">
                                        {item.data.map((data, idx) => <BlogList key={idx} data={data}></BlogList>)}
                                    </div>
                                </div>)
                            }
                        </div>
                    </div>
                    <div className="base-right"><RightSlide newBlog={originData} clickTag={this.clickTag}></RightSlide></div>
                </div>
            </TopBanner>
        );
    }
}

export default Blog;
