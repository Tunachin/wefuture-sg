import {FooterView} from "./style";
import PosterImg from '../../public/image/footer-poster.png'
import IconAddress from '../../public/image/icon-adress.svg'
import IconEmail from '../../public/image/icon-email.svg'
import React, {useEffect, useRef} from "react";
import {useSearchParams} from "next/navigation";
import {useRouter} from "next/router";
let zoom = 1
try {
  zoom = window.screen.availWidth > 500 ? 3 : 1
}catch (e){

}
export default function Footer(){
  const {pathname} = useRouter()
  const ref:any = useRef()
  const createSine = () => {
    var unit = 100;
    var context: any, canvas: any, height: any, width: any, xAxis: any, yAxis: any;

    function init() {
      canvas = document.getElementById("sineCanvas");
      if (!canvas) {
        return
      }
      canvas.width = document.documentElement.clientWidth;
      canvas.height = 120;
      context = canvas.getContext("2d");
      height = canvas.height;
      width = canvas.width;
      xAxis = Math.floor(height / 2);
      yAxis = 0;

      draw();
    }

    function draw() {
      context.clearRect(0, 0, width, height);

      drawWave('#F6F5FF', 2, zoom, 0);

      // Update the time and draw again
      draw.seconds = draw.seconds + .009;
      draw.t = draw.seconds * Math.PI;
      ref.current = setTimeout(draw, 30);
    };
    draw.seconds = 0;
    draw.t = 0;

    function drawWave(fillcolor:string, alpha:number, zoom:number, delay:number) {
      context.fillStyle = fillcolor;
      context.globalAlpha = alpha;

      context.beginPath();
      drawSine(draw.t / 1, zoom, delay);
      context.lineTo(width + 10, height);
      context.lineTo(0, height);
      context.closePath()
      context.fill();
    }

    function drawSine(t:number, zoom:number, delay:number) {
      var x = t;
      var y = Math.sin(x) / zoom;
      context.moveTo(yAxis, unit * y + xAxis);
      for (let i = yAxis; i <= width + 10; i += 10) {
        x = t + (-yAxis + i) / unit / zoom;
        y = Math.sin(x - delay) / 3;
        context.lineTo(i, unit * y + xAxis);
      }
    }
    clearTimeout(ref.current)
    init();
  }
  useEffect(() => {
    window.onresize = function (){
      createSine()
    }
    createSine()
  }, [])
  const bg = {
    '/': '#0A0913',
    '/blocksign': '#FFFFFF'
  }[pathname] || '#0A0913'
  return <>
    <FooterView id="Contract" bg={bg}>
      <canvas id="sineCanvas"/>
      <div className="footer-box">
        <div className="footer-view">
          <img src={PosterImg.src} alt=""/>
          <div className="footer-info">
            <h1>Contact us</h1>
            <div>
              <img src={IconEmail.src} alt=""/>
              <span>Email</span>
            </div>
            <p>contact@wefuturesg.com</p>
            <div>
              <img src={IconAddress.src} alt=""/>
              <span>Adress:</span>
            </div>
            {/*<h4>SINGAPORE</h4>*/}
            <p>60 PAYA LEBAR ROAD #12-03 PAYA LEBAR SQUARE SINGAPORE 409051</p>
          </div>
        </div>
        <div className="footer-line"/>
      </div>
    </FooterView>
  </>
}
