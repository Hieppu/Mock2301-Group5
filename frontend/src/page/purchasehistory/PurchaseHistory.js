import MainPurchase from "./mainpurchase/mainpurchase";
import SubNavication from "./subnavication/subnavication";

import styled from 'styled-components';

const PurchaseHistoryContainer = styled.div`
    display: flex;
    width: 100%;
    
`

const PurchaseHistory = (props) =>{
    return (
        <PurchaseHistoryContainer className="PurchaseHistory">
            <SubNavication />
            <MainPurchase />
        </PurchaseHistoryContainer>
    )
}

export default PurchaseHistory;