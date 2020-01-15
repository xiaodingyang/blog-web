import styled from "styled-components";

export const Style = styled.div`
    .header{
        padding: 30px 0;
        /* background: rgb(37, 37, 37); */
        text-align: center;
        h2{
        color: #fff;
        font-size: 30px;
        padding: 20px 0;
        }
        .line{
        height: 2px;
        width: 100%;
        background: -webkit-linear-gradient(left,#70df00,#44bffa);
        }
        .text{
        color: #fff;
        padding: 20px 0;
        }
    }
    .comment{
        background: rgba(255, 255, 255);
        margin-bottom: 20px;
        padding: 20px;
        box-shadow: 0 0 10px 0 #000;
        border-radius: 10px;
    }
`