import { useState } from 'react';
import styles from './inforAddress.module.scss'
const InforAddress = () =>{
    const [userAdress, setUserAdress] = useState({
        gender: 'male',
        fullName: 'Nguyễn Sơn Tùng',
        phoneNumber: "0332873278"
    });
    return(
        <div className={styles.InforAddress}>
            <div className={styles.header}>
                <b>Thông Tin Tài Khoản</b>
            </div>

            <div className={styles.content}>
                <div className={styles.contentHeader}>
                    <b>Thông Tin Cá Nhân</b>
                    <p>{userAdress.gender} {userAdress.fullName} - {userAdress.phoneNumber}</p>
                </div>

                <div className={styles.contentBody} >
                    <form className={styles.formSelect} action="https://httpbin.org/anything" method="post">
                        <label for="lang-select">Địa Chỉ Nhận Hàng</label>
                        <br/>
                        <select className={styles.select} name="lang" id="lang-select">
                            <option value="">--Tỉnh/Thành phố--</option>
                        </select>

                        <select className={styles.select} name="lang" id="lang-select">
                            <option value="">--Tỉnh/Thành phố--</option>
                        </select>


                        <select className={styles.select} name="lang" id="lang-select">
                            <option value="">--Tỉnh/Thành phố--</option>
                        </select>

                        <input className={styles.select} type="text" name='nơi cư chú'/>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default InforAddress;