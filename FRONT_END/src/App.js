import { Route, Routes } from 'react-router-dom';
import './App.css';
import DonHang from './page/purchasehistory/donhang/DonHang';
import PurchaseHistory from './page/purchasehistory/PurchaseHistory';
import Signup from './page/signin/SignIn';
import Signup2 from './page/signin/SignIn2';
import NotFound from './page/notfound/NotFound';
import Cart from './page/features/cart/Cart';
import Notification from './page/features/notification/Notification';
import Features from './page/features/Features';
import Home from './page/features/home/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/sign-up2" element={<Signup2 />} />

        <Route path="/" element={<Features />}>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/notification" element={<Notification />} />
        </Route>

        <Route path="/purchasehistory" element={<PurchaseHistory />}>
          <Route path="/purchasehistory/donhang" element={<DonHang />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
