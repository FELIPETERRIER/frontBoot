import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css';
import App from './App.jsx';
import Login from './components/login/login.jsx';
import Unauthorized from './Pages/unauthorized/Unauthorized.jsx';
import Page1 from './Pages/screen/page1.jsx';



createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App/>} />
    <Route path="/login" element={<Login/>} />  
    <Route path='/unauthorized' element={<Unauthorized/>}/>   
    <Route path='/page1' element={<Page1/>}/>
      
  </Routes>
</BrowserRouter>
)
