import React from 'react'

import SliderCard from '../../../component/Slider/SliderCard'
import FlashDeals from '../../../component/FlashDeals/FlashDeals'
import Category from '../category/Category'
import Product from '../product/Product'

import styles from './Home.module.scss'

const Home = () => {
    return (
        <div className={styles.mainHome}>
            <SliderCard />
            <FlashDeals />
            <Category />
            <Product />
        </div>
    )
}

export default Home