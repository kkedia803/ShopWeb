import React, { Component } from 'react';
export default class Header extends Component {
   render() {
      return (
         <header id="home">
            <nav id="nav-wrap">
               <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
               <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
               <ul id="nav" className="nav">
                  <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                  <li><a className="smoothscroll" href="#about">About</a></li>
                  <li><a className="smoothscroll" href="#part1">Contact</a></li>
               </ul>
            </nav>
            <div className="row banner">
               <div className="banner-text">
                  <h1 className="responsive-headline">Adarsh Refrigeration And Air-Conditioning</h1>
                  <hr />
               </div>
            </div>
            <p className="scrolldown">
               <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
            </p>
         </header>
      );
   }
}