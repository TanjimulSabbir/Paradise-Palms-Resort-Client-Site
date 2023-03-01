import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = () => {
    return (
        <footer className="footer bg-black text-white p-10 sm:flex sm:flex-col lg:flex-row lg:items-center lg:justify-evenly">
            <div className='lg:w-1/3'>
                <span className="footer-title headingM ">Paradise Palms</span>
                <p className='mt-10 paragraph'>Our tour hostel is also equipped with all the amenities you need to make your stay comfortable. We have a fully equipped kitchen, a lounge area with comfortable seating, and a library where you can relax and read a book.</p>
                <div><FontAwesomeIcon ></FontAwesomeIcon></div>
            </div>
                <div>
                    <span className="footer-title">Quick Link</span>
                    <a className="link link-hover">About Hotel</a>
                    <a className="link link-hover">Terms & Conditionis</a>
                    <a className="link link-hover">Jobs</a>
                </div>
                <div>
                    <span className="footer-title">Contact Info</span>
                    <a className="link link-hover">(1800) 574 9687</a>
                    <a className="link link-hover">256, Resort Street,, New York 24</a>
                    <a className="link link-hover">Email : info@paradisepalms.com</a>
                </div>
            <div>
                <span className="footer-title">Newsletter</span>
                <div className="form-control w-80">
                    <label className="label">
                        <span className="label-text">Enter your email address</span>
                    </label>
                    <div className="relative">
                        <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                        <button className="Btn-Primary mt-6">Subscribe</button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;