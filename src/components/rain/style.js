import styled from "styled-components";


export const Style = styled.div`
.container {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
.window {
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: 50%;
    -webkit-filter: blur(3px);
    filter: blur(3px);
  }
  
  .raindrops,
  .borders,
  .drops {
    position: absolute;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }
  
  .drops {
    -webkit-filter: brightness(1.2);
            filter: brightness(1.2);
  }
  
  .raindrop {
    position: absolute;
    border-radius: 100%;
    background-size: 5vw 5vh;
    background-position: 50%;
    -webkit-transform: rotate(180deg) rotateY(0);
            transform: rotate(180deg) rotateY(0);
  }
  
  .border {
    position: absolute;
    margin-left: 2px;
    margin-top: 1px;
    border-radius: 100%;
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.5);
    -webkit-transform: rotateY(0);
            transform: rotateY(0);
  }
  
  .raindrop:nth-child(1) {
    left: 10.04698vw;
    top: 91.82078vh;
    width: 6px;
    height: 7.15325px;
    background-position: 10.04698% 91.82078%;
    -webkit-animation: 3.10099s falling 0.3s ease-in infinite;
            animation: 3.10099s falling 0.3s ease-in infinite;
  }
  
  .border:nth-child(1) {
    left: 10.04698vw;
    top: 91.82078vh;
    width: 2px;
    height: 7.15325px;
    -webkit-animation: 3.10099s falling 0.3s ease-in infinite;
            animation: 3.10099s falling 0.3s ease-in infinite;
  }
  
  .raindrop:nth-child(2) {
    left: 12.82745vw;
    top: 77.30419vh;
    width: 14px;
    height: 12.27636px;
    background-position: 12.82745% 77.30419%;
    -webkit-animation: 1.67971s falling 0.3s ease-in infinite;
            animation: 1.67971s falling 0.3s ease-in infinite;
  }
  
  .border:nth-child(2) {
    left: 12.82745vw;
    top: 77.30419vh;
    width: 10px;
    height: 12.27636px;
    -webkit-animation: 1.67971s falling 0.3s ease-in infinite;
            animation: 1.67971s falling 0.3s ease-in infinite;
  }
  
  .raindrop:nth-child(3) {
    left: 99.76471vw;
    top: 20.07903vh;
    width: 8px;
    height: 9.20648px;
    background-position: 99.76471% 20.07903%;
    -webkit-animation: 1.55576s falling 0.3s ease-in infinite;
            animation: 1.55576s falling 0.3s ease-in infinite;
  }
  
  .border:nth-child(3) {
    left: 99.76471vw;
    top: 20.07903vh;
    width: 4px;
    height: 9.20648px;
    -webkit-animation: 1.55576s falling 0.3s ease-in infinite;
            animation: 1.55576s falling 0.3s ease-in infinite;
  }
  
  .raindrop:nth-child(4) {
    left: 14.96301vw;
    top: 99.31952vh;
    width: 13px;
    height: 14.36884px;
    background-position: 14.96301% 99.31952%;
    -webkit-animation: 2.54729s falling 0.3s ease-in infinite;
            animation: 2.54729s falling 0.3s ease-in infinite;
  }
  
  .border:nth-child(4) {
    left: 14.96301vw;
    top: 99.31952vh;
    width: 9px;
    height: 14.36884px;
    -webkit-animation: 2.54729s falling 0.3s ease-in infinite;
            animation: 2.54729s falling 0.3s ease-in infinite;
  }
  
  .raindrop:nth-child(5) {
    left: 96.89809vw;
    top: 18.21613vh;
    width: 13px;
    height: 11.63689px;
    background-position: 96.89809% 18.21613%;
    -webkit-animation: 2.40469s falling 0.3s ease-in infinite;
            animation: 2.40469s falling 0.3s ease-in infinite;
  }
  
  .border:nth-child(5) {
    left: 96.89809vw;
    top: 18.21613vh;
    width: 9px;
    height: 11.63689px;
    -webkit-animation: 2.40469s falling 0.3s ease-in infinite;
            animation: 2.40469s falling 0.3s ease-in infinite;
  }
  
  .raindrop:nth-child(6) {
    left: 7.49532vw;
    top: 34.16121vh;
    width: 11px;
    height: 8.02795px;
    background-position: 7.49532% 34.16121%;
    -webkit-animation: 1.82227s falling 0.3s ease-in infinite;
            animation: 1.82227s falling 0.3s ease-in infinite;
  }
  
  .border:nth-child(6) {
    left: 7.49532vw;
    top: 34.16121vh;
    width: 7px;
    height: 8.02795px;
    -webkit-animation: 1.82227s falling 0.3s ease-in infinite;
            animation: 1.82227s falling 0.3s ease-in infinite;
  }
  
  .raindrop:nth-child(7) {
    left: 16.83013vw;
    top: 78.48574vh;
    width: 11px;
    height: 8.97741px;
    background-position: 16.83013% 78.48574%;
    -webkit-animation: 1.51951s falling 0.3s ease-in infinite;
            animation: 1.51951s falling 0.3s ease-in infinite;
  }
  
  .border:nth-child(7) {
    left: 16.83013vw;
    top: 78.48574vh;
    width: 7px;
    height: 8.97741px;
    -webkit-animation: 1.51951s falling 0.3s ease-in infinite;
            animation: 1.51951s falling 0.3s ease-in infinite;
  }
  
  .raindrop:nth-child(8) {
    left: 27.85806vw;
    top: 25.5479vh;
    width: 8px;
    height: 7.10439px;
    background-position: 27.85806% 25.5479%;
    -webkit-animation: 2.65093s falling 0.3s ease-in infinite;
            animation: 2.65093s falling 0.3s ease-in infinite;
  }
  
  .border:nth-child(8) {
    left: 27.85806vw;
    top: 25.5479vh;
    width: 4px;
    height: 7.10439px;
    -webkit-animation: 2.65093s falling 0.3s ease-in infinite;
            animation: 2.65093s falling 0.3s ease-in infinite;
  }
  
  .raindrop:nth-child(9) {
    left: 8.91327vw;
    top: 40.31462vh;
    width: 14px;
    height: 15.98821px;
    background-position: 8.91327% 40.31462%;
    -webkit-animation: 1.18088s falling 0.3s ease-in infinite;
            animation: 1.18088s falling 0.3s ease-in infinite;
  }
  
  .border:nth-child(9) {
    left: 8.91327vw;
    top: 40.31462vh;
    width: 10px;
    height: 15.98821px;
    -webkit-animation: 1.18088s falling 0.3s ease-in infinite;
            animation: 1.18088s falling 0.3s ease-in infinite;
  }
  
  .raindrop:nth-child(10) {
    left: 26.45584vw;
    top: 36.95411vh;
    width: 6px;
    height: 6.94801px;
    background-position: 26.45584% 36.95411%;
    -webkit-animation: 2.27066s falling 0.3s ease-in infinite;
            animation: 2.27066s falling 0.3s ease-in infinite;
  }
  
  .border:nth-child(10) {
    left: 26.45584vw;
    top: 36.95411vh;
    width: 2px;
    height: 6.94801px;
    -webkit-animation: 2.27066s falling 0.3s ease-in infinite;
            animation: 2.27066s falling 0.3s ease-in infinite;
  }
  
  .raindrop:nth-child(11) {
    left: 62.50966vw;
    top: 16.51731vh;
    width: 9px;
    height: 7.55903px;
    background-position: 62.50966% 16.51731%;
    -webkit-animation: 2.19176s falling 0.3s ease-in infinite;
            animation: 2.19176s falling 0.3s ease-in infinite;
  }
  
  .border:nth-child(11) {
    left: 62.50966vw;
    top: 16.51731vh;
    width: 5px;
    height: 7.55903px;
    -webkit-animation: 2.19176s falling 0.3s ease-in infinite;
            animation: 2.19176s falling 0.3s ease-in infinite;
  }
  
  .raindrop:nth-child(12) {
    left: 34.77929vw;
    top: 9.23411vh;
    width: 6px;
    height: 6.50705px;
    background-position: 34.77929% 9.23411%;
    -webkit-animation: 2.20455s falling 0.3s ease-in infinite;
            animation: 2.20455s falling 0.3s ease-in infinite;
  }
  
  .border:nth-child(12) {
    left: 34.77929vw;
    top: 9.23411vh;
    width: 2px;
    height: 6.50705px;
    -webkit-animation: 2.20455s falling 0.3s ease-in infinite;
            animation: 2.20455s falling 0.3s ease-in infinite;
  }
  
  .raindrop:nth-child(13) {
    left: 27.24957vw;
    top: 8.1466vh;
    width: 14px;
    height: 12.63108px;
    background-position: 27.24957% 8.1466%;
    -webkit-animation: 2.59341s falling 0.3s ease-in infinite;
            animation: 2.59341s falling 0.3s ease-in infinite;
  }
  
  .border:nth-child(13) {
    left: 27.24957vw;
    top: 8.1466vh;
    width: 10px;
    height: 12.63108px;
    -webkit-animation: 2.59341s falling 0.3s ease-in infinite;
            animation: 2.59341s falling 0.3s ease-in infinite;
  }
  
  .raindrop:nth-child(14) {
    left: 96.80416vw;
    top: 48.90807vh;
    width: 12px;
    height: 9.7663px;
    background-position: 96.80416% 48.90807%;
    -webkit-animation: 2.52809s falling 0.3s ease-in infinite;
            animation: 2.52809s falling 0.3s ease-in infinite;
  }
  
  .border:nth-child(14) {
    left: 96.80416vw;
    top: 48.90807vh;
    width: 8px;
    height: 9.7663px;
    -webkit-animation: 2.52809s falling 0.3s ease-in infinite;
            animation: 2.52809s falling 0.3s ease-in infinite;
  }
  
  .raindrop:nth-child(15) {
    left: 28.57202vw;
    top: 76.6333vh;
    width: 12px;
    height: 13.33989px;
    background-position: 28.57202% 76.6333%;
    -webkit-animation: 2.03413s falling 0.3s ease-in infinite;
            animation: 2.03413s falling 0.3s ease-in infinite;
  }
  
  .border:nth-child(15) {
    left: 28.57202vw;
    top: 76.6333vh;
    width: 8px;
    height: 13.33989px;
    -webkit-animation: 2.03413s falling 0.3s ease-in infinite;
            animation: 2.03413s falling 0.3s ease-in infinite;
  }
  
  .raindrop:nth-child(16) {
    left: 78.37269vw;
    top: 39.20233vh;
    width: 8px;
    height: 9.50339px;
    background-position: 78.37269% 39.20233%;
    -webkit-animation: 1.88546s falling 0.3s ease-in infinite;
            animation: 1.88546s falling 0.3s ease-in infinite;
  }
  
  .border:nth-child(16) {
    left: 78.37269vw;
    top: 39.20233vh;
    width: 4px;
    height: 9.50339px;
    -webkit-animation: 1.88546s falling 0.3s ease-in infinite;
            animation: 1.88546s falling 0.3s ease-in infinite;
  }
  
  .raindrop:nth-child(17) {
    left: 67.32862vw;
    top: 21.46694vh;
    width: 9px;
    height: 6.43129px;
    background-position: 67.32862% 21.46694%;
    -webkit-animation: 2.54483s falling 0.3s ease-in infinite;
            animation: 2.54483s falling 0.3s ease-in infinite;
  }
  
  .border:nth-child(17) {
    left: 67.32862vw;
    top: 21.46694vh;
    width: 5px;
    height: 6.43129px;
    -webkit-animation: 2.54483s falling 0.3s ease-in infinite;
            animation: 2.54483s falling 0.3s ease-in infinite;
  }
  
  .raindrop:nth-child(18) {
    left: 6.48706vw;
    top: 74.11866vh;
    width: 16px;
    height: 17.34826px;
    background-position: 6.48706% 74.11866%;
    -webkit-animation: 3.4824s falling 0.3s ease-in infinite;
            animation: 3.4824s falling 0.3s ease-in infinite;
  }
  
  .border:nth-child(18) {
    left: 6.48706vw;
    top: 74.11866vh;
    width: 12px;
    height: 17.34826px;
    -webkit-animation: 3.4824s falling 0.3s ease-in infinite;
            animation: 3.4824s falling 0.3s ease-in infinite;
  }
  
  .raindrop:nth-child(19) {
    left: 47.47084vw;
    top: 3.63808vh;
    width: 16px;
    height: 13.46968px;
    background-position: 47.47084% 3.63808%;
    -webkit-animation: 2.64643s falling 0.3s ease-in infinite;
            animation: 2.64643s falling 0.3s ease-in infinite;
  }
  
  .border:nth-child(19) {
    left: 47.47084vw;
    top: 3.63808vh;
    width: 12px;
    height: 13.46968px;
    -webkit-animation: 2.64643s falling 0.3s ease-in infinite;
            animation: 2.64643s falling 0.3s ease-in infinite;
  }
  
  .raindrop:nth-child(20) {
    left: 95.26701vw;
    top: 7.2519vh;
    width: 16px;
    height: 18.00949px;
    background-position: 95.26701% 7.2519%;
    -webkit-animation: 2.29859s falling 0.3s ease-in infinite;
            animation: 2.29859s falling 0.3s ease-in infinite;
  }
  
  .border:nth-child(20) {
    left: 95.26701vw;
    top: 7.2519vh;
    width: 12px;
    height: 18.00949px;
    -webkit-animation: 2.29859s falling 0.3s ease-in infinite;
            animation: 2.29859s falling 0.3s ease-in infinite;
  }
  
  .raindrop:nth-child(21) {
    left: 50.74041vw;
    top: 19.29607vh;
    width: 15px;
    height: 16.51675px;
    background-position: 50.74041% 19.29607%;
    -webkit-animation: 2.41131s falling 0.3s ease-in infinite;
            animation: 2.41131s falling 0.3s ease-in infinite;
  }
  
  .border:nth-child(21) {
    left: 50.74041vw;
    top: 19.29607vh;
    width: 11px;
    height: 16.51675px;
    -webkit-animation: 2.41131s falling 0.3s ease-in infinite;
            animation: 2.41131s falling 0.3s ease-in infinite;
  }
  
  .raindrop:nth-child(22) {
    left: 5.64536vw;
    top: 66.39351vh;
    width: 7px;
    height: 6.26128px;
    background-position: 5.64536% 66.39351%;
    -webkit-animation: 2.62917s falling 0.3s ease-in infinite;
            animation: 2.62917s falling 0.3s ease-in infinite;
  }
  
  .border:nth-child(22) {
    left: 5.64536vw;
    top: 66.39351vh;
    width: 3px;
    height: 6.26128px;
    -webkit-animation: 2.62917s falling 0.3s ease-in infinite;
            animation: 2.62917s falling 0.3s ease-in infinite;
  }
  
  .raindrop:nth-child(23) {
    left: 9.07355vw;
    top: 72.60998vh;
    width: 13px;
    height: 15.22784px;
    background-position: 9.07355% 72.60998%;
    -webkit-animation: 2.94513s falling 0.3s ease-in infinite;
            animation: 2.94513s falling 0.3s ease-in infinite;
  }
  
  .border:nth-child(23) {
    left: 9.07355vw;
    top: 72.60998vh;
    width: 9px;
    height: 15.22784px;
    -webkit-animation: 2.94513s falling 0.3s ease-in infinite;
            animation: 2.94513s falling 0.3s ease-in infinite;
  }
  
  .raindrop:nth-child(24) {
    left: 10.12111vw;
    top: 26.86273vh;
    width: 6px;
    height: 5.05314px;
    background-position: 10.12111% 26.86273%;
    -webkit-animation: 2.57854s falling 0.3s ease-in infinite;
            animation: 2.57854s falling 0.3s ease-in infinite;
  }
  
  .border:nth-child(24) {
    left: 10.12111vw;
    top: 26.86273vh;
    width: 2px;
    height: 5.05314px;
    -webkit-animation: 2.57854s falling 0.3s ease-in infinite;
            animation: 2.57854s falling 0.3s ease-in infinite;
  }
  
  .raindrop:nth-child(25) {
    left: 48.53756vw;
    top: 59.33722vh;
    width: 12px;
    height: 9.7405px;
    background-position: 48.53756% 59.33722%;
    -webkit-animation: 1.59563s falling 0.3s ease-in infinite;
            animation: 1.59563s falling 0.3s ease-in infinite;
  }
  
  .border:nth-child(25) {
    left: 48.53756vw;
    top: 59.33722vh;
    width: 8px;
    height: 9.7405px;
    -webkit-animation: 1.59563s falling 0.3s ease-in infinite;
            animation: 1.59563s falling 0.3s ease-in infinite;
  }
  
  .raindrop:nth-child(26) {
    left: 64.25713vw;
    top: 97.75651vh;
    width: 9px;
    height: 10.62307px;
    background-position: 64.25713% 97.75651%;
    -webkit-animation: 1.93975s falling 0.3s ease-in infinite;
            animation: 1.93975s falling 0.3s ease-in infinite;
  }
  
  .border:nth-child(26) {
    left: 64.25713vw;
    top: 97.75651vh;
    width: 5px;
    height: 10.62307px;
    -webkit-animation: 1.93975s falling 0.3s ease-in infinite;
            animation: 1.93975s falling 0.3s ease-in infinite;
  }
  
  .raindrop:nth-child(27) {
    left: 36.04033vw;
    top: 72.92218vh;
    width: 6px;
    height: 4.73592px;
    background-position: 36.04033% 72.92218%;
    -webkit-animation: 2.88779s falling 0.3s ease-in infinite;
            animation: 2.88779s falling 0.3s ease-in infinite;
  }
  
  .border:nth-child(27) {
    left: 36.04033vw;
    top: 72.92218vh;
    width: 2px;
    height: 4.73592px;
    -webkit-animation: 2.88779s falling 0.3s ease-in infinite;
            animation: 2.88779s falling 0.3s ease-in infinite;
  }
  
  .raindrop:nth-child(28) {
    left: 51.49115vw;
    top: 37.36542vh;
    width: 7px;
    height: 6.58546px;
    background-position: 51.49115% 37.36542%;
    -webkit-animation: 1.50044s falling 0.3s ease-in infinite;
            animation: 1.50044s falling 0.3s ease-in infinite;
  }
  
  .border:nth-child(28) {
    left: 51.49115vw;
    top: 37.36542vh;
    width: 3px;
    height: 6.58546px;
    -webkit-animation: 1.50044s falling 0.3s ease-in infinite;
            animation: 1.50044s falling 0.3s ease-in infinite;
  }
  
  .raindrop:nth-child(29) {
    left: 84.9836vw;
    top: 17.497vh;
    width: 13px;
    height: 9.50666px;
    background-position: 84.9836% 17.497%;
    -webkit-animation: 2.07243s falling 0.3s ease-in infinite;
            animation: 2.07243s falling 0.3s ease-in infinite;
  }
  
  .border:nth-child(29) {
    left: 84.9836vw;
    top: 17.497vh;
    width: 9px;
    height: 9.50666px;
    -webkit-animation: 2.07243s falling 0.3s ease-in infinite;
            animation: 2.07243s falling 0.3s ease-in infinite;
  }
  
  .raindrop:nth-child(30) {
    left: 86.3673vw;
    top: 58.0922vh;
    width: 8px;
    height: 7.53888px;
    background-position: 86.3673% 58.0922%;
    -webkit-animation: 2.51866s falling 0.3s ease-in infinite;
            animation: 2.51866s falling 0.3s ease-in infinite;
  }
  
  .border:nth-child(30) {
    left: 86.3673vw;
    top: 58.0922vh;
    width: 4px;
    height: 7.53888px;
    -webkit-animation: 2.51866s falling 0.3s ease-in infinite;
            animation: 2.51866s falling 0.3s ease-in infinite;
  }
  
  .raindrop:nth-child(31) {
    left: 28.38763vw;
    top: 4.97887vh;
    width: 16px;
    height: 13.42529px;
    background-position: 28.38763% 4.97887%;
    -webkit-animation: 1.74631s falling 0.3s ease-in infinite;
            animation: 1.74631s falling 0.3s ease-in infinite;
  }
  
  .border:nth-child(31) {
    left: 28.38763vw;
    top: 4.97887vh;
    width: 12px;
    height: 13.42529px;
    -webkit-animation: 1.74631s falling 0.3s ease-in infinite;
            animation: 1.74631s falling 0.3s ease-in infinite;
  }
  
  .raindrop:nth-child(32) {
    left: 56.83646vw;
    top: 66.56558vh;
    width: 10px;
    height: 7.67686px;
    background-position: 56.83646% 66.56558%;
    -webkit-animation: 2.58629s falling 0.3s ease-in infinite;
            animation: 2.58629s falling 0.3s ease-in infinite;
  }
  
  .border:nth-child(32) {
    left: 56.83646vw;
    top: 66.56558vh;
    width: 6px;
    height: 7.67686px;
    -webkit-animation: 2.58629s falling 0.3s ease-in infinite;
            animation: 2.58629s falling 0.3s ease-in infinite;
  }
  
  .raindrop:nth-child(33) {
    left: 79.13957vw;
    top: 11.41727vh;
    width: 8px;
    height: 6.21316px;
    background-position: 79.13957% 11.41727%;
    -webkit-animation: 2.66106s falling 0.3s ease-in infinite;
            animation: 2.66106s falling 0.3s ease-in infinite;
  }
  
  .border:nth-child(33) {
    left: 79.13957vw;
    top: 11.41727vh;
    width: 4px;
    height: 6.21316px;
    -webkit-animation: 2.66106s falling 0.3s ease-in infinite;
            animation: 2.66106s falling 0.3s ease-in infinite;
  }
  
  .raindrop:nth-child(34) {
    left: 45.21148vw;
    top: 37.1654vh;
    width: 9px;
    height: 10.76434px;
    background-position: 45.21148% 37.1654%;
    -webkit-animation: 3.2146s falling 0.3s ease-in infinite;
            animation: 3.2146s falling 0.3s ease-in infinite;
  }
  
  .border:nth-child(34) {
    left: 45.21148vw;
    top: 37.1654vh;
    width: 5px;
    height: 10.76434px;
    -webkit-animation: 3.2146s falling 0.3s ease-in infinite;
            animation: 3.2146s falling 0.3s ease-in infinite;
  }
  
  .raindrop:nth-child(35) {
    left: 50.02184vw;
    top: 40.59314vh;
    width: 13px;
    height: 10.73909px;
    background-position: 50.02184% 40.59314%;
    -webkit-animation: 1.84915s falling 0.3s ease-in infinite;
            animation: 1.84915s falling 0.3s ease-in infinite;
  }
  
  .border:nth-child(35) {
    left: 50.02184vw;
    top: 40.59314vh;
    width: 9px;
    height: 10.73909px;
    -webkit-animation: 1.84915s falling 0.3s ease-in infinite;
            animation: 1.84915s falling 0.3s ease-in infinite;
  }
  
  .raindrop:nth-child(36) {
    left: 59.01533vw;
    top: 79.31974vh;
    width: 6px;
    height: 4.60668px;
    background-position: 59.01533% 79.31974%;
    -webkit-animation: 3.37333s falling 0.3s ease-in infinite;
            animation: 3.37333s falling 0.3s ease-in infinite;
  }
  
  .border:nth-child(36) {
    left: 59.01533vw;
    top: 79.31974vh;
    width: 2px;
    height: 4.60668px;
    -webkit-animation: 3.37333s falling 0.3s ease-in infinite;
            animation: 3.37333s falling 0.3s ease-in infinite;
  }
  
  .raindrop:nth-child(37) {
    left: 93.52692vw;
    top: 21.69911vh;
    width: 16px;
    height: 16.76807px;
    background-position: 93.52692% 21.69911%;
    -webkit-animation: 1.47578s falling 0.3s ease-in infinite;
            animation: 1.47578s falling 0.3s ease-in infinite;
  }
  
  .border:nth-child(37) {
    left: 93.52692vw;
    top: 21.69911vh;
    width: 12px;
    height: 16.76807px;
    -webkit-animation: 1.47578s falling 0.3s ease-in infinite;
            animation: 1.47578s falling 0.3s ease-in infinite;
  }
  
  .raindrop:nth-child(38) {
    left: 29.40268vw;
    top: 56.07803vh;
    width: 11px;
    height: 11.01865px;
    background-position: 29.40268% 56.07803%;
    -webkit-animation: 3.13656s falling 0.3s ease-in infinite;
            animation: 3.13656s falling 0.3s ease-in infinite;
  }
  
  .border:nth-child(38) {
    left: 29.40268vw;
    top: 56.07803vh;
    width: 7px;
    height: 11.01865px;
    -webkit-animation: 3.13656s falling 0.3s ease-in infinite;
            animation: 3.13656s falling 0.3s ease-in infinite;
  }
  
  .raindrop:nth-child(39) {
    left: 61.75068vw;
    top: 15.08214vh;
    width: 8px;
    height: 6.02559px;
    background-position: 61.75068% 15.08214%;
    -webkit-animation: 1.16132s falling 0.3s ease-in infinite;
            animation: 1.16132s falling 0.3s ease-in infinite;
  }
  
  .border:nth-child(39) {
    left: 61.75068vw;
    top: 15.08214vh;
    width: 4px;
    height: 6.02559px;
    -webkit-animation: 1.16132s falling 0.3s ease-in infinite;
            animation: 1.16132s falling 0.3s ease-in infinite;
  }
  
  .raindrop:nth-child(40) {
    left: 74.33622vw;
    top: 89.21578vh;
    width: 9px;
    height: 8.11386px;
    background-position: 74.33622% 89.21578%;
    -webkit-animation: 1.77772s falling 0.3s ease-in infinite;
            animation: 1.77772s falling 0.3s ease-in infinite;
  }
  
  .border:nth-child(40) {
    left: 74.33622vw;
    top: 89.21578vh;
    width: 5px;
    height: 8.11386px;
    -webkit-animation: 1.77772s falling 0.3s ease-in infinite;
            animation: 1.77772s falling 0.3s ease-in infinite;
  }
  
  .raindrop:nth-child(41) {
    left: 85.70258vw;
    top: 64.19973vh;
    width: 10px;
    height: 11.24429px;
    background-position: 85.70258% 64.19973%;
    -webkit-animation: 2.95057s falling 0.3s ease-in infinite;
            animation: 2.95057s falling 0.3s ease-in infinite;
  }
  
  .border:nth-child(41) {
    left: 85.70258vw;
    top: 64.19973vh;
    width: 6px;
    height: 11.24429px;
    -webkit-animation: 2.95057s falling 0.3s ease-in infinite;
            animation: 2.95057s falling 0.3s ease-in infinite;
  }
  
  .raindrop:nth-child(42) {
    left: 16.69013vw;
    top: 10.7918vh;
    width: 16px;
    height: 12.71325px;
    background-position: 16.69013% 10.7918%;
    -webkit-animation: 3.03993s falling 0.3s ease-in infinite;
            animation: 3.03993s falling 0.3s ease-in infinite;
  }
  
  .border:nth-child(42) {
    left: 16.69013vw;
    top: 10.7918vh;
    width: 12px;
    height: 12.71325px;
    -webkit-animation: 3.03993s falling 0.3s ease-in infinite;
            animation: 3.03993s falling 0.3s ease-in infinite;
  }
  
  .raindrop:nth-child(43) {
    left: 8.50224vw;
    top: 20.21958vh;
    width: 15px;
    height: 12.64801px;
    background-position: 8.50224% 20.21958%;
    -webkit-animation: 1.92279s falling 0.3s ease-in infinite;
            animation: 1.92279s falling 0.3s ease-in infinite;
  }
  
  .border:nth-child(43) {
    left: 8.50224vw;
    top: 20.21958vh;
    width: 11px;
    height: 12.64801px;
    -webkit-animation: 1.92279s falling 0.3s ease-in infinite;
            animation: 1.92279s falling 0.3s ease-in infinite;
  }
  
  .raindrop:nth-child(44) {
    left: 82.06158vw;
    top: 84.34299vh;
    width: 12px;
    height: 13.30798px;
    background-position: 82.06158% 84.34299%;
    -webkit-animation: 1.31889s falling 0.3s ease-in infinite;
            animation: 1.31889s falling 0.3s ease-in infinite;
  }
  
  .border:nth-child(44) {
    left: 82.06158vw;
    top: 84.34299vh;
    width: 8px;
    height: 13.30798px;
    -webkit-animation: 1.31889s falling 0.3s ease-in infinite;
            animation: 1.31889s falling 0.3s ease-in infinite;
  }
  
  .raindrop:nth-child(45) {
    left: 45.31586vw;
    top: 68.59014vh;
    width: 12px;
    height: 14.37019px;
    background-position: 45.31586% 68.59014%;
    -webkit-animation: 2.49808s falling 0.3s ease-in infinite;
            animation: 2.49808s falling 0.3s ease-in infinite;
  }
  
  .border:nth-child(45) {
    left: 45.31586vw;
    top: 68.59014vh;
    width: 8px;
    height: 14.37019px;
    -webkit-animation: 2.49808s falling 0.3s ease-in infinite;
            animation: 2.49808s falling 0.3s ease-in infinite;
  }
  
  .raindrop:nth-child(46) {
    left: 45.00332vw;
    top: 64.97602vh;
    width: 11px;
    height: 12.05813px;
    background-position: 45.00332% 64.97602%;
    -webkit-animation: 2.47618s falling 0.3s ease-in infinite;
            animation: 2.47618s falling 0.3s ease-in infinite;
  }
  
  .border:nth-child(46) {
    left: 45.00332vw;
    top: 64.97602vh;
    width: 7px;
    height: 12.05813px;
    -webkit-animation: 2.47618s falling 0.3s ease-in infinite;
            animation: 2.47618s falling 0.3s ease-in infinite;
  }
  
  .raindrop:nth-child(47) {
    left: 24.29523vw;
    top: 97.97024vh;
    width: 16px;
    height: 18.41519px;
    background-position: 24.29523% 97.97024%;
    -webkit-animation: 3.31584s falling 0.3s ease-in infinite;
            animation: 3.31584s falling 0.3s ease-in infinite;
  }
  
  .border:nth-child(47) {
    left: 24.29523vw;
    top: 97.97024vh;
    width: 12px;
    height: 18.41519px;
    -webkit-animation: 3.31584s falling 0.3s ease-in infinite;
            animation: 3.31584s falling 0.3s ease-in infinite;
  }
  
  .raindrop:nth-child(48) {
    left: 68.77092vw;
    top: 2.59879vh;
    width: 12px;
    height: 13.03424px;
    background-position: 68.77092% 2.59879%;
    -webkit-animation: 2.70973s falling 0.3s ease-in infinite;
            animation: 2.70973s falling 0.3s ease-in infinite;
  }
  
  .border:nth-child(48) {
    left: 68.77092vw;
    top: 2.59879vh;
    width: 8px;
    height: 13.03424px;
    -webkit-animation: 2.70973s falling 0.3s ease-in infinite;
            animation: 2.70973s falling 0.3s ease-in infinite;
  }
  
  .raindrop:nth-child(49) {
    left: 48.86033vw;
    top: 70.71638vh;
    width: 15px;
    height: 11.12122px;
    background-position: 48.86033% 70.71638%;
    -webkit-animation: 2.94634s falling 0.3s ease-in infinite;
            animation: 2.94634s falling 0.3s ease-in infinite;
  }
  
  .border:nth-child(49) {
    left: 48.86033vw;
    top: 70.71638vh;
    width: 11px;
    height: 11.12122px;
    -webkit-animation: 2.94634s falling 0.3s ease-in infinite;
            animation: 2.94634s falling 0.3s ease-in infinite;
  }
  
  .raindrop:nth-child(50) {
    left: 27.74012vw;
    top: 28.50559vh;
    width: 9px;
    height: 7.48643px;
    background-position: 27.74012% 28.50559%;
    -webkit-animation: 2.62661s falling 0.3s ease-in infinite;
            animation: 2.62661s falling 0.3s ease-in infinite;
  }
  
  .border:nth-child(50) {
    left: 27.74012vw;
    top: 28.50559vh;
    width: 5px;
    height: 7.48643px;
    -webkit-animation: 2.62661s falling 0.3s ease-in infinite;
            animation: 2.62661s falling 0.3s ease-in infinite;
  }
 
  
  @-webkit-keyframes falling {
    to {
      -webkit-transform: translateY(500px);
              transform: translateY(500px);
    }
  }
  
  @keyframes falling {
    to {
      -webkit-transform: translateY(500px);
              transform: translateY(500px);
    }
  }
`