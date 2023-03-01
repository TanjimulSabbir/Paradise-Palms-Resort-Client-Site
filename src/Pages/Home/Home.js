import React from 'react';
import TopBanner from './TopBanner/TopBanner';
import Banner02 from './Banner02/Banner02';
import Banner03 from './Banner03/Banner03';
import Banner04 from './Banner04/Banner04';
import Banner05 from './Banner05/Banner05';
import Banner07 from './Banner07/Banner07';
import Banner08 from './Banner08/Banner08';
import Banner09 from './Banner09/Banner09';
import Banner10 from './Banner10/Banner10';
import useTitle from '../../Hooks/useTitle';

const Home = () => {
    useTitle('Home')

    return (
        <div className='min-h-screen'>
            <TopBanner />
            <Banner02 />
            <Banner03 />
            <Banner04 />
            <Banner05 />
            {/* <Banner06 /> */}
            <Banner07 />
            <Banner08 />
            <Banner09 />
            <Banner10 />
        </div>
    );
};

export default Home;