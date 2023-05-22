import React from 'react'
import { Link } from 'react-router-dom'

import styles from './Header.module.scss'


const Header = () => {
    return (
        <div className={styles.signUpHeader}>
            <div className={styles.formText}>
                <div className={styles.linkContent}>
                    <Link to='/' className={styles.logoMobile}>
                        <img src="../../../image/logo/logomobile.png" alt="" />
                    </Link>
                    <div className={styles.text}>Đăng nhập</div>
                </div>
                <div className={styles.helper}>
                    <Link>Bạn cần giúp đỡ?</Link>
                </div>
            </div>
        </div>
    )
}

export default Header