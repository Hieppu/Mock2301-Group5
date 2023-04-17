import React from "react"
import { AiOutlineThunderbolt } from 'react-icons/ai'
import FlashCard from "./FlashCard"
import styles from './FlashDeals.module.scss'
const FlashDeals = ({ productItems, addToCart }) => {
  return (
    <div className={styles.flash}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <AiOutlineThunderbolt />
          <h1>Flash Deals</h1>
        </div>
        <FlashCard productItems={productItems} addToCart={addToCart} />
      </div>
    </div>
  )
}

export default FlashDeals
