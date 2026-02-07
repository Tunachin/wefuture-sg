import {AboutBlockSignView} from "./style";
import ConsoleIcon from '../../../public/image/blocksign/console.svg'
import BgImg from '../../../public/image/blocksign/blocksignbg.png'
import FlowImg from '../../../public/image/blocksign/flow.png'
import PenIcon from '../../../public/image/blocksign/pen.svg'
import FastIcon from '../../../public/image/blocksign/icon-fast.svg'
import MagicIcon from '../../../public/image/blocksign/icon-magic.svg'
import MoreIcon from '../../../public/image/blocksign/icon-more-people.svg'
import LoadingIcon from '../../../public/image/loading.svg'
import {useEffect, useRef, useState} from "react";
import {codeStart} from "./codeAni";

export default function AboutBlockSign() {

  const [codeAniLoading, setCodeAniLoading] = useState<boolean>(true)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      codeStart(()=>{
        setCodeAniLoading(false)
      })
    }
  }, [])
  const ref:any = useRef()
  const bgRef:any = useRef()
  const flowViewMouseMove = (e: any) => {
    const pageX = e.pageX
    const pageY = e.pageY
    const offsetLeft = ref.current.offsetLeft + ref.current.offsetWidth/2
    const offsetTop = ref.current.offsetTop + ref.current.offsetHeight/2
    const difX = pageX - offsetLeft
    const difY = pageY - offsetTop
    bgRef.current.style.transform = `translate(${difX/10}px,${difY/10}px)`
  }
  const flowViewMouseLeave = () => {
    bgRef.current.style.transform = `translate(0px,0px)`
  }

  const [consoleTxt, setConsoleTxt] = useState<string>('')
  const consoleWord = 'Blocksign is a Dapp running on Wallekit which is a reference for securely and efficiently signing documents.'
  useEffect(() => {
    if (codeAniLoading){
      return
    }
    setTimeout(() => {
      if (consoleTxt.length < consoleWord.length){
        setConsoleTxt(consoleWord.slice(0, consoleTxt.length + 1))
      }
    }, 100)
  }, [consoleTxt, codeAniLoading])


  const [writeTxt, setWriteTxt] = useState<string>('')
  const writeWord = 'With Blocksign, users can securely and quickly sign documents with blockchain technology ensuring the documents cannot be tampered with and that the signatures are authentic.'
  useEffect(() => {
    setTimeout(() => {
      if (writeTxt.length < writeWord.length){
        setWriteTxt(writeWord.slice(0, writeTxt.length + 1))
      }
    }, 100)
  }, [writeTxt])

  return <AboutBlockSignView>
    <div className="block-sign-page">
      <h1>About Blocksign</h1>
      <div className="panel-view">
        <div className="code-view">
          <div className="code-view-group">
            {
              codeAniLoading && <div className="code-view-loading"><img src={LoadingIcon.src} alt=""/></div>
            }
            <div className="code-line">
              <span>1</span>
              <p className="color1">{'//'} use web3</p>
            </div>

            <div className="code-line">
              <span>2</span>
              <p><span className="color2">const</span> web3 = <span className="color3">getWeb3</span>(library);</p>
            </div>
            <div className="code-line">
              <span>3</span>
              <p><span className="color2">const</span> contract = <span className="color4">new </span> <span className="color3">web3.eth.Contract</span>(abi,
                address);</p>
            </div>
            <div className="code-line">
              <span>4</span>
              <p className="color1">{'//'} Users can sign documents safely and quickly, and blockchain technology ensures
                that documents cannot be tampered with and signatures are authentic</p>
            </div>
            <div className="code-line">
              <span>5</span>
              <p><span className="color2">const</span> signData = <span className="color3">web3.eth.sign</span>(<span
                className="color3">web3.utils.utf8ToHex</span>(file), account)</p>
            </div>
            <div className="code-line">
              <span>6</span>
              <p className="color1"> {'//'} send to the blockchain</p>
            </div>
            <div className="code-line">
              <span>7</span>
              <p><span className="color3">contract.methods.record</span>{`(signData...)`}<span
                className="color3">.send</span>{`({from: account,...})`}</p>
            </div>
          </div>
          <div className="console-line">
            <div>
              <img src={ConsoleIcon.src} alt=""/>
            </div>
            <p className={consoleTxt.length !== consoleWord.length ? 'console-ani' : ''}>{consoleTxt}</p>
          </div>
        </div>
        <div className="flow-view" ref={ref} onMouseMove={flowViewMouseMove} onMouseLeave={flowViewMouseLeave}>
          <img className="flow-view-bg" ref={bgRef} src={BgImg.src} alt=""/>
          <div className="flow-view-box">
            <img src={FlowImg.src} alt=""/>
            <div>
              <img src={PenIcon.src} alt=""/>
              <p className={writeTxt.length !== writeWord.length ? 'write-ani' : ''}>{writeTxt}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="panel-view2">
        <div>
          <img src={FastIcon.src} alt=""/>
          <p>Users can conveniently and quickly upload their documents to Blocksign for electronic signatures.</p>
        </div>
        <div>
          <img src={MoreIcon.src} alt=""/>
          <p>Blocksign also enables multiple parties to sign documents making it an ideal solution for businesses and organizations that require multiple signatories.</p>
        </div>
        <div>
          <img src={MagicIcon.src} alt=""/>
          <p>Blocksign offers an array of additional features such as tracking document statuses, setting signing deadlines with reminders, and receiving notifications when documents are signed.</p>
        </div>
      </div>
    </div>

  </AboutBlockSignView>
}
