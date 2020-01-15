import styled from "styled-components";

export const Page1Style = styled.div`
  .body{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: 0.5s;
    box-shadow: 0 0 10px 0 #000;
    padding: 50px;
    border-radius: 10px;
    text-align: center;
    .btn{
      a{
        display: block;
        color: #fff;
        padding: 10px 0;
        border: 1px solid #fff;
        width: 300px;
        border-radius: 5px;
        margin: 30px auto 0;
      }
    }
    &:hover{
      transform:translate(-50%, -50%) scale(1.1);
    }
    h1{
      font-size: 50px;
      color: #fff;
      background-image:-webkit-linear-gradient(#fff, #0E5CAD);
      -webkit-background-clip:text; 
      -webkit-text-fill-color:transparent; 
      text-align: center;
    }
    h2{
      font-size: 25px;
      color: #fff;
    }
  }
  @media (max-width: 479px) {
        .body{
          h1{
            font-size: 30px;
          }
          h2{
            font-size: 20px;
          }
        }
    }

`
