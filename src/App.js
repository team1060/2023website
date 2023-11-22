import { useState } from 'react';
import './assets/css/style.scss'
import { Routes, Route, NavLink } from 'react-router-dom';
import {vData} from './data'
import ViewProduct from './components/product/ViewProduct';
import MainComp from './components/product/MainComp';
function App() {
  const [isActive, setIsActive] = useState(false)
  const [vIData, setVIData] = useState(vData)
  return (
      <div className="App">
        <nav className="header container">
          <h1>COMPANY</h1>
          <ul className='menu'>
            <li><NavLink to="/">home</NavLink></li>
            <li><NavLink to="/company">company</NavLink></li>
            <li><NavLink to="/product/0">product</NavLink></li>
            <li><NavLink to="/community">community</NavLink></li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' element={<MainComp vIData={vIData} />}></Route>
          <Route path='/company' element={<div className='container bg com h100 flex-center'>회사소개페이지입니다.</div>}></Route>
          <Route path='/product/:item' element={<ViewProduct vIData={vIData} />}></Route>
          <Route path='/community' element={<div className='container bg comm h100 flex-center'>소통의 공간입니다.</div>}></Route>
        </Routes>
      </div>
  );
}

export default App;
