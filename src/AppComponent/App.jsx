import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import './App.css'
import PersonalInfor from '../PersonalInfoComponent/PersonalInfo';
import About from '../AboutComponent/About';
import Interests from '../InterestsComponent/Interests';
import Footer from '../FooterComponent/Footer';

function App() {
  return (
    <div className="App">
      <PersonalInfor />
      <About />
      <Interests />
      <Footer />
    </div>
  )
}

export default App
