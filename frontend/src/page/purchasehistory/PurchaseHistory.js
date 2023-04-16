import SubNavication from "./subnavication/subnavication";

import styled from 'styled-components';
import { Outlet } from "react-router";
// import MainPurchase from "./mainpurchase/MainPurchase";

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