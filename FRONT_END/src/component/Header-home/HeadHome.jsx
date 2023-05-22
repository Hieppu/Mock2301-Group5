import React from "react"
import { Link } from 'react-router-dom';

import { BsTelephone } from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'
import { GrLanguage } from 'react-icons/gr'

import styles from './HeaderHome.module.scss'

const Head = () => {
    return (
        <div className={styles.head}>
            <div className={styles.container}>
                <div className={styles.left}>
                    <div className={styles.phone}>
                        <BsTelephone />
                        <label> +88012 3456 7894</label>
                    </div>
                    <div className={styles.mail}>
                        <HiOutlineMail />
                        <label> support@ui-lib.com</label>
                    </div>
                </div>
                <div className={styles.right}>
                    <ul className={styles.links}>
                        <label className={styles.link}>Theme FAQ"s</label>
                        <label className={styles.link}>Need Help?</label>
                        <li className={styles.link}>
                            <div className={styles.language}>
                                <GrLanguage />
                            </div>
                            <span>Tiếng Việt</span>
                        </li>
                        {/* <Link to='/sign-in' className={styles.link}>
                            Đăng Nhập
                        </Link> */}
                        <div className={styles.separator}></div>
                        <Link to='/sign-up2' className={styles.link}>
                            Đăng Nhập
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Head
