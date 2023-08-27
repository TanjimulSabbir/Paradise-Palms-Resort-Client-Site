import React from 'react'
import Footer from '../Shared/Footer/Footer'
import Header from '../Shared/Header/Header'
import Main from './Main'

const Layout = () => {
    return (
        <div className='max-w-[1500px] mx-auto'>
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

export default Layout;