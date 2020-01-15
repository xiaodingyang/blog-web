import styled from "styled-components";

export default styled.div`
    /* 标签颜色 */
    .hljs-variable, .hljs-template-variable, .hljs-tag, .hljs-name, .hljs-selector-id, .hljs-selector-class, .hljs-regexp, .hljs-deletion{
      color: pink;
    }
    .hljs-selector-tag{
      color: #008000;
    }
    .hljs-selector-attr{

    }
    .hljs-attribute{

    }
    code{
      padding: 2px 4px;
      font-size: 90%;
      color: deeppink;
      border-radius: 4px;
    }

    .for-container{
        border: none;
        box-shadow: none;
        height: auto;
    }
    
    pre{
        position: relative;
        background: rgb(32, 34, 37)!important;
        color: #fff;
        padding-top: 40px!important;
        box-shadow: 0 0 5px 0 #000;
        &:before{
            position: absolute;
            top: 0;
            left: 0;
            content: 'Code';
            display: block;
            width: 100%;
            height: 30px;
            line-height: 30px;
            padding: 0 5px;
            background: -webkit-linear-gradient(right, #79F1A4, #0E5CAD);
            color: #fff;
        }
    }
    
`