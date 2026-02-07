import {WhatIsWeFutureView} from "./style";
import P1Img from '../../../public/image/posterGroup/1/p1.png'
import P2Img from '../../../public/image/posterGroup/1/p2.png'
import P3Img from '../../../public/image/posterGroup/1/p3.png'
import P4Img from '../../../public/image/posterGroup/1/p4.png'
import useObserver from "../../../hooks/useObserver";
import cs from "classnames";
import {useEffect} from "react";
import scrollAni2 from "./aniScript/s2";

export default function WhatIsWeFuture() {
  const percent = useObserver('WhatIsWeFuture')
  useEffect(() => {
    if (typeof window !== 'undefined') {
        scrollAni2()
    }
  }, [])
  return <WhatIsWeFutureView id="WhatIsWeFuture" className={percent >= 40 ? 'ani' : ''}>
    <div>
      <h1 className={cs(percent >= 10 && 'ani')}>What is wefuture</h1>
      <div className="content__title content__title--left words chars splitting" data-splitting data-effect16>
        <p>Wefuture is a company that provides Web3.0 technology solutions for decentralized storage systems, committed to providing data-level Web3 underlying storage architecture and blockchain products for companies in Singapore and internationally.</p>
        <p>Wefuture currently runs projects including the decentralized storage platform Wallekit and the blockchain signature protocol Blocksign.</p>
      </div>
      <div className="poster">
        <img src={P2Img.src} alt="" className="poster-placeholder"/>
        <img src={P1Img.src} alt="" className="poster-group1"/>
        <img src={P2Img.src} alt="" className="poster-group2"/>
        <img src={P3Img.src} alt="" className="poster-group3"/>
        <img src={P4Img.src} alt="" className="poster-group4"/>
      </div>
    </div>
  </WhatIsWeFutureView>
}
