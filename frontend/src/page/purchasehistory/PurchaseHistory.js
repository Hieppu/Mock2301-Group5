

import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

import SubNavication from "./subnavication/subnavication";

const PurchaseHistoryContainer = styled.div`
    display: flex;
    width: 100%;
    margin-top:123px;
    background-color: #edf0f5;
    min-height: 22rem;
    .purchase-history-content{
        width: 100%;
        margin-left: 3rem;
    }
    
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