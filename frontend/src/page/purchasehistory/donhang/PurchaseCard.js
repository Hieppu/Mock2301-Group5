import styles from './PurchaseCard.module.scss';
import CustomButton from '../../../custom/custombutton/CustomButton';
import { useState } from 'react';

const PurchaseCard = (props)=>{
    const [codeOder, setCodeOder] = useState(1234);
    const [firstDay, setFirstDay] = useState("22-12-2002");
    const [lastDay, setLastDay] = useState("29-12-2002");
    const [day, setDay] = useState("thứ 5");
    const [price, setPrice] = useState(29999999);
    const [status, setStatus] = useState("Đã hủy");
    
    return(
        <div className={styles.PurchaseCard}>
            <div className={styles.title}>
                <div className={styles.codeOder}>Đơn hàng: {codeOder} <span>Giao trước {firstDay} - {day}({lastDay})</span></div>
                <div className={styles.status}>
                    {status}
                </div>
            </div>
            <div className={styles.content}>
                <img className={styles.img} alt="qr code" src="https://cdn.tgdd.vn/Products/Images/42/264060/samsung-galaxy-s23-200x200.jpg"/>
                <div className={styles.desciption}>
                    <span>Samsung Galaxy S23 S911B (8G+128G) Tím</span>
                    <span>Tổng tiềm: {price}</span>
                </div>
            </div>
            
            <CustomButton />
        </div>
    )
}

export default PurchaseCard;