import HeaderHome from '../Header-home/HeaderHome';
import styles from './ActiveRegister.module.scss';
import Footer from './../Footer/Footer';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function ActiveRegister() {
  const [counter, setCounter] = useState(3);

  useEffect(() => {
    const timer = setInterval(() => setCounter(counter - 1), 1000);
    if (counter === 0) {
      window.location.href = '/';
      setCounter(0);
      clearInterval(timer);
      return;
    }
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <div className={styles.wrapper}>
      <HeaderHome />
      <div className={styles.formActive}>
        <div className={styles.content}>
          <img src="../../../image/logo/logomobile.png" alt="" />
          <h1>Tài khoản của bạn đã kích hoạt thành công</h1>
          <span>
            Bạn sẽ được chuyển hướng về trang đăng nhập trong vòng&nbsp;<p>{counter}</p>&nbsp;giây
          </span>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ActiveRegister;
