import React from "react"
import { BsTelephone } from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'
const Head = () => {
    return (
        <div className='head'>
            <div className='container'>
                <div className='left'>
                    <BsTelephone />
                    <label> +88012 3456 7894</label>
                    <HiOutlineMail />
                    <label> support@ui-lib.com</label>
                </div>
                <div className='right'>
                    <label>Theme FAQ"s</label>
                    <label>Need Help?</label>
                    <span>🏳️‍⚧️</span>
                    <label>EN</label>
                    <span>🏳️‍⚧️</span>
                    <label>USD</label>
                </div>
            </div>
        </div>
    )
}

export default Head
