import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ImageSection1 from './components/ImageSection1';
import BoxsSection from './components/BoxsSection';
import ImageSection2 from './components/ImageSection2';
import CardsSection from './components/CardsSection';
import VolunteerSection from './components/VolunteerSection';
import Footer from './components/Footer';

function App() {
  return (
    <div>
     <NavBar/>
     <ImageSection1/>
     <BoxsSection/>
     <ImageSection2/>
     <CardsSection/>
     <VolunteerSection/>
     <Footer/>
    </div>
  );
}

export default App;
