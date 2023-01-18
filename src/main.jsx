import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import Home from "./pages/Home";
import Search from './pages/Search';
import Movie from './pages/Movie';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import './index.css'
import NotFound from './pages/NotFound';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route element={<App />}>
        <Route path='/' element={<Home />} />
        <Route path='/movie/:id' element={<Movie />} />
        <Route path='search' element={<Search />} />
        <Route path='*' element={<NotFound />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes> 
    </BrowserRouter>
  </React.StrictMode>,
)
