import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import HeaderHome from '../../component/Header-home/HeaderHome';
import Footer from '../../component/Footer/Footer';

import styles from './Features.module.scss';

const Features = () => {
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div className={styles.home}>
      {isLoading ? (
        <div className={styles.ldsRoller}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : (
        <>
          <HeaderHome />
          <div className={styles.container}>
            <Outlet />
          </div>
          <Footer />
        </>
      )}
    </div>
  );
};

export default Features;
