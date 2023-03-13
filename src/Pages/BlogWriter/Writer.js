import React from 'react';
import { Link } from 'react-router-dom';
import { FiGithub, FiLinkedin, FiFacebook, } from 'react-icons/fi';
import { CiTwitter } from 'react-icons/ci';
import { AiOutlineSkype } from 'react-icons/ai';

const Writer = () => {
    return (
        <div className='UniversalPadding min-h-screen py-24 flex flex-col 
        mid-lg:flex-row mid-lg:space-x-6 mid-lg:justify-center mid-lg:items-center bg-white shadow-2xl'>
            <img className="w-2/6 rounded-full" src="https://i.ibb.co/jVRYn39/Tanjimul.jpg" alt="" srcset="" />
            <div className='w-full'>
                <h3 className='text-3xl font-diplayFair text-emerald-600 py-8'>Tanjimul Islam Sabbir</h3>
                <p className='font-openSans text-black mid-lg:text-sm lg:text-base text-justify'>
                    <span className='text-xl'>H</span>i! I'm Tanjimul. Are you in search of medical and health-related content? This the best place for you. My name is Tanjimul Islam Sabbir and I will provide you with excellent articles and blog posts using my ability to both simplify complex concepts for the general audience and add a scientific element to health-related topics.
                    I can write articles or blog posts on any medical topic (health, fitness, bodybuilding, nutrition, weight loss, cardiology, infectious diseases, genetics, pediatrics, neurology, obstetrics, exercises among others). I offer high quality, precise, and professional works that are also based on scientific evidence.
                    Please, contact me before ordering the project catalog for disponibility and to know your requirements.</p>

                <div className='flex py-10 justify-start items-center space-x-8'>
                    <Link className='list-none text-xl text-black' to="https://github.com/TanjimulSabbir"><FiGithub /> </Link>
                    <Link className='list-none text-xl text-black' to="https://www.linkedin.com/in/tanjimulsabbir/"><FiLinkedin /> </Link>
                    <Link className='list-none text-xl text-black' to="https://www.facebook.com/tanjimulsabbir.brahminykite?mibextid=ZbWKwL"><FiFacebook /> </Link>
                    <Link className='list-none text-xl text-black' to="https://twitter.com/TanjimulSabbir?t=3u5qrdyWlm9Ntt1ffOZJ8g&s=09"><CiTwitter /> </Link>
                    <Link className='list-none text-xl text-black' to="https://join.skype.com/invite/qmYGwzwKn9Mk"><AiOutlineSkype /> </Link>
                </div>
            </div>
        </div>
    );
};

export default Writer;