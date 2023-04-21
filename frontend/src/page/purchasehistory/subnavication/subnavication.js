import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import CustomLinks from '../../../custom/customlinks/CustomLink';
import CustomLinks2 from '../../../custom/customlinks/CustomLinks2'
import menuLinksPH from '../../../data/menulinkspurchase/menuLinksPH';
import { useState } from 'react';


const SubNavicationContainer = styled.div`
    border-right: 1px red solid;
    width: 30%;
    margin: 0 20px;
    // margin: auto;
    padding: 16px;
    height: 100vh;
    padding: 8px;
    flex-decription: between-space;


    .subNavication-header{
        display: flex;
        justify-content: space-between;
        margin: 1rem 4.8rem;
    }

    .menu-links{
        // border: 1px black solid;
        margin: 1rem 2.8rem;
    }
    
    .subNavication-header span{
        border-right: 1px black solid;
        margin-right: 4px;

    }
    .subNavication-header a{
        color: blue;
    }

        .footer-body{
            display: flex;
        }


`
const SubNavication = (props) =>{
    const [name, setName] = useState('Nguyễn Sơn Tùng');
    return (
        <SubNavicationContainer className="subnavication">
            <div className = 'subNavication-header'>
                <span>Anh <b>{name}</b></span>
                <Link to='/'>Đăng xuất</Link>
            </div>
                {/* <CustomLinks menuLinks={menuLinksPH} /> */}
                <div className='menu-links'>
                <CustomLinks2 menuLinks={menuLinksPH} />
                </div>
            

            <div className='subNavication-footer'>
                <div className="footer-head">
                    Tổng điểm tích lũy: {}
                </div>

                <div className="footer-body">
                    <p><b>Tải App tặng quà VIP</b><br/>Tích điểm và sử dụng điểm cho khách hàng thân thiết. Sản phẩm của tập đoàn P&P</p>
                    <img className="app-qr" src="https://www.thegioididong.com/lich-su-mua-hang/images/2022/qr_download_gift_vip_app.png"/>
                </div>
            </div>
        </SubNavicationContainer>
    )
}


export default SubNavication;