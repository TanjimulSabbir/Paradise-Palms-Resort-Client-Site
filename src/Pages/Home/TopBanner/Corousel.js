import React from 'react';
import img1 from '../../../Assets/images/BannerTop/image-1.jpg';
import img2 from '../../../Assets/images/BannerTop/image-2.jpg';
import img3 from '../../../Assets/images/BannerTop/image-3.jpg';
import img4 from '../../../Assets/images/BannerTop/image-4.jpg';
import img5 from '../../../Assets/images/BannerTop/image-5.jpg';
import { Link, useLocation } from 'react-router-dom';
import TBText from './TBText';

const Corousel = () => {
    const location = useLocation();
    let hashName = (location.hash).split('#slide')[1]
    const { selectedText } = TBText(hashName);
    if (!hashName) {
        window.location.hash = "#slide1";
    }
    const textOnImage = <>
        <div className='absolute top-0 left-0 flex inset-0 items-center bg-black bg-opacity-10'>
            <div className='UniversalPadding py-10 space-y-10'>
                <div>
                    <h2 className='font-diplayFair text-white font-bold leading-tight text-2xl md:text-[40px] lg:text-[55px] md:w-2/3 lg:w-2/4'>{selectedText?.title}</h2>
                </div>
                <p className='font-openSans text-white text-justify pb-10 sm:pb-16 text-[12px] sm:text-sm md:text-base w-2/3 lg:w-2/5'>{selectedText?.text.slice(0, 130) + "..."}</p>
                <Link to='/services' className='Btn-Primary'>Know more</Link>
            </div>
        </div>
    </>
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full object-cover" alt='' />
                {textOnImage}
                <div className="absolute right-0 md:flex justify-between transform md:-translate-y-1/2 md:left-5 md:right-5 top-1/2">
                    <a href="#slide4" className="text-white p-4">❮</a>
                    <a href='#slide2' className="text-white p-4">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full object-cover" alt='' />
                {textOnImage}
                <div className="absolute right-0 md:flex justify-between transform md:-translate-y-1/2 md:left-5 md:right-5 top-1/2">
                    <a href="#slide1" className="text-white p-4">❮</a>
                    <a href="#slide3" className="text-white p-4">❯</a>
                </div>

            </div>

            <div id="slide3" className="carousel-item relative w-full">
                <img src={img4} alt='' className="w-full object-cover" />
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