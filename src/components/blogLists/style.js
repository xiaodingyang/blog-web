import styled from "styled-components";

export const Style = styled.div`
    

    .list-item{
            position: relative;
            min-width:32%;
            box-sizing:border-box;
            box-shadow: 0 0 5px 0 #000;
            padding: 20px;
            transition: .5s;
            margin-bottom: 20px;
            border-radius: 5px;
            background: #fff;
            &:hover{
                box-shadow: 0 0 15px 0 #000;
            }
            .create-time{
                position: absolute;
                right: 30px;
                top: 30px;
                padding: 5px;
                border-radius: 5px;
                background: rgba(0,0,0,.5);
                z-index: 9999;
                color: #fff;
            }
            .img{
                overflow:hidden;
                border-radius: 5px;
                cursor: pointer;
                box-shadow: 0 0 2px 0 #ccc;
                img{
                    width: 100%;
                    transition: .5s;
                }
            }
            .img:hover img{
                transform: scale(1.2);
            }
            h3{
                font-size: 18px;
                padding: 10px 0;
                margin: 0;
                cursor: pointer;
                a{
                    color: #04ac71;
                }
            }
            .content{
                color: #999;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
            }
            .read{
                padding: 20px 0;
                cursor: pointer;
                a{
                    color: #04ac71;
                }
            }
            .bottom{
                position: absolute;
                bottom: 20px;
                right: 20px;
                span{
                    margin-left: 10px;
                }
            }
        }
    @media (max-width: 768px) {
      .wrap{
        .list-item{
            width: 100%;
        }
      }
    }
    
`