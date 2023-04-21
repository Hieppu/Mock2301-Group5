import React from 'react'
import { Link } from 'react-router-dom'

import { FiSearch, FiWatch } from 'react-icons/fi'
import { FaTabletAlt } from 'react-icons/fa'
import { BsPhone, BsSmartwatch } from 'react-icons/bs'
import { AiOutlineLaptop, AiOutlineShoppingCart } from 'react-icons/ai'
import { SlEarphones } from 'react-icons/sl'
import { MdImportantDevices } from 'react-icons/md'

import styles from './Search.module.scss'

const Search = () => {
    return (
        <div className={styles.header}>
            <div className={styles.headerTop}>
                <div className={styles.logo}>
                    <Link to='/'>
                        <img src="../../../image/logo/logomobile.png" alt="" />
                    </Link>
                </div>

                <div className={styles.searchBox}>
                    <FiSearch />
                    <input type='text' placeholder='Search and hit enter....' />
                    <span>All Category</span>
                </div>

                <div className={styles.icon}>
                    <div className={styles.cart}>
                        <Link to='/' className={styles.history}>
                            {/* <span>{CartItem.length === 0 ? "" : CartItem.length}</span> */}
                            <span>Lịch sử mua hàng</span>
                        </Link>
                        <Link to='/cart'>
                            <AiOutlineShoppingCart />
                            {/* <span>{CartItem.length === 0 ? "" : CartItem.length}</span> */}
                            <span>Giỏ hàng</span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className={styles.headerMain}>
                <div>
                    <ul className={styles.mainMenu}>
                        <li>
                            <Link to='' >
                                <BsPhone />
                                <p>Điện thoại</p>
                            </Link>
                        </li>
                        <li>
                            <Link to='' >
                                <AiOutlineLaptop />
                                <p>Laptop</p>
                            </Link>
                        </li>
                        <li>
                            <Link to='' >
                                <FaTabletAlt />
                                <p>Tablet</p>
                            </Link>
                        </li>
                        <li>
                            <Link to='' >
                                <SlEarphones />
                                <p>Phụ kiện</p>
                            </Link>
                        </li>
                        <li>
                            <Link to='' >
                                <BsSmartwatch />
                                <p>Smart Watch</p>
                            </Link>
                        </li>
                        <li>
                            <Link to='' >
                                <FiWatch />
                                <p>Đồng Hồ</p>
                            </Link>
                        </li>
                        <li>
                            <Link to='' >
                                <BsPhone />
                                <p>Máy cũ giá rẻ</p>
                            </Link>
                        </li>
                        <li>
                            <Link to='' >
                                <MdImportantDevices />
                                <p>PC, Máy in</p>
                            </Link>
                        </li>
                        <li>
                            <Link to='' >
                                <p>Sim, thẻ cào</p>
                            </Link>
                        </li>
                        <li>
                            <Link to='' >
                                <p>Dịch vụ tiện ích</p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Search