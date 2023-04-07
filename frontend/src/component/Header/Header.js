import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
const Header = () => {
    return (
        <div className="signup-header">
            <div className='form-text'>
                <div className='link-content'>
                    <Link className='logo-mobile'>
                        <img src="../../../image/logomobile.png" alt="" />
                    </Link>
                    <div className='text'>Đăng ký</div>
                </div>
                <div className='helper'>
                    <Link>Bạn cần giúp đỡ?</Link>
                </div>
            </div>
        </div>
    )
}

export default Header