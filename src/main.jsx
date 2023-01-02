import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/home';
import Journeys from './pages/journeys';
import Stations from './pages/stations';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/journeys" element={<Journeys/>}/>
        <Route path="/stations" element={<Stations/>}/>
      </Routes>
    </Layout>
  </BrowserRouter>
)
