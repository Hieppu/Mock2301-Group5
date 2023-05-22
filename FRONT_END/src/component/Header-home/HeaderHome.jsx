import React from 'react'

import Head from './HeadHome'
import Search from '../Search/Search'

import styles from './HeaderHome.module.scss'

const HeaderHome = () => {
    return (
        <div className={styles.headerStick}>
            <div className={styles.headerTop}>
                <Head />
                <Search />
            </div>
        </div>
    )
}

export default HeaderHome