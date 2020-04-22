import styled from "styled-components";

export default styled.div`
  /* 标签颜色 */
  .hljs-variable,
  .hljs-template-variable,
  .hljs-tag,
  .hljs-name,
  .hljs-selector-id,
  .hljs-selector-class,
  .hljs-regexp,
  .hljs-deletion {
    color: pink;
  }
  .hljs-selector-tag {
    color: #008000;
  }
  .hljs-selector-attr {
  }
  .hljs-attribute {
  }
  code {
    padding: 2px 4px;
    font-size: 90%;
    color: #000;
    border-radius: 4px;
  }

  .for-container {
    border: none;
    box-shadow: none;
    height: auto;
  }

  pre {
    position: relative;
    background: rgb(248, 248, 248) !important;
    color: #000;
    padding-top: 40px !important;
    box-shadow: 0 0 2px 0 #000;
    &:before {
      position: absolute;
      top: 0;
      left: 0;
      content: "Code";
      display: block;
      width: 100%;
      height: 30px;
      line-height: 30px;
      padding: 0 5px;
      background: -webkit-linear-gradient(right, #79f1a4, #0e5cad);
      color: #fff;
    }
  }
`;
