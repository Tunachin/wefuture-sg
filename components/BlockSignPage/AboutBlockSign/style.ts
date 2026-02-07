import styled from "styled-components";
import {THEME_MEDIA_ENUM} from "../../../context/theme";
import PointerIcon from '../../../public/image/blocksign/pointer.png'
import PenIcon from '../../../public/image/blocksign/pen.svg'

export const AboutBlockSignView = styled.div`
  background: #0A0913;
  padding: 120px 0 130px 0;
  max-width: 100vw;
  overflow: hidden;

  .block-sign-page {
    max-width: 1200px;
    margin: 0 auto;

    & > h1 {
      font-size: 40px;
      font-weight: 600;
      color: #FBF9F4;
    }

    .panel-view {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 20px;
      margin-top: 80px;

      & > div {
        background: #212028;
        border-radius: 20px;
        padding: 23px 40px 40px 40px;
      }

      .code-view {
        position: relative;
        .code-view-loading{
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          z-index: 2;
          background: #212028;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .code-line {
          display: grid;
          grid-template-columns: 40px 1fr;
          padding: 5px 0;
          line-height: 30px;
          color: #FFE4AF;
          font-size: 14px;

          & > span {
            font-weight: 400;
            color: #5B5A67;
          }

          & > p {
            white-space: pre-wrap;
            word-break: break-word;
          }
        }

        .color1 {
          color: #CDF75D;
        }

        .color2 {
          color: #CB7731;
        }

        .color3 {
          color: #8578E6;
        }

        .color4 {
          color: #C65F31;
        }

        .console-line {
          display: grid;
          grid-template-columns: 40px 1fr;
          margin-top: 22px;

          & > div > img {
            width: 16px;
            height: 16px;
            margin-top: 5px;
          }

          & > p {
            font-size: 14px;
            font-weight: 400;
            color: #FBF9F4;
            line-height: 24px;
            flex: 1;

            &.console-ani {
              &::after {
                content: "|";
                animation: blink 1s step-end infinite;
              }

              @keyframes blink {
                from,
                to {
                  opacity: 1;
                }
                50% {
                  opacity: 0;
                }
              }
            }
          }
        }
      }

      .write-ani {
        @keyframes write22 {
          0% {
            left: 0;
            top: 0;
          }
          20% {

            left: 0;
            top: 5px;
          }
          40% {

            left: 5px;
            top: 5px;
          }
          60% {

            left: 0;
            top: 5px;
          }
          80% {

            left: -5px;
            top: 5px;
          }
          100% {

            left: 0;
            top: 0;
          }
        }

        &::after {
          position: relative;
          content: url("${PenIcon.src}");
          animation: write22 1s ease-in infinite;
        }
      }

      .flow-view {
        position: relative;
        padding: 30px;

        cursor: url(${PointerIcon.src}), auto;


        .flow-view-bg {
          width: calc(100% - 60px);
          height: calc(100% - 60px);
          position: absolute;
          left: 30px;
          top: 30px;
          transition: all 200ms linear;
        }

        .flow-view-box {
          padding: 50px 30px 30px 30px;
          position: relative;
          z-index: 2;

          & > img {
            width: 100%;
          }

          & > div {
            display: grid;
            grid-template-columns: 40px 1fr;
            margin-top: 30px;

            & > img {
              width: 16px;
              height: 16px;
              margin-top: 5px;
            }

            & > p {
              font-size: 14px;
              font-weight: 400;
              color: #FBF9F4;
              line-height: 24px;
            }
          }
        }
      }
    }

    .panel-view2 {
      background: #212028;
      border-radius: 20px;
      padding: 68px 21px;

      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-column-gap: 36px;
      margin-top: 40px;

      & > div {
        display: flex;

        & > img {
          width: 16px;
          height: 16px;
          margin-right: 6px;
          margin-top: 5px;
        }

        & > p {
          flex: 1;
          font-size: 14px;
          font-weight: 400;
          color: #FBF9F4;
          line-height: 24px;
        }
      }
    }
  }

  ${THEME_MEDIA_ENUM.small} {
    padding: 40px 0;

    .block-sign-page {
      max-width: 100vw;
      width: 100%;
      padding: 0 20px;

      & > h1 {
        font-size: 36px;
      }

      .panel-view {
        grid-template-columns: 1fr;
        grid-column-gap: 0;
        margin-top: 30px;
        width: 100%;

        & > div {
          padding: 20px;
          box-sizing: border-box;
          width: calc(100vw - 40px);
        }

        .flow-view {
          padding: 7px;
          margin-top: 16px;

          .flow-view-box {
            padding: 62px 6px 24px 6px;
          }
        }
      }

      .panel-view2 {
        padding: 24px 20px;
        grid-template-columns: 1fr;
        grid-column-gap: 0;
        grid-row-gap: 30px;
        margin-top: 16px;
        box-sizing: border-box;
        width: calc(100vw - 40px);

        & > div {
          display: flex;

          & > img {
            width: 16px;
            height: 16px;
            margin-right: 6px;
            margin-top: 5px;
          }

          & > p {
            flex: 1;
            font-size: 14px;
            font-weight: 400;
            color: #FBF9F4;
            line-height: 24px;
          }
        }
      }
    }
  }
`
