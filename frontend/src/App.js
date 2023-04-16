import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import DonHang from './page/purchasehistory/donhang/DonHang';
import InforAddress from './page/purchasehistory/infor_address/InforAddress';
import PurchaseHistory from './page/purchasehistory/PurchaseHistory';
import Signup from './page/signup/SignUp';
import Signup2 from './page/signup/SignUp2';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/sign-up' element={<Signup />} />
        <Route path='/sign-up2' element={<Signup2 />} />
        <Route path='/purchasehistory' element={<PurchaseHistory />}>
          <Route path="donhang" element={<DonHang />} />
          <Route path="infor-address" element={<InforAddress />} />



        </Route>
      </Routes>
    </div>
  );
}

export default App;
