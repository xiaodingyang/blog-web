import React, { Component } from "react";
import { Style } from "./style";
import { getResumeList, getExperienceList } from "../../servers/resume";
import { getList } from "@/servers/imgs";
import InnerHtml from "@/components/innerHtml";
import { getImgUrl } from "utils/utils";
import Loading from "@/components/loading/loading";

export class index extends Component {
  constructor(...arg) {
    super();
    this.state = {
      jsonList: {
        aboutMe: [],
        jobWant: [],
        schoolList: [],
        skillList: [],
        jobList: [],
      },
      experienceList: [],
      headImg: "",
      qqImg: "",
      wxImg: "",
      loading: false,
    };
  }
  componentDidMount() {
    this.getList();
    this.getResumeList();
    this.getExperienceList();
  }

  getList = () => {
    getImgUrl(["headImg", "qqImg", "wxImg"]).then((res) => {
      let headImg = "";
      let qqImg = "";
      let wxImg = "";
      res.forEach((item) => {
        if (item.key === "headImg") headImg = item.url[0];
        if (item.key === "qqImg") qqImg = item.url[0];
        if (item.key === "wxImg") wxImg = item.url[0];
      });
      this.setState({
        headImg,
        qqImg,
        wxImg,
      });
    });
  };
  getResumeList = () => {
    this.setState({ loading: false });
    getResumeList()
      .then((res) => {
        if (res) {
          const jsonList = {
            aboutMe: res[0].aboutMe,
            jobWant: [
              { label: "期望职业：", value: res[0].expectedJob },
              { label: "工作地区：", value: res[0].expectedAddress },
              { label: "期望月薪：", value: res[0].expectedSalary },
              { label: "目前状态：", value: res[0].currentStatus },
            ],
            schoolList: [
              { label: "校名：", value: res[0].schoolName },
              { label: "性质：", value: res[0].schoolNature },
              { label: "荣誉：", value: res[0].schoolHonou },
              { label: "经验：", value: res[0].jobExperience },
            ],
            skillList: res[0].skillList,
          };
          this.setState({ jsonList, loading: false });
        }
      })
      .catch((err) => this.setState({ loading: false }));
  };
  getExperienceList = () => {
    this.setState({ loading: true });
    getExperienceList()
      .then((res) => {
        if (res) this.setState({ experienceList: res, loading: false });
      })
      .catch((err) => this.setState({ loading: false }));
  };
  render() {
    const {
      jsonList,
      headImg,
      qqImg,
      wxImg,
      experienceList,
      loading,
    } = this.state;
    return (
      <Style>
        <div className="bg"></div>
        <div className="resume container">
          <div className="body">
            <div className="user">
              <div
                className="img"
                style={{
                  background: `url(${headImg}) no-repeat center/cover`,
                }}
              ></div>
              <h2>SILENCE</h2>
              <div className="text">成都 | 前端码农</div>
              <div className="concat">
                <div className="item">
                  <i className="iconfont icon-github"></i>
                  <div className="box">GitHub</div>
                </div>
                <div className="item">
                  <i className="iconfont icon-QQ"></i>
                  <div className="box">
                    <img src={qqImg} alt="" />
                  </div>
                </div>
                <div className="item">
                  <i className="iconfont icon-weixin"></i>
                  <div className="box">
                    <img src={wxImg} alt="" />
                  </div>
                </div>
                <div className="item">
                  <i className="iconfont icon-dianhuahover"></i>
                  <div className="box">15680930381</div>
                </div>
                <div className="item">
                  <i className="iconfont icon-youxiang"></i>
                  <div className="box">346629678@qq.com</div>
                </div>
              </div>
            </div>
            <div className="content">
              <div className="item about">
                <p className="title">关于我</p>
                <span className="text">
                  {" "}
                  原名：肖定阳，1994年，户籍四川宜宾。{" "}
                </span>
                <div className="main">
                  <div className="t-resume">
                    <InnerHtml value={jsonList.aboutMe}></InnerHtml>
                  </div>
                  <div className="other">
                    <div className="left">
                      <div className="top-title">求职意向</div>
                      <div className="left-content">
                        {jsonList.jobWant.map((item, idx) => (
                          <p key={idx}>
                            <span>{item.label}</span>
                            <span>{item.value}</span>
                          </p>
                        ))}
                      </div>
                    </div>
                    <div className="right">
                      <div className="top-title">毕业院校</div>
                      <div className="right-content">
                        {jsonList.schoolList.map((item, idx) => (
                          <p key={idx}>
                            <span>{item.label}</span>
                            <span>{item.value}</span>
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item skills">
                <p className="title">知识技能</p>
                <div className="main">
                  {jsonList.skillList.map((item, idx) => {
                    return (
                      <div className="skill-item" key={idx}>
                        <span style={{ fontSize: "14px", width: "38%" }}>
                          {item.tag}
                        </span>
                        {Array.from(new Array(10).keys()).map((data, idx) => {
                          return idx < item.value ? (
                            <p className="on" key={idx}></p>
                          ) : (
                            <p key={idx}></p>
                          );
                        })}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="item job">
                <p className="title">项目经验</p>
                <div className="main">
                  {experienceList.length > 0 &&
                    experienceList.map((item, idx) => {
                      if (item.experience)
                        return (
                          <div className="job-item" key={idx}>
                            <div className="time">
                              <span>{item.timeList[0]}</span> -{" "}
                              <span>{item.timeList[1]}</span>
                            </div>
                            <div className="job-content">
                              <p className="dot"></p>
                              <div className="company">{item.companyName}</div>
                              <div className="project">
                                {item.experience.map((item, idx) => {
                                  return (
                                    <div className="project-item" key={idx}>
                                      <div className="project-name">
                                        <span>项目名称：</span>
                                        <InnerHtml
                                          value={item.projectName}
                                        ></InnerHtml>
                                      </div>
                                      <div className="project-description">
                                        <span>项目简介：</span>
                                        <InnerHtml
                                          value={item.skills}
                                        ></InnerHtml>
                                      </div>
                                      <div className="job-description">
                                        <span>项目职责：</span>
                                        <InnerHtml
                                          value={item.jobDescription}
                                        ></InnerHtml>
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                        );
                    })}
                </div>
              </div>
            </div>
          </div>
          <Loading loading={loading}></Loading>
        </div>
      </Style>
    );
  }
}

export default index;
