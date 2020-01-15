import React, { Component } from 'react';
import { Style } from "./style";
import { getResumeList } from '../../servers/resume';
import { getList } from "@/servers/imgs";

export class index extends Component {
    constructor(...arg) {
        super()
        this.state = {
            jsonList: {
                aboutMe: [],
                jobWant: [],
                schoolList: [],
                skillList: [],
                jobList: [],
            },
            touxiang: '',
            qq: '',
            wx: '',
        }
    }
    componentDidMount() {
        getList().then(res => {
            this.setState({
                touxiang: res[0].otherImg.touxiang,
                qq: res[0].otherImg.qq,
                wx: res[0].otherImg.wx,
            })
        })
        getResumeList().then(res => {
            this.setState({ jsonList: res })
        })
    }

    render() {
        const { jsonList, touxiang, qq, wx } = this.state
        return (
            <Style>
                <div className="bg"></div>
                <div className="resume container">
                    <div className="body">
                        <div className="user">
                            <div className="img" style={{ 'background': `url(${touxiang}) no-repeat center/cover` }}></div>
                            <h2>SILENCE</h2>
                            <div className="text">成都 | 前端码农</div>
                            <div className="concat">
                                <div className="item">
                                    <i className="iconfont icon-github"></i>
                                    <div className="box">GitHub</div>
                                </div>
                                <div className="item">
                                    <i className="iconfont icon-QQ"></i>
                                    <div className="box"><img src={qq} alt="" /></div>
                                </div>
                                <div className="item">
                                    <i className="iconfont icon-weixin"></i>
                                    <div className="box"><img src={wx} alt="" /></div>
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
                                <span className="text">原名肖定阳，94年，25岁。来自四川宜宾。</span>
                                <div className="main">
                                    <div className="t-resume">
                                        {jsonList.aboutMe.map((item, idx) => <p key={idx}><span>{idx + 1}</span><span>{item}</span></p>)}
                                    </div>
                                    <div className="other">
                                        <div className="left">
                                            <div className="top-title">求职意向</div>
                                            <div className="left-content">
                                                {jsonList.jobWant.map((item, idx) => <p key={idx}><span>{item.label}</span>{item.value}</p>)}
                                            </div>
                                        </div>
                                        <div className="right">
                                            <div className="top-title">毕业院校</div>
                                            <div className="right-content">
                                                {
                                                    jsonList.schoolList.map((item, idx) => <p key={idx}><span>{item.label}</span>{item.value}</p>)
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item skills">
                                <p className="title">知识技能</p>
                                <div className="main">
                                    {
                                        jsonList.skillList.map((item, idx) => {
                                            return <div className="skill-item" key={idx}>
                                                <span>{item.tag}</span>
                                                {Array.from(new Array(10).keys()).map((data, idx) => {
                                                    return idx < item.value ? <p className="on"></p> : <p></p>
                                                })}
                                            </div>
                                        })
                                    }
                                </div>
                            </div>
                            <div className="item job">
                                <p className="title">项目经验</p>
                                <div className="main">
                                    {
                                        jsonList.jobList.map((item, idx) => {
                                            return <div className="job-item" key={idx}>
                                                <div className="time"><span>{item.startTime}</span> - <span>{item.endTime}</span></div>
                                                <div className="job-content">
                                                    <p className="dot"></p>
                                                    <div className="company">{item.company}</div>
                                                    <div className="project">
                                                        {
                                                            item.ProjectExperience.map((item, idx) => {
                                                                return <div className="project-item" key={idx}>
                                                                    <div className="project-name"><span>项目名称：</span>{item.projectName}</div>
                                                                    <div className="project-description"><span>项目描述：</span>{item.projectDescription}</div>
                                                                    <div className="job-description"><span>项目职责：</span>{item.jobDescription}</div>
                                                                </div>
                                                            })
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Style >
        );
    }
}

export default index;
