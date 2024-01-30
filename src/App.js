
import './App.css';
import Header from './Header';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import About from './pages/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Header /> }></Route>
      <Route path="/home" element={ <Home /> }></Route>
      <Route path="/contact" element={ <ContactUs /> }></Route>
      <Route path="/about" element={ <About /> }></Route>
    </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
