import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/3.jpg";
import img2 from "../assets/4.jpg";
export default function Services() {
  return (
    <div>
      <Carousel
        infiniteLoop
        autoPlay
        showStatus={false}
        showArrows={false}
        interval={1000}
        showThumbs={false}
      >
        <div>
          <img src={img1} alt="img1" />
          <p className="legend">Full Stack Devloper</p>
        </div>
        <div>
          <img src={img2} alt="img2" />
          <p className="legend">Peer to peer support</p>
        </div>
      </Carousel>
    </div>
  );
}
