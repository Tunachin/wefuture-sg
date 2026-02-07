import styled from "styled-components";

import {THEME_MEDIA_ENUM} from "../../../context/theme";
export const WhatIsWeDesignView = styled.div`
  max-width: 100vw;
  overflow: hidden;
  padding: 118px 0;
  background-color: #0A0913;
  position: relative;
  .we-design {
    position: relative;
    z-index: 1;
    max-width: 1200px;
    margin: 0 auto;
    .title-tag{
      margin: 0 auto;
      font-size: 14px;
      font-weight: 500;
      color: #FFFFFF;
      line-height: 14px;
      width: 195px;
      height: 32px;
      background: #8578E6;
      border-radius: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &>h1{
      font-size: 72px;
      font-weight: bold;
      color: #FBF9F4;
      background: linear-gradient(157deg, #8578E6 0, #FFFFFF 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      text-align: center;
      margin-top: 20px;
      mask: radial-gradient(circle at 50% 0, #000, transparent 20%, transparent 0);
      mask-size: 100% 100%;;
      &.ani{
        animation: masktxt1 15s 1, masknone 1ms infinite 15s;
      }
    }
    .about-view {
      margin-top: 110px;
      display: flex;

      .about-view-img {
        position: relative;
        flex: 1;

        img {
          width: 100%;
          position: absolute;
          left: 0;
          top: 0;
        }

        .poster-dapps {
          transform: translateX(-300px);
          opacity: 0;
        }

        .poster-create {
          transform: translateX(-300px);
          opacity: 0;
        }

        .poster-hand {
          transform: translateY(300px);
          opacity: 0;
        }

        .poster-icon1 {
          transform: translateY(-300px);
          opacity: 0;
        }

        .poster-icon2 {
          transform: translateY(-300px);
          opacity: 0;
        }

        .poster-icon3 {
          transform: translateY(-300px);
          opacity: 0;
        }

        .poster-placeholder {
          position: relative;
          width: 100%;
          height: auto;
          opacity: 0;
        }
      }

      &.ani {
        .about-view-img {
          .poster-dapps {
            transform: translate(0, 0);
            opacity: 1;
            transition: all 1s ease-in;
          }

          .poster-create {
            transform: translate(0, 0);
            opacity: 1;
            transition: all 1s ease-in 0.5s;
          }

          .poster-hand {
            transform: translate(0, 0);
            opacity: 1;
            transition: all 1s ease-in;
          }

          .poster-icon1 {
            transform: translate(0, 0);
            opacity: 1;
            transition: all 1s ease-in 1s;
          }

          .poster-icon2 {
            transform: translate(0, 0);
            opacity: 1;
            transition: all 1s ease-in 0.5s;
          }

          .poster-icon3 {
            transform: translate(0, 0);
            opacity: 1;
            transition: all 1s ease-in;
          }
        }
        //.about-wallekit{
        //  mask: radial-gradient(circle at 0 1%, #fff, transparent 10%, transparent 0);
        //  mask-size: 100%;
        //  animation: masktxt2 15s 1, masknone 1ms infinite 15s;
        //}
      }
      .about-wallekit{
        width: 490px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        &>h1{
          font-size: 40px;
          font-weight: bold;
          color: #FBF9F4;
          line-height: 48px;
        }
        &>p{
          font-size: 18px;
          font-weight: 400;
          color: #FBF9F4;
          line-height: 33px;
          margin: 20px 0 10px 0;
        }
        &>div{
          display: flex;
          margin-top: 30px;
          &>img{
            width: 16px;
            height: 16px;
            margin-right: 20px;
            margin-top: 2px;
          }
          &>span{
            display: block;
            flex: 1;
            font-size: 14px;
            font-weight: 400;
            color: #FBF9F4;
            line-height: 20px;
          }
        }
      }
    }
    &>h2{
      font-size: 40px;
      font-weight: 600;
      color: #FBF9F4;
      line-height: 48px;
      margin-top: 165px;
    }
    .application-scenarios{
      display: grid;
      grid-template-columns: 1fr 1fr;
      margin-top: 60px;
      .left-tab{
        .left-tab-item{
          padding: 40px 0;
          border-left: 1px solid #212028;
          display: flex;
          cursor: pointer;
          &>div{
            padding: 0 23px;
            font-size: 18px;
            font-weight: bold;
            color: #8578E6;
            line-height: 22px;
            display: flex;
            align-items: center;
            opacity: 0;
          }
          &>span{
            max-width: 440px;
            font-size: 28px;
            font-weight: 400;
            color: #FBF9F4;
            line-height: 50px;
            opacity: 0.4;
          }
          &.active{
            border-left: 1px solid #8578E6;
            &>span{
              opacity: 1;
            }
            &>div{
              opacity: 1;
            }
          }
          &.view-case{
            padding: 40px 0 0 0;
            cursor: default;
          }
        }
      }
      .right-poster{
        &>img{
          width: 100%;
          transition: all 0.1s linear;
          transform: scale(0);
          &.ani{
            transform: scale(1);
          }
        }
      }
    }
    .h5-poster{
      display: none;
    }
  }

  .line-bg{
    width: 100%;
    max-width: 1200px;
    display: block;
    margin: 0 auto;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 50%);
  }
  
  ${THEME_MEDIA_ENUM.small}{
    background-position: left bottom -65px;
    padding: 60px 0;
    .we-design{
      max-width: 100vw;
      &>h1{
        font-size: 36px;
        margin-top: 26px;
      }
      .about-view{
        flex-direction: column;
        padding: 0 20px;
        margin-top: 30px;
        .about-wallekit{
          width: 100%;
          margin-top: 60px;
          &>h1{
            font-size: 34px;
          }
        }
      }
      &>h2{
        font-size: 34px;
        margin-top: 60px;
        padding: 0 28px;
      }

      .application-scenarios{
        grid-template-columns: 1fr;
        margin-top: 40px;
        .left-tab{
          .left-tab-item{
            padding: 20px 0;
            &>div{
              padding: 0 23px;
              font-size: 18px;
              line-height: 22px;
            }
            &>span{
              padding-right: 25px;
              font-size: 18px;
              line-height: 28px;
            }
            &.view-case{
              padding: 40px 0 0 0;
            }
          }
          .h5-poster{
            display: block;
            padding: 0 18px 0 70px ;
            img{
              width: 280px;
              transition: all 0.1s linear;
              transform: scale(0);
              &.ani{
                transform: scale(1);
              }
            }
            
          }
        }
        .right-poster{
          display: none;
        }
      }
    }
  }
`
