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
        background: -webkit-linear-gradient(left, #70df00, #44bffa);
    }
    .text{
        color: #fff;
        padding: 20px 0;
    }
    .search{
        text-align: right;
        &>span{
            width: 267px;
        }
    }
    .search input{
        background: transparent;
        color: #fff;
    }
}
@media (max-width: 768px) {
    .header .search{
        text-align: right;
        &>span{
            width: 100%;
        }
        input{
            width: 100%;
        }
    }
    }
`
