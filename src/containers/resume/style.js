import styled from "styled-components";

export const Style = styled.div`
  .bg {
    position: fixed;
    left: 0;
    top: 0;
    z-index: -2;
    width: 100vw;
    height: 100vh;
    background: #000;
    &::before {
      position: absolute;
      right: 0;
      top: 0;
      content: "";
      width: 0;
      height: 0;
      border: 300px solid rgb(209, 75, 74);
      border-left: 300px solid transparent;
      border-bottom: 300px solid transparent;
    }
    &::after {
      position: absolute;
      right: left;
      top: 0;
      content: "";
      width: 0;
      height: 0;
      border: 400px solid rgb(51, 51, 51);
      border-right: 400px solid transparent;
      border-bottom: 400px solid transparent;
      border-top: 200px solid transparent;
    }
  }

  .resume {
    position: relative;
    color: #fff;
    .body {
      display: flex;
      .user {
        position: fixed;
        min-width: 280px;
        width: 15%;
        height: 400px;
        padding: 20px;
        // margin-right: 20px;
        background: rgb(209, 75, 74);
        .img {
          width: 50%;
          height: 40%;
          margin: auto;
          border-radius: 50%;
          overflow: hidden;
          transition: 0.5s;
          &:hover {
            transform: rotate(45deg);
          }
        }
        h2 {
          font-size: 32px;
          color: #fff;
          text-align: center;
          margin-top: 10px;
        }
        .text {
          color: #bcbcbc;
          text-align: center;
        }
        .concat {
          display: flex;
          justify-content: space-between;
          padding: 20px 0;
          .item {
            position: relative;
            width: 35px;
            height: 35px;
            background: #fff;
            border-radius: 50%;
            text-align: center;
            line-height: 35px;
            cursor: pointer;
            transition: 0.5s;
            &:hover {
              background: rgb(61, 61, 61);
              i {
                color: #fff;
              }
              .box {
                opacity: 1;
              }
            }
            i {
              font-size: 25px;
              color: rgb(61, 61, 61);
              transition: 0.5s;
            }

            .box {
              opacity: 0;
              position: absolute;
              bottom: 50px;
              left: 50%;
              transform: translateX(-50%);
              padding: 0 5px;
              background: #fff;
              color: rgb(61, 61, 61);
              font-weight: bold;
              border-radius: 5px;
              transition: 0.5s;
              &:after {
                position: absolute;
                bottom: -20px;
                left: 50%;
                transform: translate(-50%, -5%);
                width: 0;
                height: 0;
                content: "";
                border: 10px solid #fff;
                border-left: 10px solid transparent;
                border-right: 10px solid transparent;
                border-bottom: 10px solid transparent;
              }
              img {
                width: 100px;
              }
            }
          }
        }
      }
      .content {
        // width: 70%;
        margin-left: 26%;
        .item {
          padding: 20px;
          background: rgb(51, 51, 51);
          margin-bottom: 20px;
          .title {
            padding-left: 10px;
            border-left: 3px solid rgb(209, 75, 74);
            font-size: 25px;
            line-height: 25px;
            font-weight: bold;
          }
          .text {
            font-size: 16px;
            display: block;
            padding-bottom: 20px;
            text-indent: 2em;
            color: #bcbcbc;
          }
        }
        .about {
          .t-resume {
            div {
              padding: 5px 0;
              color: #bcbcbc;
            }
          }
          .other {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            .top-title {
              color: #bcbcbc;
              font-size: 22px;
              padding: 20px 0;
            }
            .left-content,
            .right-content {
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              height: 200px;
              span {
                font-weight: bold;
              }
              p span:nth-child(2) {
                color: #bcbcbc;
              }
            }
          }
        }
        .skills {
          .main {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            .skill-item {
              display: flex;
              justify-content: space-between;
              height: 30px;
              align-items: center;
              width: 40%;
              margin: 20px 0;
              span {
                font-size: 18px;
                font-weight: bold;
                margin-right: 10px;
              }
              p {
                width: 15px;
                height: 15px;
                border-radius: 50%;
                border: 1px solid rgb(209, 75, 74);
                margin: 0;
                &.on {
                  background: rgb(209, 75, 74);
                }
              }
            }
          }
        }
        .job {
          .job-item {
            display: flex;
            width: 100%;
            .time {
              position: relative;
              height: 30px;
              width: 22%;
              margin-right: 20px;
              padding: 0 5px;
              line-height: 30px;
              background: rgb(209, 75, 74);
              &:after {
                position: absolute;
                right: -30px;
                top: 0;
                content: "";
                border: 15px solid transparent;
                border-left: 15px solid rgb(209, 75, 74);
              }
            }
            .job-content {
              position: relative;
              width: 80%;
              border-left: 2px solid rgb(209, 75, 74);
              padding-left: 20px;
              margin-top: 10px;
              .dot {
                position: absolute;
                left: -6px;
                top: 0;
                width: 10px;
                height: 10px;
                border-radius: 50%;
                background: #fff;
              }
              .company {
                color: #bcbcbc;
                font-size: 22px;
              }
              .project {
                .project-item {
                  box-shadow: 0 0 5px 0 #000;
                  margin-bottom: 20px;
                }
                .project-item > div {
                  display: flex;
                  padding: 10px;
                  margin: 10px 0;
                  line-height: 2;
                  span:nth-child(1) {
                    width: 150px;
                  }
                  span:nth-child(2) {
                    color: #bcbcbc;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  @media (max-width: 479px) {
    .bg {
      &::before {
        border-width: 50px;
      }
      &::after {
        border-width: 200px;
      }
    }
    .resume .body {
      flex-direction: column;
      .user {
        position: relative;
        width: 100%;
        margin: 20px 0;
      }
      .content {
        width: 100%;
        margin: 0;
      }
    }
    .resume .body .content .skills .main .skill-item {
      width: 100%;
    }
    .resume .body .content .job .job-item {
      display: block;
      .time {
        width: 50%;
      }
      .job-content {
        width: 100%;
      }
    }
  }
`;
