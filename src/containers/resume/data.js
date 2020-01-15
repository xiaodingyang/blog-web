export default {
    aboutMe: [
        '本人乐观向上、吃苦耐劳。',
        '良好的社会交际能力，有较强的团队合作精神，能与不同层次 的人交流与沟通。',
        '工作认真负责，付出全部精力和热情，喜欢挑战，能在短时间适 应高压力任务。',
        '学习能力强，具备敏锐洞察力、较强团队管理与经营决策能力， 熟练运用激励策略引导团队。',
        '本人热爱互联网这个行业，更加热爱前端这个职业。为了解新技 术经常在下班业余时间在 github，CSDN，慕课网，es6阮一峰等网站学习，加强自己的技术。',
        '真诚的希望能为其所用，通过不断提升自我实现价值，为将来 奋斗不息'
    ],
    jobWant: [
        { label: '期望职业：', value: 'Web前端中级工程师' },
        { label: '工作地区：', value: '成都' },
        { label: '期望月薪：', value: '11000-12000元/月' },
        { label: '目前状况：', value: '我目前处于离职状态，可立即上岗。' },
    ],
    schoolList: [
        { value: '成都工业学院', label: '校名：' },
        { value: '统招本科', label: '性质：' },
        { value: '连续四年一等奖学金，班长，主办校内装机，软件创新大赛大赛等等。', label: '荣誉：' },
        { value: '3年工作开发经验', label: '工作开发经验：' },
    ],
    skillList: [
        { tag: 'HTML+CSS', value: 8 },
        { tag: 'Javascript', value: 7 },
        { tag: 'Es6', value: 7 },
        { tag: 'React.js', value: 7 },
        { tag: 'Vue.js', value: 7 },
        { tag: 'Git', value: 7 },
        { tag: '项目搭建', value: 6 },
        { tag: '线上维护优化', value: 6 },
    ],
    jobList: [
        {
            company: '成都国科漫云科技有限公司', startTime: '2019/02', endTime: '至今', salary: 9000,
            ProjectExperience: [
                {
                    projectName: '工程结构安全智能监测系统',
                    projectDescription: '该网页主要作用于桥梁建设工程结构只能检测，包括仪表盘，项目设施，系统管理，任务管理，巡检养护，告警管理，报告报表，数据分析，视频墙等。',
                    jobDescription: '1. 该项目使用 React 框架，主要负责系统管理部分页面的编写，包括业主管理，项目管理，基础设置管理，设备管理，用户管理等模块。2. 使用 axios 从后端拿取数据进行渲染，以及增删改查等.3. 使React-router 进行路由切换采用 webpack 进行模块化以及组件化开发 。Redux 控制数据状态。4. 使用 antd-ui 快速构建项目的 ui 框架。'
                }
            ]
        },
        {
            company: '上海易宝软件有限公司成都分公司', startTime: '2017/09', endTime: '2019/02', salary: 8500,
            ProjectExperience: [
                {
                    projectName: '视频大数据公安图像管理系统（React.js）',
                    projectDescription: '系统主要收集各个路口红绿灯摄像头车辆人脸采集数据的整合，主要针对交警案件处理而量身打造的一款管理系统。',
                    jobDescription: '1. 系统为政府提供上千种路口车辆，人像摄像数据的整合统计。 2. 独立完成首页，编辑页，订阅管理，通知记录等四个重要模块前端代码编写。对完成后的项目进行自测，优化等等。 3. 在原有版本基础上使用 React 框架完全重构。使用华为开发的 eview UI 组件，以及 echarts 图表。 4. 使用 axios 发送 ajax 请求，处理并完成数据的页面渲染。 5. 使用 redux 进行状态管理。 6. 和后台以及 UCD 串讲交互，版本更新，新需求完成以及前端代码优化等。 \n7. 详细设计文档编写，自测文档编写，等一整套华为开发标准流程'
                },
                {
                    projectName: '智能安防系统（Vue.js）',
                    projectDescription: '系统为政府提供在案犯罪事件，人员相关信息数据的整合等等。',
                    jobDescription: '1. 负责人脸模块，包括单，多条件查询，人脸的筛选。相似度匹配，单个详细信息等等。\n2. 使用 Vue MVVM 框架，Tiny UI 组件，echarts 库构建前端项目。3. 使用 axios 发送 ajax 请求，处理并完成数据的页面渲染。4. 和后台以及 UCD 串讲交互，版本更新，新需求完成以及前端代码优化等。5. 详细设计文档编写，自测文档编写，等一整套华为开发标准流程。'
                }
            ]
        },
        {
            company: '潭州教育', startTime: '2016/02', endTime: '2017/09', salary: 6500,
            ProjectExperience: [
                {
                    projectName: '潭州课堂（Vue.js）',
                    projectDescription: '潭州课堂，是潭州教育网络科技（湖南）有限公司打造的在线学习网站，主要是针对互联网在线教学开设的全品类直播教学、互动交流和录播课一体化的教学平台',
                    jobDescription: '1. 负责‘IT 互联网’的前端部分的代码编写，测试，以及联调。2. 功能主要有条件查询，筛选不同类别的课程。以及每门课程的详情页等等。3. 主要使用 Vue MVVM 框架，antd UI 框架。4. axios 发起 ajax 请求，以及 jsonP 发起跨域请求，拿到数据并处理和渲染到页面。5. 新需求的迭代，bug 的调试。以及页面的优化，性能优化等等。'
                },
                {
                    projectName: '学员管理系统（Vue.js）',
                    projectDescription: '此系统主要用于老师对学员数据的录入，权限的管理开放，以及学员上课情况的查看等等。',
                    jobDescription: '1. 同样的，基于 node 以及 webpack ，以 Vue 为基础的前端项目，使用 iview UI 框架。2. 主要负责“学员管理列表”部分。3. 主要功能有按照账号查询，批量导入学员，学员列表，档案详情，权限管理等等。4. axios 发起 ajax 请求，以及 jsonP 发起跨域请求，拿到数据并处理和渲染到页面。5. 新需求的迭代，bug 的调试。以及页面的优化，性能优化等等。'
                }
            ]
        }
    ]
}