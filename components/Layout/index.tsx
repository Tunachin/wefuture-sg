import {LayoutView} from "./style";
import Header from "../Header";
import Head from "next/head";
import React, {useEffect, useState} from "react";
import Footer from "../Footer";
import Logo from '../../public/image/logo-small.svg'
import LoadingIcon from '../../public/image/loading.svg'
import {useRouter} from "next/router";

export default function Layout({children}: { children: React.ReactNode }) {
  const router = useRouter()
  const [pageLoading, setPageLoading] = useState<boolean>(true)
  useEffect(() => {
    setPageLoading(false)
    if (router.asPath.includes('#')){
      setTimeout(() => {
        window.location.href = String(window.location.href)
      }, 100)
    }
  }, [router]);
  if (pageLoading) {
    return <div style={{
      position: 'fixed',
      left: '0',
      top: '0',
      background: '#0A0913',
      width: '100vw',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff'
    }}>
      <img src={LoadingIcon.src} alt=""/>
    </div>
  }
  return <>
    <Head>
      <title>WeFuture</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
      <link rel="icon" type="image/svg" href={Logo.src}/>
    </Head>
    <LayoutView>
      <Header/>
      {children}
      <Footer/>
    </LayoutView>
  </>
}
