import { Customer } from './Customer.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import {Seller} from "./Seller.js"

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/customer' element={<Customer/>}/>
      </Routes>
      <Routes>
        <Route path='/Seller' element={<Seller/>}/>
      </Routes>
    </Router>
  );
}

export default App;
