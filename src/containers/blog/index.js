import React, { Component } from "react";
import BlogList from "../../components/blogLists/blogLists";
import { TopBanner } from "./style";
import RightSlide from "./rightSlide";
import { getBlogList } from "@/servers/blog";
import Swiper from "components/swiper/swiper";
import { getList as getBlogClassList } from "@/servers/blogClass";
import TopDisplay from "@/components/topDisplay";
import Loading from "@/components/loading/loading";
import { getImgUrl } from "utils/utils";

class Blog extends Component {
  constructor(...arg) {
    super(...arg);
    this.state = {
      blogData: [],
      newData: [],
      swiperImg: [],
      loading: false,
    };
  }
  componentDidMount() {
    this.getBlogList();
    getImgUrl(["swiperImg"]).then((res) => {
      this.setState({ swiperImg: res });
    });
  }
  getBlogList = (data) => {
    this.setState({ loading: true });
    if (data) {
      getBlogList(data)
        .then((res) => {
          if (res) {
            this.setBlogData(res);
            this.setState({ loading: false });
          }
        })
        .catch((err) => this.setState({ loading: false }));
    } else {
      getBlogList()
        .then((res) => {
          if (res) {
            const newData = res.filter((item, idx) => idx < 3);
            this.setBlogData(res);
            this.setState({
              newData,
              loading: false,
            });
          }
        })
        .catch((err) => this.setState({ loading: false }));
    }
  };
  clickTag = (type) => {
    this.getBlogList({ type });
  };
  //将博客数据重组为[{title: '标题, data: data}]格式
  setBlogData = (data) => {
    let blogData = [];
    getBlogClassList().then((res) => {
      res.forEach((code) => {
        let arr = [];
        data.forEach((item) => {
          if (item.type === code.code) arr.push(item);
        });
        blogData.push({
          title: code.name,
          data: arr,
        });
      });
      this.setState({ blogData });
    });
  };

  render() {
    const { swiperImg, blogData, newData, loading } = this.state;
    return (
      <TopBanner className="container">
        <TopDisplay></TopDisplay>
        <div className="base-index-page">
          <div className="base-left">
            <div
              className=" top-banner animated zoomInLeft"
              style={{
                background: "#fff",
                padding: "10px",
                borderRadius: "5px",
              }}
            >
              {swiperImg.length > 0 && <Swiper data={swiperImg}></Swiper>}
            </div>

            <div className=" blog-list" style={{ marginTop: "20px" }}>
              {blogData.map((item, idx) => {
                return (
                  <div key={idx}>
                    {item.data.length > 0 && (
                      <div className="blog-list-item">
                        <div className="title">{item.title}</div>
                        <div className="wrap">
                          {item.data.map((item, idx) => (
                            <BlogList key={idx} data={item}></BlogList>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="base-right">
            <RightSlide newBlog={newData} clickTag={this.clickTag}></RightSlide>
          </div>
        </div>
        <Loading loading={loading}></Loading>
      </TopBanner>
    );
  }
}

export default Blog;
