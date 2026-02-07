import styled from "styled-components";
import {THEME_MEDIA_ENUM} from "../../../context/theme";

export const WhatIsWeFutureView = styled.div`
  max-width: 100vw;
  overflow: hidden;
  width: 100%;
  padding: 100px 0 35px;
  background: linear-gradient(177deg, #C2B9FF 0%, rgba(255, 255, 255, 0) 100%);

  & > div {
    max-width: 882px;
    margin: 0 auto;
    text-align: center;

    & > h1 {
      font-size: 72px;
      font-weight: bold;
      color: #32313B;
      line-height: 72px;
      margin-bottom: 40px;
      mask: radial-gradient(circle at 50% 0, #000, transparent 20%, transparent 0);
      mask-size: 100% 100%;
      &.ani{
        animation: masktxt1 15s linear 1, masknone 1ms infinite 15s;
      }
    }

    & > div {
      & > p {
        font-size: 18px;
        font-weight: 400;
        color: #32313B;
        line-height: 30px;
        margin-top: 20px;
      }
      &.ani{
        mask: radial-gradient(circle at 0 1%, #fff, transparent 10%, transparent 0);
        mask-size: 100%;
        animation: masktxt2 20s 1, masknone 1ms infinite 15s;
      }
    }

    .poster {
      position: relative;
      width: 100%;
      margin-top: -10%;

      & > img {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        transition: all 100ms;
        transform: translate3d(1);
      }
      /*.poster-group2 {
        transform: translate3d(-200px, -200px, 0);
        opacity: 0;
      }
      .poster-group3 {
        transform: translate3d(200px, -200px, 0);
        opacity: 0;
      }
      .poster-group4 {
        transform: translate3d(200px, 0, 0);
        opacity: 0;
      }*/
      .poster-placeholder {
        position: relative;
        width: 100%;
        height: auto;
        opacity: 0;
      }
    }
  }

  &.ani{
    @keyframes float1 {
      0% {
        transform: translate3d(0, 0, 0);
      }
      50% {
        transform: translate3d(0, 20px, 0);
      }
      100% {
        transform: translate3d(0, 0, 0);
      }
    }
    .poster-group1 {
      animation: float1 5s ease-in-out infinite;
    }
    .poster-group2 {

      animation:  float1 5s ease-in-out 1s infinite;
    }
    .poster-group3 {
     
      animation: float1 5s ease-in-out 2s infinite;
    }
    .poster-group4 {
   
      animation:  float1 5s ease-in-out 1.5s infinite;
    }
  }
  ${THEME_MEDIA_ENUM.small} {
    padding: 58px 20px;
    box-sizing: border-box;
    background: linear-gradient(177deg, #C2B9FF 0%, rgba(255, 255, 255, 0) 100%);

    & > div {
      max-width: 100vw;

      & > h1 {
        font-size: 36px;
        line-height: 36px;
        margin-bottom: 40px;
        white-space: pre-wrap;
      }

      & > p {
        font-size: 16px;
      }
    }
  }
`
