import styled from "styled-components";
import LBG from '../../../public/image/blocksign/project01.png'
import {THEME_MEDIA_ENUM} from "../../../context/theme";

export const ProjectHighlightsView = styled.div`

  background: #FFFFFF;
  padding: 120px 0;
  .height-light-view{
    max-width: 1200px;
    margin: 0 auto;
    &>img{
      width: 70px;
      height: 70px;
      display: block;
      margin: 0 auto;
    }
    &>h1{
      margin-top: 20px;
      font-size: 40px;
      font-weight: bold;
      color: #32313B;
      line-height: 60px;
      text-align: center;
    }
    .panel-view{
      margin-top: 80px;
      display: grid;
      grid-template-columns: 464px 1fr;
      grid-column-gap: 20px;
      .panel-view-l{
        width: 464px;
        height: 608px;
        background-color: #0A0913;
        border-radius: 20px;
        position: relative;
        .o-fixed{
          width: 8px;
          height: 8px;
          background: #FBF9F4;
          position: absolute;
          border-radius: 50%;
          &:nth-child(1){
            left: 16px;
            top: 16px;
          }

          &:nth-child(2){
            right: 16px;
            top: 16px;
          }

          &:nth-child(3){
            right: 16px;
            bottom: 16px;
          }

          &:nth-child(4){
            left: 16px;
            bottom: 16px;
          }
        }
        background-image: url(${LBG.src});
        background-position: 132px 280px;
        background-size: 80% auto;
        background-repeat: no-repeat;
        padding: 40px 28px 28px 28px;
        box-sizing: border-box;
        &>h2{
          font-size: 32px;
          font-weight: 400;
          color: #FBF9F4;
          line-height: 48px;
        }
        &>p{
          margin-top: 35px;
          font-size: 18px;
          font-weight: 400;
          color: #FBF9F4;
          line-height: 32px;
        }
        transition: all 200ms;
        &:hover{
          transform: scale(1.02);
        }
      }
      .panel-view-r{
        display: grid;
        grid-template-rows: 1fr 1fr;
        grid-row-gap: 20px;
      }
      .panel-view-r-i{
        border-radius: 20px;
        transition: all 200ms;
        padding: 40px 28px 28px 28px;
        &:hover{
          transform: scale(1.02);
        }
        &>h2{
          font-size: 32px;
          font-weight: 500;
          color: #32313B;
          line-height: 32px;
        }
        &>div{
          display: flex;
          margin-top: 38px;
          justify-content: space-between;
          &>p{
            max-width: 360px;
            font-size: 18px;
            font-weight: 400;
            color: #32313B;
            line-height: 28px;
            align-self: flex-end;
          }
          &>img{
            height: 160px;
            width: 160px;
          }
        }
      }
      .panel-view-r-t{
        background: #EBE9F6;
        
      }
      .panel-view-r-b{
        background: #FFFFFF;
        box-shadow: 0px 0px 20px 10px rgba(235,233,246,0.78);
        &>div{

          &>img{
            transform: scale(1.3);
          }
        }
      }
    }
  }
  
  ${THEME_MEDIA_ENUM.small}{
    padding: 50px 0;
    .height-light-view{
      max-width: 100vw;
      padding: 0 20px;
      &>h1{
        margin-top: 20px;
        font-size: 36px;
      }
      .panel-view{
        margin-top: 20px;
        grid-template-columns: 1fr;
        grid-column-gap: 0;
        grid-row-gap: 16px;
        .panel-view-l{
          width: 100%;
          height: 500px;
          background-size: 240px 240px;
          background-position: right -25px bottom -30px;
          padding: 40px 28px 28px 28px;
          box-sizing: border-box;
          &>p{
            margin-top: 21px;
          }
          &:hover{
            transform: scale(1);
          }
        }
        .panel-view-r{
          display: grid;
          grid-template-rows: 1fr;
          grid-row-gap: 20px;
        }
        .panel-view-r-i{
          padding: 28px 20px;
          &:hover{
            transform: scale(1);
          }
          &>div{
            display: flex;
            margin-top: 0;
            flex-direction: column-reverse;
            &>p{
              max-width: none;
              margin-top: 12px;
            }
            &>img{
              align-self: flex-end;
              height: 160px;
              width: 160px;
            }
          }
        }
        .panel-view-r-b{
          &>div {
            & > img {
              margin-top: 20px;
            }
          }
        }
      }
    }
  }
`
