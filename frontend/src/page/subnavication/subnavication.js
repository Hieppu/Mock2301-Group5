import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import CustomLinks from '../../../custom/customlinks/CustomLink';
// import CustomLinks2 from '../../../custom/customlinks/CustomLinks2'
// import menuLinksPH from '../../../data/menulinkspurchase/menuLinksPH';

const SubNavicationContainer = styled.div`
    // border: 1px #ccc solid;
    width: 30%;
    margin: 1px;
    height: 100vh;
    background-color: #ccc;
    padding: 4px;
    flex-decription: between-space;
    
    .subNavication-header span{
        border-right: 1px black solid;
        margin-right: 4px;
    }
    .subNavication-header a{
        color: blue;
    }
`
const SubNavication = (props) => {
    return (
        <SubNavicationContainer className="subnavication">
            <div className='subNavication-header'>
                <span>Anh <b>Nguyễn Sơn Tùng</b></span>
                <Link to='/'>Đăng xuất</Link>
            </div>

            <div className='subNavication-container'>
                {/* <CustomLinks menuLinks={menuLinksPH} /> */}
                <Link to='/purchasehistory/donhang'>Donhang</Link>
            </div>
            {/* <CustomLinks menuLinks={menuLinksPH} /> */}
            {/* <CustomLinks2 menuLinks={menuLinksPH} /> */}


            <div className='subNavication-footer'>

            </div>
        </SubNavicationContainer>
    )
}
export default SubNavication;