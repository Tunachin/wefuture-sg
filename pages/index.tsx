import Layout from "../components/Layout";
import Banner from "../components/HomePage/Banner";
import WhatIsWeFuture from "../components/HomePage/WhatIsWeFuture";
import WhatIsWeDesign from "../components/HomePage/WhatIsWeDesign";
import WhoWeCorporate from "../components/HomePage/WhoWeCorporate";
import {useEffect, useRef} from "react";
import {debounce} from "lodash";

export default function Home() {
  const block1 = useRef()
  const block2 = useRef()
  const block3 = useRef()
  const blockViewList = [
    block1,
    block2,
    block3,
  ]

  const addAni = (blockViewList:any[]) => {
    return debounce(() => {
      const scrollTop =
        document.documentElement.scrollTop ||
        window.pageYOffset ||
        document.body.scrollTop;
      for (let i in blockViewList) {
        if (
          blockViewList[i].current &&
          scrollTop >
          blockViewList[i].current.offsetTop +
          blockViewList[i].current.clientHeight / 2 -
          document.body.offsetHeight -
          50
        ) {
          blockViewList[i].current.classList.add("ani");
          delete blockViewList[i];
        }
      }
    }, 100);
  };
/*  useEffect(() => {
    window.addEventListener('scroll', addAni(blockViewList))
    return () => window.removeEventListener('scroll', addAni(blockViewList))
  }, [])*/
  return (
    <Layout>
        <Banner/>
        <WhatIsWeFuture/>
        <WhatIsWeDesign/>
        <WhoWeCorporate/>
    </Layout>
  );
}
