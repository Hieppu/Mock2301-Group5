import React from "react"
import Slider from "react-slick"
import { Link } from "react-router-dom"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import styles from './FlashDeals.module.scss'

import { AiOutlineArrowLeft, AiOutlineArrowRight, AiTwotoneStar } from 'react-icons/ai'
import { IoMdAdd } from 'react-icons/io'

import Data from "./Data"

const SampleNextArrow = (props) => {
  const { onClick } = props
  return (
    <div className={styles.controlBtn} onClick={onClick}>
      <button className={styles.next}>
        <AiOutlineArrowRight />
      </button>
    </div>
  )
}
const SamplePrevArrow = (props) => {
  const { onClick } = props
  return (
    <div className={styles.controlBtn} onClick={onClick}>
      <button className={styles.prev}>
        <AiOutlineArrowLeft />
      </button>
    </div>
  )
}
const FlashCard = ({ productItems, addToCart }) => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }
  return (
    <Slider {...settings} className={styles.slickSlider}>
      {Data.map((productItem) => {
        return (
          <div className={styles.box} key={productItem.id}>
            <div className={styles.product}>
              <Link className={styles.item}>
                <div className={styles.img}>
                  <span className={styles.discount}>{productItem.discount}% Off</span>
                  <div className={styles.itemImg}>
                    <img className={styles.imgCover} src={productItem.cover} alt='' />
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
    </Slider>
  )
}

export default FlashCard
