import styled from "styled-components";

export const Style = styled.div`
    .slide-in-appear {
        transform: translate3D(100%, 0, 0);
        transition: all 5000ms linear;
        .slide-in-appear-active {
            transform: translate3D(0, 0, 0);
        }
    }
    
    .slide-in-enter {
        transform: translate3D(100%, 0, 0);
        transition: all 5000ms linear;
        
        .slide-in-enter-active {
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
        .slide-in-leave-active {
            opacity: 0.01;
            transform: translate3D(-100%, 0, 0);
        }
    }

    .container {
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;
    }
    .music{
        position: fixed;
        right: 20px;
        top: 20px;
        z-index: 999999999;
        width: 200px;
        height: 40px;
        video{
            position: absolute;
            right: 0;
            top: 0;
            width: 200px;
            height: 40px;
        }
    }
    .ant-btn-primary{
      background: -webkit-linear-gradient(#79F1A4, #0E5CAD);
      border: 0;
    }
    @media (max-width: 479px) {
        .container {
            width: calc(100% - 30px);
        }
        .music{
            display: none;
        }
    }
    @media (min-width: 768px) {
        .container {
            width: 750px;
        }
    }
    @media (min-width: 992px) {
        .container {
            width: 970px;
        }
    }
    @media (min-width: 1200px) {
        .container {
            width: 1170px;
        }
    }
    @media (min-width: 2560px) {
        .container {
            width: 1920px;
        }
    }

    

    
    
`