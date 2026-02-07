import {WhoWeCorporateView} from "./style";
import Corporate1 from '../../../public/image/corporate1.png'
import Corporate2 from '../../../public/image/corporate2.png'
import Corporate3 from '../../../public/image/corporate3.png'
import React from "react";
import useObserver from "../../../hooks/useObserver";
import cs from "classnames";

export default function WhoWeCorporate() {
  const percent = useObserver('Corporate')

  return <WhoWeCorporateView id="Corporate">
    <h1  className={cs({'ani': percent >= 10})}>Who we corporate?</h1>
    <div className="corporates">
      <div>
        <img src={Corporate1.src} alt=""/>
      </div>
      <div>
        <img src={Corporate2.src} alt=""/>
      </div>
      <div>
        <img src={Corporate3.src} alt=""/>
      </div>
    </div>
  </WhoWeCorporateView>
}
