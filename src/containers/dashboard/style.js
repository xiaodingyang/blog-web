import styled from "styled-components";

export const Style = styled.div`
    .app-bg{
        position: fixed;
        left: 0;
        top: 0;
        z-index: -2;
        width: 100vw;
        height: 100vh;
        background: url("https://xiaodingyang-1300707163.cos.ap-chengdu.myqcloud.com/myBlog/shizi.jpg") no-repeat center / cover;
        -webkit-filter: blur(3px);
        filter: (5px);
    }
    .router-content{
        min-height: calc(100vh - 274px);
    }
    .slide-in-appear {
        transform: translate3D(100%, 0, 0);
        transition: all 5000ms linear;
        &.slide-in-appear-active {
            transform: translate3D(0, 0, 0);
        }
    }
    
    .slide-in-enter {
        transform: translate3D(100%, 0, 0);
        transition: all 5000ms linear;
        
        &.slide-in-enter-active {
            transform: translate3D(0, 0, 0);
        }
    }
    
    .slide-in-leave {
        position: absolute;
        left: 0;
        top: 0;
        opacity: 1;
        transform: translate3D(0, 0, 0);
        transition: all 5000ms linear;
        &.slide-in-leave-active {
            opacity: 0.01;
            transform: translate3D(-100%, 0, 0);
        }
    }

    @media screen and (max-width: 479px){
        .music{
            display: none;
        }
    } 
    @media screen and (max-width: 479px){
        .music{
            display: none;
        }
    }
    @media screen and (max-width: 479px){
        .music{
            display: none;
        }
    }
`