import styled from 'styled-components';
import {THEME_MEDIA_ENUM} from "../../context/theme";

export const HeaderView = styled.div`
  .header-view {
    max-width: 1200px;
    padding: 14px;
    margin: 0 auto;
    display: flex;

    .logo {
      width: 240px;
      height: 52px;
      &>img{
        width: 100%;
        height: 100%;
      }
    }

    .header-navs {
      flex: 1;
      display: flex;
      justify-content: end;
      align-items: center;

      .get-start {
        margin-left: 3px;
      }

      .header-nav {
        font-size: 14px;
        font-weight: 500;
        color: #32313B;
        line-height: 22px;
        margin-right: 32px;
        cursor: pointer;
        text-decoration: none;
        position: relative;
        span {
          display: inline-block;
          transition: transform 0.3s cubic-bezier(0.2, 1, 0.8, 1);
        }
       
        &::before {
          content: '';
          transform-origin: 50% 100%;
          transition: clip-path 0.3s, transform 0.3s cubic-bezier(0.2, 1, 0.8, 1);
          clip-path: polygon(0% 0%, 0% 100%, 0 100%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%, 100% 100%, 100% 0%);
        }
        &::before, &::after {
          position: absolute;
          width: 100%;
          height: 1px;
          background: #8578E6;
          top: 100%;
          left: 0;
          pointer-events: none;
        }
        &:hover{
          &::before {
            transform: translate3d(0, 2px, 0) scale3d(1, 3, 1);
            clip-path: polygon(0% 0%, 0% 100%, 50% 100%, 50% 0, 50% 0, 50% 100%, 50% 100%, 0 100%, 100% 100%, 100% 0%);
          }
          span {
            color: #8578E6;
            transform: translate3d(0, -2px, 0);
          }
        }
      }
    }

      .h5-more {
      display: none;
    }
  }

  .h5-more-panel {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 9;
    width: 100vw;
    height: 100vh;
    background: rgba(236, 234, 255, 0.86);
    backdrop-filter: blur(2px);
    box-sizing: border-box;
    transform: translateX(103%);
    transition: all 300ms;
    opacity: 0;
    &.show{
      opacity: 1;
      transform: translateX(0);
    }

    .h5-header-view {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 58px;
      padding: 14px;

      .logo {
        width: 141px;
        height: 30px;
      }

      .closed {
        display: block;
        width: 24px;
        height: 24px;
      }
    }

    .panel-navs {
      padding: 29px;

      .header-nav {

        height: 36px;
        display: block;
        font-size: 14px;
        font-weight: 500;
        color: #32313B;
        line-height: 36px;
        text-decoration: none;
      }
    }
  }

  ${THEME_MEDIA_ENUM.medium} {

  }

  ${THEME_MEDIA_ENUM.small} {
    .header-view {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .header-navs {
        display: none;
      }

      .logo {
        width: 141px;
        height: 30px;
      }

      height: 58px;

      .h5-more {
        display: block;
        width: 24px;
        height: 24px;
      }
    }
    .get-start{
      margin-top: 20px;
    }
  }
`
