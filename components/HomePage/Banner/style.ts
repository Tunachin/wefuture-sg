import styled from "styled-components";
import {THEME_MEDIA_ENUM} from "../../../context/theme";

export const BannerView = styled.div`
  #homeBanner {
    width: 100%;
    overflow: hidden;
    background: #0A0913;
    height: 800px;

    iframe {
      width: 100%;
      height: 800px;
      overflow: hidden;
      background: #0A0913;
      border: 0;
    }
  }

  ${THEME_MEDIA_ENUM.small} {
    #homeBanner {
      height: 500px;
      iframe {
        height: 500px;
      }
    }
  }
`
