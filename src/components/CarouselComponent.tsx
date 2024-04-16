import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card, Image } from '@nextui-org/react'

export default function SimpleSlider() {
    const settings = {
        dots: false,
        slidesToShow: 4,
        autoplay: true,
        autoplaySpeed: 1500,
        pauseOnHover: false,
        cssEase: "linear",
        infinite: true,
        arrows: false,
        centerMode: false,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    centerMode: false,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    centerMode: false,
                },
            },
        ],
    };

    return (
        <Slider {...settings}>
            <div>
                <div className="h-[250px] w-[250px] flex justify-center items-center">
                    <Image width={200} height={200} src="acer.png" alt="logo acer" />
                </div>
            </div>
            <div>
                <div className="h-[250px] w-[250px] flex justify-center items-center">
                    <Image width={105} height={105} src="hp.png" alt="logo asus" />
                </div>
            </div>
            <div>
                <div className="h-[250px] w-[250px] flex justify-center items-center">
                    <Image width={250} height={250} src="bangho.png" alt="logo hp" />
                </div>
            </div>
            <div>
                <div className="h-[250px] w-[250px] flex justify-center items-center">
                    <Image width={110} height={110} src="dell.png" alt="logo bangho" />
                </div>
            </div>
            <div>
                <div className="h-[250px] w-[250px] flex justify-center items-center">
                    <Image width={160} height={160} src="asus.png" alt="logo dell" />
                </div>
            </div>
            <div>
                <div className="h-[250px] w-[250px] flex justify-center items-center">
                    <Image width={250} height={250} src="lenovo.png" alt="logo lenovo" />
                </div>
            </div>
        </Slider>
    );
}