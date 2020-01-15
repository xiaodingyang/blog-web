import styled from "styled-components";

export const Style = styled.div`
    h2{
        color: #fff;
        span{
            color: #04ac71;
        }
    }
    .content{
        /* padding: 20px; */
        /* background: #fff; */
        /* margin: 20px auto; */
        border-radius: 5px;
        color: #fff;
    }
    .wrap{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        /* background: rgb(255, 255, 255); */
        /* padding: 20px; */
        border-radius: 10px;
        &:after{
            content: '';
            width: 32%;
        }
    }
    @media (max-width: 768px) {
      .wrap>div{
        width: 100%;
      }
    }
    @media (min-width: 768px) {
      .wrap>div{
        width: 32%;
      }
    }
`