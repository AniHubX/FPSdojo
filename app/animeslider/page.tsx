'use client';
// swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// default css
import './sliders.css'

// icons 
import {GoPlay} from "react-icons/go"
import Link from 'next/link'

export default function Slider() {
  return (
    <div className="slider-main">
      <Swiper 
        pagination={true} 
        className="mySwiper">
        <SwiperSlide>
            <Link href='/anime-moviepage'>
            <img src="https://res.cloudinary.com/dxi9wcchp/image/upload/v1635591822/jujutsu_kaizen_gazruz.jpg" alt="" />
            </Link>
            <h5>JUJUTSU KAISEN</h5>
            <span><GoPlay className="imgsld-playbtn"/> Play Now</span>
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://res.cloudinary.com/dp9icjdvf/image/upload/v1654450493/shieldhero1.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://res.cloudinary.com/dp9icjdvf/image/upload/v1667323307/Frame_3bluelockposter_foyhti.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://res.cloudinary.com/dxi9wcchp/image/upload/v1635591817/gohs_usnfk6.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
