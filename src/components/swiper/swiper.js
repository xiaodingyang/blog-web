import React, { Component } from "react";
import Swiper from "swiper/dist/js/swiper.js";
import "swiper/dist/css/swiper.min.css";
import { Style } from "./style";
export class swiper extends Component {
  componentDidMount() {
    var galleryThumbs = new Swiper(".gallery-thumbs", {
      spaceBetween: 10,
      slidesPerView: 4,
      loop: true,
      freeMode: true,
      loopedSlides: 5, //looped slides should be the same
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
    });
    var galleryTop = new Swiper(".gallery-top", {
      spaceBetween: 10,
      loop: true,
      loopedSlides: 5, //looped slides should be the same
      effect: "cube",
      speed: 1500,
      parallax: true,
      autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
      },
      cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      thumbs: {
        swiper: galleryThumbs,
      },
    });
  }
  render() {
    const { data } = this.props;
    return (
      <Style>
        <div className="swiper-container gallery-top" style={{ zIndex: "0" }}>
          <div className="swiper-wrapper">
            {data.map((item) => {
              return (
                <div
                  key={item}
                  className="swiper-slide"
                  style={{
                    background: `url(${item}) no-repeat center/cover`,
                  }}
                ></div>
              );
            })}
          </div>
          <div className="swiper-pagination"></div>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </div>
        <div
          className="swiper-container gallery-thumbs"
          style={{ zIndex: "0" }}
        >
          <div className="swiper-wrapper">
            {data.map((item) => {
              return (
                <div key={item} className="swiper-slide">
                  <img src={item} alt=""></img>
                </div>
              );
            })}
          </div>
        </div>
      </Style>
    );
  }
}

export default swiper;
