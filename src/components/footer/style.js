import styled from "styled-components";

export default styled.div`
  .footer{
    background: rgb(36, 47, 53);
    .body{
        .content{
            display: flex;
            justify-content: space-between;
            padding: 50px 0;
            &>div{
                width: 30%;
                color: #fff;
                .item{
                    padding: 5px 0;
                }
            }
            h2{
                color: #a4b1bf;
                font-size: 18px;
            }
        }
    }
    .bottom{
        background: rgb(45, 56, 62);
        .content{
            text-align:center;
            color: #fff;
            line-height: 2;
            p{
                margin: 0;
            }
            padding: 10px 0;
        }
    }
  }
  @media (max-width: 479px) {
    .footer .body .content {
        flex-direction: column;
        text-align: center;
        &>div{
            width: 100%;
            margin: 20px auto;
        }
    }
    }
`