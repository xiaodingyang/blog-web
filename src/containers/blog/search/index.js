import React, { Component } from 'react';
import TopDisplay from "@/components/topDisplay";
import BlogList from "@/components/blogLists/blogLists";
import { getBlogList } from "@/servers/blog";
import { Style } from './style'
import NoPage from "@/components/NoPage";
export class index extends Component {
    constructor(...arg) {
        super(...arg)
        this.state = {
            query: '',
            listData: []
        }
    }
    componentDidMount() {
        const query = window.location.search.slice(7);
        getBlogList().then(res => {
            const listData = res.filter(item => (item.title.toUpperCase().includes(query.toUpperCase()) || item.description.toUpperCase().includes(query.toUpperCase())))
            this.setState({ listData })
        })
        this.setState({ query });
    }
    render() {
        const { query, listData } = this.state;
        return (
            <Style>
                <div className="container">
                    <TopDisplay></TopDisplay>
                    <div className="content">
                        <h2>找到匹配 <span>{query}</span> 的结果 <span>{listData.length}</span> 条</h2>
                        {
                            listData.length > 0 ? <div className="wrap">
                                {
                                    listData.map((item, idx) => <BlogList data={item} key={idx}></BlogList>)
                                }
                            </div> : <NoPage></NoPage>
                        }
                    </div>
                </div>

            </Style>
        );
    }
}

export default index;
