import { Route, Routes } from 'react-router-dom';
import './App.css';
import Signup from './page/signup/SignUp';
import Signup2 from './page/signup/SignUp2';
import NotFound from './page/notfound/NotFound';
import Cart from './page/features/cart/Cart';
import Notification from './page/features/notification/Notification';
import Features from './page/features/Features';
import Home from './page/features/home/Home';

function App() {
  return (
    <div className="App">

      <Routes>

        <Route path='/sign-up' element={<Signup />} />
        <Route path='/sign-up2' element={<Signup2 />} />

        <Route path='/' element={<Features />} >
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/notification' element={<Notification />}></Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div >
  );
}

export default App;
