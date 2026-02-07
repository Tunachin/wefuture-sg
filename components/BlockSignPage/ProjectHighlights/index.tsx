import { ProjectHighlightsView } from "./style";
import LogoIcon from '../../../public/image/logo-small.svg'
import Project02 from '../../../public/image/blocksign/project02.png'
import Project03 from '../../../public/image/blocksign/project03.png'

export default function ProjectHighlights(){
  return <ProjectHighlightsView>
    <div className="height-light-view">
      <img src={LogoIcon.src} alt="" className="small-logo"/>
      <h1>Technical Features</h1>
      <div className="panel-view">
        <div className="panel-view-l">
          <div className="o-fixed"/>
          <div className="o-fixed"/>
          <div className="o-fixed"/>
          <div className="o-fixed"/>
          <h2>Self-developed EIP-721 ECDSA algorithm</h2>
          <p>Provides more context for web3 signature flow, greatly reducing storage cost and improving signing efficiency</p>
        </div>
        <div className="panel-view-r">
          <div className="panel-view-r-i panel-view-r-t">
            <h2>Real-time chain encryption to protect privacy</h2>
            <div>
              <p>Contract original text and attached information are encrypted by standard algorithm asymmetrical encryption and then stored on the chain. Key is required to decrypt when viewing, which can fully protect signing privacy</p>
              <img src={Project02.src} alt=""/>
            </div>
          </div>
          <div className="panel-view-r-i panel-view-r-b">
            <h2>Decentralized storage anti-tampering</h2>
            <div>
              <p>Contract is stored on the chain, with multiple nodes records and supervises together. Once the contract is signed, it cannot be tampered.</p>
              <img src={Project03.src} alt=""/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </ProjectHighlightsView>
}
