import styled from "styled-components";

export const Style = styled.div`
    min-height: 100vh;
    .blog-detail{
        .detail-content{
            background: #fff;
            padding: 20px;
            padding-right: 10px;
            height: 100vh;
            box-shadow: 0 0 10px 0 #000;
            border-radius: 5px;
            h1{
                font-weight: bold;
                font-size: 30px;
            }
            .content{
                margin-top: 20px;
            }
            .subhead{
                span{
                    margin-right: 20px;
                }
            }
        }
        
    }
    .base-left-item{
      width: 80%;
    }
    .base-right-item{
      margin-left: 20px;
      width: 20%;
      padding: 10px;
      background: #fff;
      .line{
        border-left: 3px solid #04ac71;
        padding-left: 10px;
        margin-bottom: 20px;
        font-size: 18px;
        color: #000;
      }
    }
    .catalog{
      height: 100vh;
      box-shadow: 0 0 10px 0 #000;
      border-radius: 5px;
      .catalog-content{
      h2, h3, h4{
        font-size: 14px;
        /* border-radius: 5px; */
        &:hover{
            background: -webkit-linear-gradient(right,#0E5CAD,#79F1A4);
        }
        a{
          display: block;
          color: #666;
          padding: 3px;
          border-radius: 5px;
          &:hover{
            color: #fff;
          }
        }
      }
      h2{ padding-left: 10px; }
      h3{ padding-left: 20px }
      h4{ padding-left: 30px }
    }
    }
    @media (max-width: 768px) {
      .blog-detail .detail-content{
        width: 100%;
      }
      .base-right-item{
        display: none;
      }
    }
    
`