import { Route, Routes } from 'react-router-dom';
import './App.css';
import Signup from './page/signup/SignUp';
import Signup2 from './page/signup/SignUp2';
import NotFound from './page/notfound/NotFound';
import Cart from './page/features/cart/Cart';
import Notification from './page/features/notification/Notification';
import Features from './page/features/Features';

function App() {
  return (
    <div className="App">

      <Routes>

        <Route path='/sign-up' element={<Signup />} />
        <Route path='/sign-up2' element={<Signup2 />} />

        <Route path='' element={<Features />} >
          <Route path='cart' element={<Cart></Cart>}></Route>
          <Route path='notification' element={<Notification></Notification>}></Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div >
  );
}

export default App;
