import styled from "styled-components";

export const WhoWeCorporateView = styled.div`

  background: #0A0913;
  padding: 120px 0 0 0;
  margin-bottom: -2px;
  &>h1{
    font-size: 72px;
    font-weight: bold;
    color: #FBF9F4;
    text-align: center;
    mask: radial-gradient(circle at 50% 0, #000, transparent 20%, transparent 0);
    mask-size: 100% 100%;;
    &.ani{
      animation: masktxt1 15s 1, masknone 1ms infinite 15s;
    }
  }
  .corporates{
    margin-top: 120px;
    display: flex;
    justify-content: center;
    &>div{
      width: 330px;
      height: 204px;
      border-radius: 20px;
      background: #212028;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 20px;
      &>img{
        width: 85%;
      }
      &>span{
        font-size: 24px;
        color: #FFFFFF;
      }
      &:hover{
        transition: all 100ms;
        transform: scale(1.02);
      }
    }
  }

  #sineCanvas {
    width: 100%;
    height: 200px;
    vertical-align: top;
  }

  @media only screen and (max-width: 640px) {

    padding: 40px 0 0 0;
    &>h1{
      font-size: 34px;
    }
    .corporates{
      margin: 20px 0 0 0;
      flex-direction: column;
      padding: 0 20px;
      box-sizing: border-box;
      &>div{
        width: 100%;
        height: 204px;
        margin: 20px 0 0 0;
      }
  }
`
