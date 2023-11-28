import './App.css';
import React from 'react';
import {Route, BrowserRouter as Router, Routes} from "react-router-dom"

import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Description from './components/Description';
import Cards from './components/Cards';
import Profile from './perfil/Profile';
import Movies from './movies/Movies';
import Footer from './components/Footer';
import Pagina3 from './components/Pagina3';
import ReturnBt from './components/ReturnBt';
import Contacts from './contact/ContactForm';
import Weather from './weather/Weather';

function App() {
  return (
      <div>
      <Router>
        <Routes>
          <Route path="/" element={<><Navbar /><HomePage /><Description /> <Cards /><Footer /></>}/>
          <Route path="def" element={<><Navbar /><Description /><Footer /></> } />
          <Route path="apis" element={<><Navbar /><Cards /><Footer /></>} />
          <Route path="perfil" element={<> <Navbar /><Profile /><Footer /></>} />
          <Route path="contactos" element={<> <Navbar /><Contacts /><Footer /></>} />
          <Route path="movies" element={<> <Navbar /><ReturnBt/> <Movies /><Footer /></>} />
          <Route path="weather" element={<><Navbar /><ReturnBt/> <Weather /> <Footer /></>} />
          <Route path="sport" element={<><Navbar /><ReturnBt/> <Pagina3 /> <Footer /></>} /> 
        </Routes>
      </Router>

      </div>
  );
}


export default App;