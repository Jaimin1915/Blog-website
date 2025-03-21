import React from 'react';
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blogs'
import Contact from './pages/Contact'
import Service from './pages/Services';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SingleBlog from './components/SingleBlog';

function App() {
  return(
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={ <Home />}/>
        <Route path='/about' element={ <About />}/>
        <Route path='/blog' element={ <Blog />}/>
        <Route path='/blog/:id' element={ <SingleBlog />}/>
        <Route path='/contact' element={ <Contact />}/>
        <Route path='/services' element={ <Service />}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App