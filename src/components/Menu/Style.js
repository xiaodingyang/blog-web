import styled from "styled-components";
export const Style = styled.div`
    width: 100vw;
    .music{
        position: relative;
        width: 100%;
        height: 30px;
        background: transparent;
        video{
            position: absolute;
            left: -10px;
            top: 0;
        }
    }
    .nav-container {
        width: calc(1/6 * 100% - 20px);
        min-width: 150px;
        height: 100vh;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 999;
        transition: 1s;
        background: rgb(48, 48, 48);
        opacity: 0.7;
        
    }
    .ant-menu-dark, .ant-menu-dark .ant-menu-sub{
        background: rgba(0,0,0,.7);
    }

    .close {
        position: absolute;
        z-index: 999;
        right: 0;
        top: 0;
        background: -webkit-linear-gradient(#79F1A4, #0E5CAD);
    }

    .nav-toggle {
        position: fixed;
        left: 20px;
        top: 20px;
        z-index: 999;
    }

    .logo{
        height: 150px;
        position: relative;
        &:after{
            content: "";
            width:100%;
            height:100%;
            position: absolute;
            left:0;
            top:0;
            background: inherit;
            filter: blur(2px);
            z-index: 2;
        }
        .content{
            position: absolute;
            width: 100%;
            height: 100%;
            top: 93px;
            z-index: 99;
        }
        p{
            font-size: 25px;
            color: #00A7EB;
            background-image:-webkit-linear-gradient(#79F1A4, #0E5CAD);
            -webkit-background-clip:text; 
            -webkit-text-fill-color:transparent; 
            text-align: center;
        }
        .img{
            width: 100px;
            height: 100px;
            border-radius: 50%;
            cursor: pointer;
            margin: auto;
            transition: 0.5s;
            &:hover{
                transform: rotate(45deg);
            }
        }
    }
    .ant-menu.ant-menu-dark .ant-menu-item-selected, 
    .ant-menu-submenu-popup.ant-menu-dark .ant-menu-item-selected,
    .ant-menu-dark .ant-menu-item:hover {
        background: -webkit-linear-gradient(#79F1A4, #0E5CAD);
        transition: 0.5s;
    }
    .ant-menu-dark.ant-menu-inline, .ant-menu-dark.ant-menu-vertical, .ant-menu-dark.ant-menu-vertical-left, .ant-menu-dark.ant-menu-vertical-right{
        padding-top: 100px;
    }
    .ant-btn-background-ghost.ant-btn-link{
        color: #fff;
    }
    .ant-btn-background-ghost.ant-btn-link:hover, .ant-btn-background-ghost.ant-btn-link:focus{
        color: red;
    }

    .mask{
        position: fixed;
        left: 0;
        top: 0;
        z-index: 99;
        width: 100vw;
        height: 100vh;
        background: rgb(0,0,0,0.3);
    }


   

`