import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Payment from './pages/Payment';
import Contact from './pages/Contact';
import Menu from './pages/Menu';
import Pagenotfound from './pages/Pagenotfound';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Payment" element={<Payment />}/>
        <Route path="/Contact" element={<Contact />}/>
        <Route path="/Menu" element={<Menu />}/>
        <Route path="*" element={<Pagenotfound />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
