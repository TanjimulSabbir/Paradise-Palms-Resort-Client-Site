import React from 'react';

const Avator = () => {
    return (
        <div className="avatar-group -space-x-6">
            <div className="avatar">
                <div className="w-12">
                    <img src="https://i.ibb.co/PTMhSj6/Tanjimul-Rajbari.jpg" alt='' />
                </div>
            </div>
            <div className="avatar">
                <div className="w-12">
                    <img src="https://i.ibb.co/rtMr9v0/IMG-20220106-163217-2.jpg" alt='' />
                </div>
            </div>
            <div className="avatar">
                <div className="w-12">
                    <img src="https://i.ibb.co/nMXRxfJ/IMG-20220106-163424.jpg" alt='' />
                </div>
            </div>
            <div className="avatar placeholder">
                <div className="w-12 bg-neutral-focus text-neutral-content">
                    <span>+99</span>
                </div>
            </div>
        </div>
    );
};

export default Avator;