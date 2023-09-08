import React from 'react';
import "./App.css";
import { Navbar } from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const App = () => {
  return (
    <>
      <div className='realtive'>

      <Navbar/>
      </div>
      <div className='bg-slate-500 w-full h-screen'></div>
      <div className='relative'>

        <Footer/>
      </div>
    </>
  )
}

export default App