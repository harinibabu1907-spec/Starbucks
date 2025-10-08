import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Nav from './navbar/Nav.js';
import Home from './home/Home.js';
import Footer from './footer/Footer.js';
import Pro1 from './product/Pro1.js';
import Pro2 from './product/Pro2.js';
import Pro3 from './product//Pro3.js';
import Pro4 from './product//Pro4.js';
import Cart from './product/Cart.js';
import Pro5 from './product/Pro5.js';
import Pro6 from './product/Pro6.js';

function App() {
  return (
  <div>
  <BrowserRouter>
  <Nav/>
  <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/gift" element={<Pro1/>}/>
  <Route path="/order" element={<Pro2/>}/>
  <Route path="/best" element={<Pro3/>}/>
  <Route path="/drink" element={<Pro4/>}/>
  <Route path="/cart"  element={<Cart/>}/>
  <Route path="/food" element={<Pro5/>}/>
  <Route path="/red" element={<Pro6/>}/>
      </Routes>
  <Footer/>
  </BrowserRouter>  
  </div>
  );
}

export default App;
