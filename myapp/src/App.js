import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import {Seller} from "./Seller.js"
import { OrderDetail } from './orderDetail.js'
import { Customer } from './Customer.js'
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/customer' element={<Customer/>}/>
      </Routes>
      <Routes>
        <Route path='/Seller' element={<Seller/>}/>
      </Routes>
      <Routes>
        <Route path='/seller/orderDetail' element={<OrderDetail/>}/>
      </Routes>
    </Router>
  );
}

export default App;
