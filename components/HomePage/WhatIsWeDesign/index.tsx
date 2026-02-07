import {WhatIsWeDesignView} from "./style";
import CheckIcon from '../../../public/image/check.svg'
import Scen1Img from '../../../public/image/app-scen1.png'
import Scen2Img from '../../../public/image/app-scen2.png'
import Scen3Img from '../../../public/image/app-scen3.png'
import Scen4Img from '../../../public/image/app-scen4.png'
import Poster2ImgBody from '../../../public/image/posterGroup/2/body.png'
import Poster2ImgCreate from '../../../public/image/posterGroup/2/create.png'
import Poster2ImgDapps from '../../../public/image/posterGroup/2/dapps.png'
import Poster2ImgHead from '../../../public/image/posterGroup/2/head.png'
import Poster2ImgIcon1 from '../../../public/image/posterGroup/2/icon1.png'
import Poster2ImgIcon2 from '../../../public/image/posterGroup/2/icon2.png'
import Poster2ImgIcon3 from '../../../public/image/posterGroup/2/icon3.png'
import LineBgImg from '../../../public/image/line-bg.png'

import {useEffect, useState} from "react";
import cs from 'classnames'
import useObserver from "../../../hooks/useObserver";
import {useRouter} from "next/router";

interface IItem{
  title: string,
  poster: string
}

export default function WhatIsWeDesign(){
  const router = useRouter()
  const list:IItem[] =  [
    {
      title: 'Decentralized storage for NFT;',
      poster: Scen1Img.src
    },
    {
      title: 'Data-time call interface for Web3 game, social platform, etc.',
      poster: Scen2Img.src
    },
    {
      title: `"Middleware" services for virtual currency trading platforms for data caching.`,
      poster: Scen3Img.src
    },
    {
      title: 'Contract signing, authentication, authentication and certification services for judicial systems;',
      poster: Scen4Img.src
    },
  ]
  const [current, setCurrent] = useState<number>(0)
  const percent = useObserver('AboutView')
  const [posterAni, setPosterAni] = useState(false)
  useEffect(() => {
    setPosterAni(false)
    setTimeout(() => {
      setPosterAni(true)
    },150)
  },[current])
  return <WhatIsWeDesignView id="WhatWeDesign">
    <div className="we-design">
      <div className="title-tag">Blocksign and Wallek</div>
      <h1 className={cs({'ani': percent >= 10})}>What we design?</h1>
      <div className={cs({
        'about-view': true,
        'ani': percent >= 20
      })} id="AboutView">
        <div className="about-view-img">
          <img src={Poster2ImgBody.src} className="poster-placeholder" alt=""/>
          <img src={Poster2ImgBody.src} className="poster-body" alt=""/>
          <img src={Poster2ImgCreate.src} className="poster-create" alt=""/>
          <img src={Poster2ImgDapps.src} className="poster-dapps" alt=""/>
          <img src={Poster2ImgHead.src} className="poster-hand" alt=""/>
          <img src={Poster2ImgIcon1.src} className="poster-icon1" alt=""/>
          <img src={Poster2ImgIcon2.src} className="poster-icon2" alt=""/>
          <img src={Poster2ImgIcon3.src} className="poster-icon3" alt=""/>
        </div>
        <div  className="about-wallekit content__title content__title--left words chars splitting" data-splitting data-effect16>
          <h1>About Wallekit</h1>
          <p>Wallekit is a completely decentralized storage architecture platform, with no central server or centralized control.</p>
          <div>
            <img src={CheckIcon.src} alt=""/>
            <span>Wallekit storage mechanism enables data to be stored on multiple nodes, thus achieving high reliability and strong robustness. </span>
          </div>
          <div>
            <img src={CheckIcon.src} alt=""/>
            <span>It can be used to store various types of data, including text, images, videos, etc.</span>
          </div>
          <div>
            <img src={CheckIcon.src} alt=""/>
            <span>In addition, Wallekit can also be used to create decentralized applications (dApps). </span>
          </div>
          <div>
            <img src={CheckIcon.src} alt=""/>
            <span>Developers can use Wallekit{'\.'}s smart contract function to create their own dApp without worrying about data storage issues.</span>
          </div>
        </div>
      </div>
      <h2>Application Scenario</h2>
      <div className="application-scenarios">
        <div className="left-tab">
          {
            list.map((item, index) =>
              <div  key={index}>
                <div className={'left-tab-item' + (current === index ? ' active' : '')} onMouseEnter={() => setCurrent(index)}>
                  <div>0{index+1}</div>
                  <span>{item.title}</span>
                </div>
                {
                  current === index && <div className="h5-poster">
                      <img src={item.poster} alt="" className={cs(posterAni && 'ani')}/>
                  </div>
                }
              </div>)
          }
          <div className="left-tab-item view-case">
            <div></div>
            <button className="button button--mimas" onClick={() => router.push('/blocksign')}><span>View Case</span></button>
          </div>
        </div>
        <div className="right-poster">
          <img src={list[current].poster} className={cs(posterAni && 'ani')} alt=""/>
        </div>
      </div>
    </div>
    <img src={LineBgImg.src} alt="" className="line-bg"/>
  </WhatIsWeDesignView>
}
