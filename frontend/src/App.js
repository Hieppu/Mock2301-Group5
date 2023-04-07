import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Signup from './page/signup/SignUp';
import Signup2 from './page/signup/SignUp2';
import NotFound from './page/notfound/NotFound';
import Home from './component/Home/Home';

function App() {
  return (
    <div className="App">

      <Routes>

        <Route path='/sign-up' element={<Signup />} />
        <Route path='/sign-up2' element={<Signup2 />} />

        <Route path='/' element={<Home />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
