
import './App.css';

import Navbar from './Components/Navbar/Navbar'
import SlideNav from './Components/Side-nav/side-nav';
import Home from './Components/Home/Home';
import { Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div className="parent">
    <Navbar/>
    <SlideNav/>
    <Routes>
       <Route path='/' element={<Home/>}/>
    </Routes>
    </div>
  );
}

export default App;
