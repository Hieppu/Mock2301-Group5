import styles from './inforAddress.module.scss'
const InforAddress = () =>{
    return(
        <div className={styles.InforAddress}>
            <div className={styles.header}>
                <b>Thông Tin Tài Khoản</b>
            </div>

            <div className={styles.content}>
                <div className={styles.contentHeader}>
                    <b>Thông Tin Cá Nhân</b>
                    <p>{} {} - {}</p>
                </div>

                <div className={styles.contentBody} >
                    <div className='title'>

                    </div>

                    <form className='address'>
                        <label>
                            Name:
                            <input type="password" name="name" />
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    )
}
export default InforAddress;