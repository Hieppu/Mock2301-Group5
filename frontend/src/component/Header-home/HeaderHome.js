import React from 'react'
import Head from './HeadHome'
import './HeaderHome.scss'
import Search from '../Search/Search'

const HeaderHome = () => {
    return (
        <div>
            <Head />
            <Search />
        </div>
    )
}

export default HeaderHome