import React from 'react';
import img1 from '../../../Assets/images/BannerTop/image-1.jpg';
import img2 from '../../../Assets/images/BannerTop/image-2.jpg';
import img3 from '../../../Assets/images/BannerTop/image-3.jpg';
import img4 from '../../../Assets/images/BannerTop/image-4.jpg';
import img5 from '../../../Assets/images/BannerTop/image-5.jpg';
import { Link, useLocation } from 'react-router-dom';
import TBText from './TBText';
import "../../../style/animation.css"

const Corousel = () => {
    const location = useLocation();
    let hashName = (location.hash).split('#slide')[1]
    const { selectedText } = TBText(hashName);
    if (!hashName) {
        window.location.hash = "#slide1";
    }
    const textOnImage = <>
        <div className='topSliderSlow absolute top-0 pt-10 left-0 w-full h-screen flex items-center justify-center bg-[#000000ac]'>
            <div className='UniversalPadding space-y-10'>
                <div>
                    <h2 className='font-diplayFair text-white font-bold leading-tight text-2xl md:text-[40px] lg:text-[55px] md:w-4/5 lg:w-4/5'>{selectedText?.title}</h2>
                </div>
                <p className='font-openSans text-white text-justify pb-10 sm:pb-16 text-[12px] sm:text-sm md:text-base w-2/3 lg:w-2/5'>{selectedText?.text.slice(0, 130) + "..."}</p>
                <Link to='/services' className='leftSlider Btn-Primary'>Know more</Link>
            </div>
        </div>
    </>
    return (
        <div className="grow carousel w-full h-screen">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img4} className="w-full object-cover h-screen" alt='' />
                {textOnImage}
                <div className="absolute right-0 md:flex justify-between transform md:-translate-y-1/2 md:left-5 md:right-5 top-1/2">
                    <a href="#slide4" className="text-white p-4">❮</a>
                    <a href='#slide2' className="text-white p-4">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full h-screen">
                <img src={img2} className="w-full object-cover" alt='' />
                {textOnImage}
                <div className="absolute right-0 md:flex justify-between transform md:-translate-y-1/2 md:left-5 md:right-5 top-1/2">
                    <a href="#slide1" className="text-white p-4">❮</a>
                    <a href="#slide3" className="text-white p-4">❯</a>
                </div>

            </div>

            <div id="slide3" className="carousel-item relative w-full">
                <img src={img1} alt='' className="w-full object-cover" />
                {textOnImage}
                <div className="absolute right-0 md:flex justify-between transform md:-translate-y-1/2 md:left-5 md:right-5 top-1/2">
                    <a href="#slide2" className="text-white p-4">❮</a>
                    <a href="#slide4" className="text-white p-4">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img5} alt='' className="w-full object-cover" />
                {textOnImage}
                <div className="absolute right-0 md:flex justify-between transform md:-translate-y-1/2 md:left-5 md:right-5 top-1/2">
                    <a href="#slide3" className="text-white p-4">❮</a>
                    <a href="#slide1" className="text-white p-4">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Corousel;