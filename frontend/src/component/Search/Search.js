import React from 'react'
import { Link } from 'react-router-dom'
import { FiSearch } from 'react-icons/fi'
import { FaUserCircle, FaShoppingBag } from 'react-icons/fa'

import './Search.scss'
const Search = () => {
    return (
        <div className='search'>
            <div className='container'>
                <div className='logo'>
                    <img src="../../../image/logomobile.png" alt="" />
                </div>

                <div className='search-box'>
                    <FiSearch />
                    <input type='text' placeholder='Search and hit enter...' />
                    <span>All Category</span>
                </div>

                <div className='icon'>
                    <FaUserCircle />
                    <div className='cart'>
                        <Link to='/cart'>
                            <FaShoppingBag />
                            {/* <span>{CartItem.length === 0 ? "" : CartItem.length}</span> */}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search