
import styled from 'styled-components';
// import MainPurchase from "./mainpurchase/MainPurchase";
import { Outlet } from 'react-router-dom';
import SubNavication from '../subnavication/subnavication';

const PurchaseHistoryContainer = styled.div`
    display: flex;
    width: 100%;
    
`

const PurchaseHistory = (props) =>{
    return (
        <PurchaseHistoryContainer className="PurchaseHistory">
            <SubNavication />
            <div className='purchase-history-content'>
                <Outlet/>
            </div>

        </PurchaseHistoryContainer>
    )
}

export default PurchaseHistory;