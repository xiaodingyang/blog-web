import styled from "styled-components";

export const Style = styled.div`
*{
  margin: 0; padding: 0;
}
  .top-search{
      display: flex;
      justify-content: space-between;
  }
`;

export const TopBanner = styled.div`
    .blog-list-item{
      background: #fff;
      margin: 20px 0;
      padding: 20px;
      border-radius: 10px;
    }
    .title{
        padding: 5px 20px;
        font-size: 16px;
        color: #fff;
        box-shadow: 0 0 5px 0 pink;
        background: pink;
        display: inline-block;
        border-radius: 20px;
        margin: 20px 0;
    }
    .wrap{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        background: rgb(255, 255, 255);
        /* padding: 20px; */
        border-radius: 10px;
        &:after{
            content: '';
            width: 32%;
        }
    }
    .swiper-container {
      width: 100%;
      height: 100%;
    }
    p{
      margin: 0;
    }
    .swiper-container .swiper-button-white{
      opacity: 0;
      transition: 0.5s;
    }
    .swiper-container:hover .swiper-button-white{
      opacity: 1;
    }
    .swiper-slide {
		position:relative;
      
    }
	.swiper-slide .txt{
		position:absolute;
		top:50%;
		z-index:10;
		}
	.swiper-slide p{
		
		font-size:20px;
		letter-spacing:2px;
		font-weight:bold;
		line-height:2;
		color:transparent;
		-moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        font-smoothing: antialiased;
		will-change: transform;
		}	
	.swiper-slide-active p,.swiper-slide-duplicate-active p{
		animation:line 7s; 
		animation-iteration-count:2;
        animation-direction:alternate;
		animation-timing-function:ease;
		}		
  @keyframes line{
    0%{transform: matrix3d(0.990268, -0.139173, 0, 0, -0.0348995, 0.999391, 0, 0, 0, 0, 1, 0, 10, -20, 0, 1);}
    50%{transform: rotate(1deg);transform-origin:left center;}
    60%{transform: translate3d(0px, 0px, 0px);}
    100%{transform: translate3d(0px, 0px, 0px);}
  }	
    .swiper-slide p span{
    display: inline-block;
    will-change: transform, opacity, text-shadow;
    }
      .swiper-slide-active p .even,  .swiper-slide-duplicate-active p .even{
      animation:letterL 7s;
      animation-iteration-count:2;
          animation-direction:alternate;	
      animation-fill-mode: forwards;
      animation-timing-function:ease-in-out;
        }
      .swiper-slide-active p .odd,.swiper-slide-duplicate-active p .odd	{
      animation:letterR 7s;
      animation-iteration-count:2;
          animation-direction:alternate;	
      animation-fill-mode: forwards;
          animation-timing-function:ease-in-out;
        }

  @keyframes letterL{
    0%{opacity: 0;transform: matrix3d(1.53209, -1.28558, 0, 0, -1, 1.73205, 0, 0, 0, 0, 1, 0, 18, -8, 0, 1);text-shadow: rgb(255, 255, 255) 0px 0px 40px}
  60%{opacity: 1;transform: translate3d(0px, 0px, 0px);
      text-shadow: rgb(255, 255, 255) 0px 0px 0px;}	
  100%{opacity: 1;transform: translate3d(0px, 0px, 0px);
      text-shadow: rgb(255, 255, 255) 0px 0px 0px;}}
  @keyframes letterR{
    0%{opacity: 0;transform: matrix3d(1.14907, -0.964181, 0, 0, 1.40954, -0.51303, 0, 0, 0, 0, 1, 0, 15, -8, 0, 1);text-shadow: rgb(255, 255, 255) 0px 0px 40px}
  60%{opacity: 1;transform: translate3d(0px, 0px, 0px);
      text-shadow: rgb(255, 255, 255) 0px 0px 0px;}	
  100%{opacity: 1;transform: translate3d(0px, 0px, 0px);
      text-shadow: rgb(255, 255, 255) 0px 0px 0px;}}
      
  .swiper-slide p span:nth-child(22) { animation-delay: 770ms;  }
  .swiper-slide p span:nth-child(21) { animation-delay: 735ms;  }
  .swiper-slide p span:nth-child(20) { animation-delay: 700ms;  }
  .swiper-slide p span:nth-child(19) { animation-delay: 665ms;  }
  .swiper-slide p span:nth-child(18) { animation-delay: 630ms;  }
  .swiper-slide p span:nth-child(17) { animation-delay: 595ms;  }
  .swiper-slide p span:nth-child(16) { animation-delay: 560ms;  }
  .swiper-slide p span:nth-child(15) { animation-delay: 525ms;  }
  .swiper-slide p span:nth-child(14) { animation-delay: 490ms;  }
  .swiper-slide p span:nth-child(13) { animation-delay: 455ms;  }
  .swiper-slide p span:nth-child(12) { animation-delay: 420ms;  }
  .swiper-slide p span:nth-child(11) { animation-delay: 385ms;  }
  .swiper-slide p span:nth-child(10) { animation-delay: 350ms;  }
  .swiper-slide p span:nth-child(9) { animation-delay: 315ms;  }
  .swiper-slide p span:nth-child(8) { animation-delay: 280ms;  }
  .swiper-slide p span:nth-child(7) { animation-delay: 245ms;  }
  .swiper-slide p span:nth-child(6) { animation-delay: 210ms;  }
  .swiper-slide p span:nth-child(5) { animation-delay: 175ms;  }
  .swiper-slide p span:nth-child(4) { animation-delay: 140ms;  }
  .swiper-slide p span:nth-child(3) { animation-delay: 105ms;  }
  .swiper-slide p span:nth-child(2) { animation-delay: 70ms;  }
  .swiper-slide p span:nth-child(1) { animation-delay: 35ms;  }		
      
      
      
    .swiper-slide .txt1,.swiper-slide .txt2{
      margin-top: -70px;
      left: 50%;
      margin-left: -90px;}
    
    .swiper-slide .txt3{
    margin-top: -270px;
      left: 50%;
      margin-left: -90px;}
    
    .swiper-slide .txt4{
    margin-top: -120px;
      left: 180px;
    }
      
    .swiper-slide img{
      width:100%;
      height:auto;
      min-height:100%;
      /* transition:1s linear 2s; */
      }
    .swiper-slide-active img,.swiper-slide-duplicate-active img{
      transition:16s linear;
      transform:scale(1.2,1.2);
      }	
    .swiper-pagination{
      bottom:30px !important;
      left:-100px !important;
      text-align:right;
      text-indent:100px;
      }	
    .swiper-pagination-bullet{
      width:12px;
      height:12px;
      opacity:1;
      background:none;
      border:1px solid #fff;}	
    .swiper-pagination-bullet-active{
      background:#fff;
      }

    .top-banner{
      
    } 
    .base-index-page{
      display: flex;
      .base-left{
        width: 75%;
      }
      .base-right{
        margin-left: 20px;
        width: 25%;
      }
    }

    

    .base-right-item, .base-left-item{
      margin-bottom: 20px;
      border-radius: 5px;
    }
    .ant-input:focus{
      box-shadow: 0 0 1px 0 #79F1A4;
    }

   
    .header-nav{
      position: relative;
      height: 60px;
      .content{
        position: absolute;
        left: 50%;
        transform: translate(-50%);
        line-height: 60px;
        display: flex;
        .nav-item{
          span{
            margin: 0 15px;
          cursor: pointer;
          &:hover{
            color: #04ac71;
          }
      }
        }
        
      }
    }
    .base-right-item{
      width: 100%;
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
    .ant-tag{
      width: 25%;
      padding: 5px 0;
      text-align: center;
      margin-bottom: 10px;
    }
    .tag-content{
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      &:after{
        content: '';
        width: 75px;
      }
    }
    
    .blog-item{
      display: flex;
      margin-bottom: 20px;
      .img{
        width: 100px;
        overflow: hidden;
        margin-right: 20px;
        img{
          width: 100%;
          transition: .5s;
          &:hover{
            transform: scale(1.2);
          }
        }
      }
      .content{
        width: 56%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        h3{
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          font-size: 16px;
        }
        .bottom{
          display: flex;
          justify-content: space-between;
          .read{
            margin-right: 10px;
            font-size: 12px;
            color: #04ac71;
          }
          .time{
            font-size: 12px;
          }
        }
      }
    }
    @media (min-width: 768px) {
      .blog-list-item .wrap>div{
        width: 32%;
      }
    }
    @media (max-width: 768px) {
      .base-index-page{
        .base-right{
          display: none;
        }
        .base-left{
          width: 100%;
        }
      }
      .blog-list-item .wrap>div{
        width: 100%;
      }
    }
    
`;


