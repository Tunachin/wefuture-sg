import {HeaderView} from "./style";
import LogoIcon from '../../public/image/logo.png'
import MoreIcon from '../../public/image/h5-more.svg'
import ClosedIcon from '../../public/image/closed.svg'
import {useEffect, useState} from "react";
import Link from "next/link";

interface INav {
  link: string
  name: string
}

export default function Header() {
  const navList:INav[] = [
    {
      name: 'What is wefuture',
      link: '/#WhatIsWeFuture'
    },
    {
      name: 'What we design',
      link: '/#WhatWeDesign'
    },
    // {
    //   name: 'Wallekit',
    //   link: '#Wallekit'
    // },
    {
      name: 'Blocksign',
      link: '/blocksign'
    },
    {
      name: 'Corporate',
      link: '/#Corporate'
    },
    {
      name: 'Contract',
      link: '#Contract'
    },
  ]
  const [blockH5Panel, setBlockH5Panel] = useState<boolean>(false)
  const [showH5Panel, setShowH5Panel] = useState<boolean>(false)
  useEffect(() => {
    setTimeout(() => {
      setBlockH5Panel(true)
    }, 300)
  },[])
  useEffect(() => {
    document.body.style.overflow = showH5Panel ? 'hidden' : 'auto'
  }, [showH5Panel])
  const onGetStart = () => {
    setShowH5Panel(false)
    window.scrollTo({
      left: 0,
      top: 100
    })
  }
  return <HeaderView>
    <div className="header-view">
      <Link href="/" className="logo">
        <img src={LogoIcon.src} alt=""/>
      </Link>
      <div className="header-navs">
        {
          navList.map(item => <a href={item.link} className="header-nav link link--elara" key={item.link}><span>{item.name}</span></a>)
        }
        <button className="button button--mimas get-start" onClick={onGetStart}><span>Get started</span></button>
      </div>
      <img src={MoreIcon.src} alt="" className="h5-more" onClick={()=>setShowH5Panel(true)}/>
    </div>
    <div className={'h5-more-panel' + (showH5Panel ? ' show' : '')} style={{display: blockH5Panel ? 'block' : 'none'}}>
      <div className="h5-header-view">
        <img src={LogoIcon.src} alt="" className="logo"/>
        <img src={ClosedIcon.src} alt="" className="closed" onClick={()=>setShowH5Panel(false)}/>
      </div>
      <div className="panel-navs">
        {
          navList.map(item => <a href={item.link} className="header-nav" key={item.link} onClick={()=>setShowH5Panel(false)}>{item.name}</a>)
        }
        <button className="button button--mimas get-start" onClick={onGetStart}><span>Get started</span></button>
      </div>
    </div>
  </HeaderView>
}
