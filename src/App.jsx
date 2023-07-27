import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import '../src/App.css'
import { Header } from './Components/Header/Header';
import { Profile } from './Components/Profile/Profile';
import { Academic } from './Components/Academic/Academic';
import { Experience } from './Components/Experience/Experience';
import { Skills } from './Components/Skills/Skills';
import { Interest } from './Components/Interest/Interest';
import { Languages } from './Components/Languages/Languages';


function App() {

  return (
    <div className='App'>
      <Header />
      <Profile />
      <Experience />
      <div className="container-Academic-Skills">
        <Academic />
        <Skills />
      </div>
      <div className="container-Interest-languages">
      <Interest />
      <Languages />
      </div>
    </div>
  )
}

export default App
