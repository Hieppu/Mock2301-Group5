import styles from './donhang.module.scss'
import PurchaseCard from './PurchaseCard';
const DonHang = (props) =>{
    return(
        <div className={styles.donhangContainer}>
            <div className={styles.header}>
                <h3>Đơn hàng đã mua</h3>
                <p>Từ {} - {}</p>
            </div>

            <div className={styles.listItem}>
                <div className={styles.item}>
                    <PurchaseCard />
                </div>
            </div>


            <div className={styles.content}>

            </div>
        </div>
    )
} 

export default DonHang;