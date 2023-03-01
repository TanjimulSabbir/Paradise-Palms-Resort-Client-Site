import React from 'react';
import img1 from '../../../Assets/images/bedroom/bed06.jpg';
import img2 from '../../../Assets/images/top-header-banner10.jpg';
import img3 from '../../../Assets/images/BannerTop/image-3.jpg';

const Banner06 = () => {
    return (
        <div className="flex flex-col w-full lg:px-10">
            <div className="divider"></div>
            <div className='py-24'>
                <div className="stats shadow flex flex-col lg:space-y-10 lg:flex-none lg:flex-row">
                    <div className="stat flex items-center">
                        <div className="stat-figure text-secondary">
                            <div className="avatar ">
                                <div className="w-14 rounded-full">
                                    <img src={img3} alt='' />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="stat-title">2.6M People Love Our Resort</div>
                            <div className="stat-value text-secondary">ToTal Likes 4.1M</div>
                            <div className="stat-desc">21% more than last month</div>
                        </div>
                    </div>
                    <div className="stat flex items-center">
                        <div className="stat-figure text-secondary">
                            <div className="avatar">
                                <div className="w-14 rounded-full">
                                    <img src={img2} alt='' />
                                </div>
                            </div>
                        </div>
                        <div> <div className="stat-title">50k Five Star Reviews</div>
                            <div className="stat-value text-secondary">ToTal Reviews 1.5M</div>
                            <div className="stat-desc">14% more than last month</div></div>
                    </div>

                    <div className="stat flex items-center">
                        <div className="stat-figure text-secondary">
                            <div className="avatar online">
                                <div className="w-14 rounded-full">
                                    <img src={img1} alt='' />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="stat-value">Our Amenities</div>
                            <div className="stat-title">3k International Tourist</div>
                            <div className="stat-desc text-secondary">Stay All Time</div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Banner06;