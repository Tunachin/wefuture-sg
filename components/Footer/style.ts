import styled from "styled-components";
import {THEME_MEDIA_ENUM} from "../../context/theme";

export const FooterView = styled.div<{bg:string}>`
  #sineCanvas{
    background: ${({ bg }) => bg};
    margin-bottom: -10px;
  }
  .footer-box{
    background: #F6F5FF;
    
  }
  .footer-view{
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    &>img{
      width: 320px;
      height: 320px;
      margin-right: 250px;
    }
    .footer-info{
      &>h1{
        font-size: 40px;
        font-weight: bold;
        color: #212028;
      }
      &>div{
        margin-top: 40px;
        display: flex;
        align-items: center;
        &>img{
          width: 24px;
          height: 24px;
          margin-right: 16px;
        }
        &>span{
          font-size: 18px;
          font-weight: 500;
          color: #32313B;
        }
      }
      &>p{
        margin-top: 23px;
        font-size: 18px;
        font-weight: 500;
        color: #32313B;
      }
      &>h4{
        font-size: 18px;
        font-weight: 500;
        color: #8578E6;
        margin:23px 0 -10px 0;
        line-height: 40px;
      }
    }
  }
  .footer-line{
    //background: #ffffff;
    height: 15px;
    margin-top: 100px;
  }
  ${THEME_MEDIA_ENUM.small}{
    .footer-view{
      max-width: 100vw;
      overflow: hidden;
      flex-direction: column-reverse;
      padding: 0 25px;
      &>img{
        width: 100%;
        height: auto;
        margin: 32px 0 0 0;
      }
    }
    .footer-line{
      display: none;
    }
  }
`
