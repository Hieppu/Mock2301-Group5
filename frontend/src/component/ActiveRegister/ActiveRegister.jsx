import HeaderHome from '../Header-home/HeaderHome';
import styles from './ActiveRegister.module.scss';
import Footer from './../Footer/Footer';
import { useEffect, useState } from 'react';
import userActions from '~/redux/actions/userActions';
import { dispatch } from 'redux';
import { connect, useDispatch } from 'react-redux';

function ActiveRegister(props) {
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

const mapStateToProps = (state) => {
  return {
    messageActiveSuccess: state.userInfo.messageActiveSuccess,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    activeAccount: (token) => {
      dispatch(userActions.activeAccount(token));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ActiveRegister);
