import { Route, Routes } from 'react-router-dom';
import './App.css';
import Features from './page/features/Features';
import NotFound from './page/notfound/NotFound';
import DonHang from './page/purchasehistory/donhang/DonHang';
import InforAddress from './page/purchasehistory/infor_address/InforAddress';
import PurchaseHistory from './page/purchasehistory/PurchaseHistory';
import { publicRoutes } from './routes';

function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/sign-up2" element={<Signup2 />} />

        <Route path="/" element={<Features />}>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/notification" element={<Notification />} />
        </Route>

        <Route path="/purchase-history" element={<PurchaseHistory />}>
          <Route path="/purchasehistory/donhang" element={<DonHang />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes> */}


      <Routes>
        {publicRoutes.map((publicRoute, index) => {
          const Component = publicRoute.component;
          return (
            <Route key={index} path={publicRoute.path} element={<Component />}>
              {publicRoute.childRoute?.map((item, childIndex) => {
                const ChildComponent = item.component;

                const childPath = publicRoute.path + item.path;
                return <Route key={childIndex} path={childPath} element={<ChildComponent />} />;
              })}
            </Route>
          );
        })}

        <Route path="/" element={<Features />}>
          <Route path="/history" element={<PurchaseHistory />}>
            <Route path="/history/donhang" element={<DonHang />} />
            <Route path="/history/infor-address" element={<InforAddress />} />
          </Route>  
        </Route>



        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
