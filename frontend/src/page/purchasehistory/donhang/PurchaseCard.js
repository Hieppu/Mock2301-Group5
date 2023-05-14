import styles from './PurchaseCard.module.scss';
import CustomButton from '../../../custom/custombutton/CustomButton';
import { connect } from 'react-redux'
import { useState, useEffect } from 'react';
import userActions from '~/redux/actions/userActions';

const PurchaseCard = (props)=>{
    const [cardItem, setCardItem] = useState({});
    useEffect(()=>{
        props.cardAPI();
        console.log('call api')
    },[])
    console.log(props.listCard);
    
    console.log("component render....")
    return(
        // <div className={styles.PurchaseCard}>
        //     <div className={styles.title}>
        //         <div className={styles.codeOder}>Đơn hàng: {cardItem.id} <span>Giao trước {cardItem.firstDate} - {}({cardItem.lastDate})</span></div>
        //         <div className={styles.status}>
        //             {cardItem.status}
        //         </div>
        //     </div>
        //     <div className={styles.content}>
        //         <img className={styles.img} alt="qr code" src="https://cdn.tgdd.vn/Products/Images/42/264060/samsung-galaxy-s23-200x200.jpg"/>
        //         <div className={styles.desciption}>
        //             <span>{cardItem.firstDate}</span>
        //             <span>Tổng tiềm: {cardItem.price}</span>
        //         </div>
        //     </div>
            
        //     {/* <CustomButton>View</CustomButton> */}
        // </div>

        <div className={styles.wapper}>
            {props.listCard && props.listCard.map((item, index)=>{
            return(
                <div className={styles.PurchaseCard} key={item.id}>
                    <div className={styles.title}>
                        <div className={styles.codeOder}>Đơn hàng: {index + 1} <span>Giao trước {item.firstDate} - {}({item.lastDate})</span></div>
                        <div className={styles.status}>
                            {item.status}
                        </div>
                    </div>
                    <div className={styles.content}>
                        <img className={styles.img} alt="qr code" src="https://cdn.tgdd.vn/Products/Images/42/264060/samsung-galaxy-s23-200x200.jpg"/>
                        <div className={styles.desciption}>
                            <span>{item.desciption}</span>
                            <div>
                                <span>Tổng tiềm: {item.price}</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className={styles.button}>
                        <CustomButton>
                            Xem chi tiết
                        </CustomButton>
                    </div>
                </div>
            )
        })}
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

export default connect(mapStateToProps, mapDispatchToProps) (PurchaseCard);