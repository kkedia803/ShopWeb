import React from 'react'
import Header from './components/Header';
import About from './components/About';
import Content from './components/Content';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div>
      <Header/>
      <About/>
      <Content/>
      <Footer/>
    </div>
  )
}
