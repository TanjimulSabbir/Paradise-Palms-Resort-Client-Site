import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer bg-[#aef4ce] text-black p-10 sm:flex sm:flex-col lg:flex-row lg:items-center lg:justify-evenly">
            <div className='lg:w-1/3'>
                <span className="font-bold headingM cursor-pointer text-black">Paradise Palms</span>
                <p className='mt-6 font-openSans'>Our tour hostel is also equipped with all the amenities you need to make your stay comfortable. We have a fully equipped kitchen, a lounge area with comfortable seating, and a library where you can relax and read a book.</p>
                <div><FontAwesomeIcon ></FontAwesomeIcon></div>
            </div>
            <div>
                <span className="font-bold font-diplayFair">Quick Link</span>
                <a className="link link-hover font-openSans">About Hotel</a>
                <a className="link link-hover font-openSans">Terms & Conditionis</a>
                <a className="link link-hover font-openSans">Jobs</a>
            </div>
            <div>
                <span className="font-bold font-diplayFair">Contact Info</span>
                <a className="link link-hover font-openSans">Phone: +88953 445 4892</a>
                <a className="link link-hover font-openSans">256, Resort Street,, New York 24</a>
                <a className="link link-hover font-openSans">tanjimulislamsabbir02@gmail.com</a>
                <a className="link link-hover font-openSans">info@paradisepalms.com</a>
            </div>
            <div>
                <span className="font-bold font-diplayFair">Newsletter</span>
                <div className="form-control w-80">
                    <label className="label">
                        <span className="label-text">Enter your email address</span>
                    </label>
                    <div className="relative">
                        <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16 mb-10" />
                        <Link to="/services" className="Btn-Primary">Subscribe</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;