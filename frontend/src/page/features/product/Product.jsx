import React from 'react'
import { Link } from 'react-router-dom'

import Data from '../../../component/FlashDeals/Data'

import { AiTwotoneStar } from 'react-icons/ai'
import { IoMdAdd } from 'react-icons/io'

import styles from './Product.module.scss'

const Product = ({ addToCart }) => {
    return (
        <div className={styles.boxContent}>
            <h1>Gợi ý hôm nay </h1>
            <div className={styles.listProduct}>
                {Data.map((productItem) => {
                    return (
                        <div className={styles.box} key={productItem.id}>
                            <div className={styles.product}>
                                <Link className={styles.item}>
                                    <div className={styles.img}>
                                        <span className={styles.discount}>{productItem.discount}% Off</span>
                                        <div className={styles.itemImg}>
                                            <img src={productItem.cover} alt='' />
                                        </div>

                                    </div>
                                    <div className={styles.productDetails}>
                                        <h3>{productItem.name}</h3>
                                        <div className={styles.price}>
                                            <h4>{productItem.price} </h4>
                                        </div>
                                        <div className={styles.rate}>
                                            <div className={styles.star}>
                                                <b>{productItem.star}</b>
                                                <AiTwotoneStar />
                                            </div>
                                            {/* step : 3  
                                             if hami le button ma click garryo bahne 
                                            */}
                                            <button onClick={() => addToCart(productItem)}>
                                                <IoMdAdd />
                                            </button>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Product