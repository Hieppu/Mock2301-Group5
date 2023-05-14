import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import CustomLinks from '../../../custom/customlinks/CustomLink';
import CustomLinks2 from '../../../custom/customlinks/CustomLinks2'
import menuLinksPH from '../../../data/menulinkspurchase/menuLinksPH';
import { useState } from 'react';


const SubNavicationContainer = styled.div`
    // border-right: 1px red solid;
    width: 40%;
    margin: 0 12px;
    // margin: auto;
    padding: 16px;
    height: auto;
    padding: 8px;
    flex-decription: between-space;


    .subNavication-header{
        display: flex;
        position: relative;
        justify-content: space-between;
        margin: 1rem 0rem;
        font-size: 16px;
    }

    .menu-links{
        // border: 1px black solid;
        margin: 1rem 0rem;
    }
    
    .subNavication-header span{
        margin-right: 4px;

    }
    .subNavication-header span::after{
        content: "";
        border-width: 12px 0.1px;
        border-style: solid;
        border-color: #ccc;
        position: absolute;
        right: 76%;
        right: 32.3%;
        top: 0%;
    }

    .subNavication-header a{
        color: blue;
    }

       .subNavication-footer{
        background-color: #fff8d4;
        padding: 6px;
        border-radius: 8px;
        .footer-head{
            border-bottom: solid 1px #ccc;
            margin-bottom: 6px;
        }
        .footer-body{
            b{
                display: block;
                margin-bottom: 4px;
            }
            p{
                color: #6e6e6e;
                font-size: 10px;
            }
            display: flex;

            .app-qr{
                height: 72px;
                width: auto;
            }
        }
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
                    <div className='footer-text'>
                        <b>Tải App tặng quà VIP</b>
                        <p>Tích điểm và sử dụng điểm cho khách hàng thân thiết. Sản phẩm của tập đoàn P&P</p>
                    </div>
                    <img className="app-qr" src="https://www.thegioididong.com/lich-su-mua-hang/images/2022/qr_download_gift_vip_app.png"/>
                </div>
            </div>
        </SubNavicationContainer>
    )
}


export default SubNavication;