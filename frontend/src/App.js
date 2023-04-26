import { Route, Routes } from 'react-router-dom';
import './App.css';
import NotFound from './page/notfound/NotFound';
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

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
