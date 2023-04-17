import React from 'react'
import { Outlet } from 'react-router-dom';

import HeaderHome from '../../component/Header-home/HeaderHome';
import Footer from '../../component/Footer/Footer';

import styles from './Features.module.scss'

const Features = () => {
    return (
        <div className={styles.home}>
            <HeaderHome />
            <div className={styles.container}>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Features