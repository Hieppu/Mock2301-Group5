import React from 'react';
import Slider from 'react-slick';

import DataSlider from './DataSlider';

import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import styles from './SliderCard.module.scss';

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className={styles.controlBtn} onClick={onClick}>
      <button className={styles.next}>
        <AiOutlineArrowRight />
      </button>
    </div>
  );
};
const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className={styles.controlBtn} onClick={onClick}>
      <button className={styles.prev}>
        <AiOutlineArrowLeft />
      </button>
    </div>
  );
};

const SliderCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => {
      return <ul className={styles.slickDots}>{dots}</ul>;
    },
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className={styles.homeSlide}>
      <div className={styles.container}>
        <Slider {...settings} className={styles.slickSlider}>
          {DataSlider.map((value, index) => {
            return (
              <div className={styles.boxSlider} key={index}>
                <div className={styles.left}>
                  <h1>{value.title}</h1>
                  <p>{value.desc}</p>
                  <button className={styles.btnPrimary}>Visit Collections</button>
                </div>
                <div className={styles.right}>
                  <img src={value.cover} alt="" />
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default SliderCard;
