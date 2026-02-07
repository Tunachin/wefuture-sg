import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`

  html, body {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    scroll-behavior: smooth;
    font-family: Roobert;
  }

  h1, h2, h3, h4, h5, h6, p {
    padding: 0;
    margin: 0;
  }

  input {
    width: 184px;
    font-size: 32px;
    font-weight: 600;
    border: 0;
    outline: none;
    background: transparent;
    -moz-appearance: textfield;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  button {
    margin: 0;
    padding: 0;
    border: 1px solid transparent;
    outline: none;
  }

  @keyframes loading-ani {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes face-in {
    0% {
      transform: scale(0.5);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes face-out {
    0% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
// btn
  .button {
    cursor: pointer;
    background: #32313B;
    border: none;
    padding: 14px 28px;
    margin: 0;
    position: relative;
  }

  .button::before,
  .button::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .button--mimas {
    font-weight: 600;
    border-radius: 20px;
    overflow: hidden;
    color: #8578E6;
  }

  .button--mimas span {
    position: relative;
    mix-blend-mode: color-dodge;
    color: #FBF9F4;
  }

  .button--mimas::before {
    content: '';
    background: #8578E6;
    width: 120%;
    left: -10%;
    transform: skew(30deg);
    transition: transform 0.4s cubic-bezier(0.3, 1, 0.8, 1);
  }

  .button--mimas:hover {
    span{
      color: #8578E6;
    }
    &::before {
      transform: translate3d(100%, 0, 0);
    }
  }
//
  @keyframes masknone {
    0%,
    100% {
      mask: none;
    }
  }
  @keyframes masktxt1 {
    50%,
    100% {
      mask-size: 100% 20000%;
    }
  }
  @keyframes masktxt2 {
    50%,
    100% {
      mask-size: 20000%;
    }
  }
`;
