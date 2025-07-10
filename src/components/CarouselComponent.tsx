import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Image } from '@nextui-org/react'

export default function SimpleSlider() {
    const settings = {
        dots: false,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        pauseOnHover: false,
        cssEase: "linear",
        infinite: true,
        arrows: false,
        centerMode: true,
        className: "slider variable-width",
        slidesToScroll: 1,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
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

    const SlickSlider = Slider as any;

    return (
        <SlickSlider {...settings}>
            <div className="flex justify-center items-center">
                <div className="h-[250px] w-[250px] flex justify-center items-center">
                    <Image width={200} height={200} src="acer.png" alt="logo acer" />
                </div>
            </div>
        </SlickSlider>
    );
}
