import userActions from '~/redux/actions/userActions';
import styles from './donhang.module.scss'
import PurchaseCard from './PurchaseCard';
import { connect } from 'react-redux'
import { useEffect, useState } from 'react';
const DonHang = (props) =>{
    useEffect(()=>{
        props.cardAPI();
    },[]
    )
    return(
        <div className={styles.donhangContainer}>
            <div className={styles.header}>
                <h3>Đơn hàng đã mua</h3>
                {/* <p>Từ {} - {}</p> */}
            </div>

            <div className={styles.listItem}>
                <div className={styles.item}>
                    <PurchaseCard />
                </div>
            </div>
        </div>
    )
} 

const mapStateToProps = (state) =>{
    return{
        listCard: state.userInfo.listCard
    }
}

const mapDispatchToProps = (dispatch, ownProps)=>{
    return{
        cardAPI: ()=>{
            dispatch(userActions.cardAPI());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DonHang);