import styled from "styled-components";

export default styled.div`
  .loading-container{
    position: fixed;
    left: 0;
    top: 0;
    z-index: 999999999;
    width: 100vw;
    height: 100vh;
    background: rgb(0,0,0,.5);
  }
  .loader {
        position: absolute;
        width: 60px;
        height: 60px;
        left: calc(50% - 30px);
        top: calc(50% - 30px);
        border-radius: 50%;
        margin: 75px;
        display: inline-block;
        vertical-align: middle;
        margin: 0;
      }
      .loader-star {
        position: absolute;
        top: calc(50% - 12px);
      }

      /*LOADER-12*/

      .loader-12 {
        -webkit-animation: stars-rotate-reverse 2s ease infinite;
        animation: stars-rotate-reverse 2s ease infinite;
      }
      .loader-12 polygon {
        fill: deeppink !important;
      }
      .loader-12 .loader-star {
        position: absolute;
      }
      .loader-12 .star1 {
        top: 0px;
        right: -7px;
      }
      .loader-12 .star2 {
        right: 9px;
        top: -12px;
        position: absolute;
        -webkit-transform: scale(0.8);
        transform: scale(0.8);
        -webkit-animation: stars-catch 2s 0.1s ease infinite;
        animation: stars-catch 2s 0.1s ease infinite;
      }
      .loader-12 .star3 {
        right: 27px;
        top: -11px;
        position: absolute;
        -webkit-transform: scale(0.7);
        transform: scale(0.7);
        -webkit-animation: stars-catch 2s 0.15s ease infinite;
        animation: stars-catch 2s 0.15s ease infinite;
      }
      .loader-12 .star4 {
        right: 41px;
        top: -2px;
        position: absolute;
        -webkit-transform: scale(0.6);
        transform: scale(0.6);
        -webkit-animation: stars-catch 2s 0.2s ease infinite;
        animation: stars-catch 2s 0.2s ease infinite;
      }
      .loader-12 .star5 {
        right: 47px;
        top: 10px;
        position: absolute;
        -webkit-transform: scale(0.5);
        transform: scale(0.5);
        -webkit-animation: stars-catch 2s 0.25s ease infinite;
        animation: stars-catch 2s 0.25s ease infinite;
      }
      .loader-12 .star6 {
        right: 47px;
        top: 21px;
        position: absolute;
        -webkit-transform: scale(0.4);
        transform: scale(0.4);
        -webkit-animation: stars-catch 2s 0.3s ease infinite;
        animation: stars-catch 2s 0.3s ease infinite;
      }

      /* ----------------     KEYFRAMES    ----------------- */

      @-webkit-keyframes stars-rotate {
        0% {
          -webkit-transform: rotate(0deg);
          transform: rotate(0deg);
        }
        25% {
          -webkit-transform: rotate(-90deg);
          transform: rotate(-90deg);
        }
        50% {
          -webkit-transform: rotate(-180deg);
          transform: rotate(-180deg);
        }
        75% {
          -webkit-transform: rotate(-270deg);
          transform: rotate(-270deg);
        }
        100% {
          -webkit-transform: rotate(-360deg);
          transform: rotate(-360deg);
        }
      }
      @keyframes stars-rotate {
        0% {
          -webkit-transform: rotate(0deg);
          transform: rotate(0deg);
        }
        25% {
          -webkit-transform: rotate(-90deg);
          transform: rotate(-90deg);
        }
        50% {
          -webkit-transform: rotate(-180deg);
          transform: rotate(-180deg);
        }
        75% {
          -webkit-transform: rotate(-270deg);
          transform: rotate(-270deg);
        }
        100% {
          -webkit-transform: rotate(-360deg);
          transform: rotate(-360deg);
        }
      }
      @-webkit-keyframes stars-rotate-reverse {
        0% {
          -webkit-transform: rotate(0deg);
          transform: rotate(0deg);
        }
        100% {
          -webkit-transform: rotate(360deg);
          transform: rotate(360deg);
        }
      }
      @keyframes stars-rotate-reverse {
        0% {
          -webkit-transform: rotate(0deg);
          transform: rotate(0deg);
        }
        100% {
          -webkit-transform: rotate(360deg);
          transform: rotate(360deg);
        }
      }
      @-webkit-keyframes stars-catch {
        0% {
        }
        25% {
        }
        50% {
        }
        75% {
          top: -2px;
          right: -11px;
          opacity: 0;
        }
        100% {
        }
      }
      @keyframes stars-catch {
        0% {
        }
        25% {
        }
        50% {
        }
        75% {
          top: -2px;
          right: -11px;
          opacity: 0;
        }
        100% {
        }
      }
      @-webkit-keyframes star-fly-out {
        0% {
          top: 19px;
          left: 19px;
        }
        100% {
        }
      }
      @keyframes star-fly-out {
        0% {
          top: 19px;
          left: 19px;
        }
        100% {
        }
      }
`