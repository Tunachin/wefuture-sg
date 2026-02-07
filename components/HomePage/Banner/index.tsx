import {BannerView} from "./style";
import useObserver from "../../../hooks/useObserver";

export default function Banner(){
  // const percent = useObserver('homeBanner')
  return <BannerView>
    <div id="homeBanner">
      <iframe src="/bgScript/bg.html"/>
    </div>
  </BannerView>
}
