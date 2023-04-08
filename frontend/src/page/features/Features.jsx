import React from 'react'
import { Outlet } from 'react-router-dom';
import HeaderHome from '../../component/Header-home/HeaderHome';

const Features = () => {
    return (
        <div className='home'>
            <HeaderHome />
            <div className='container'>
                <Outlet></Outlet>
            </div>
            {/* <Footer /> */}
        </div>
    )
}

export default Features