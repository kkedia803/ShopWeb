import React, { Component } from 'react';
export default class Footer extends Component {
  render() {
    return (
      <>

        <div id="container">
          <div id="part1">
            <div id="companyinfo">
              <a id="sitelink" href="#">ADARSH REFRIGERATION AND AIR-CONDITIONER</a>
              <p id="title">PROVIDING SERVICES IN GURGAON</p>
            </div>
            <div id="explore">
              <p id="txt1" className='add2'>Explore</p>
              <a className="link" href="#home">Home</a>
              <a className="link" href="#about">About</a>
            </div>
            <div id="visit">
              <p id="txt2" className='add'>Visit</p>
              <p className="text">504/6</p>
              <p className="text">JacobhPura</p>
              <p className="text">Ch Manhor Singh Azad Marg</p>
              <p className="text">Gurgaon, Haryana</p>
              <p className="text">Contact - 0811391053 , 7982151481</p>
              <p className="text">Email - anilkadam9810@gmail.com</p>
            </div>
          </div>
          <div>
          <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3507.6352203036317!2d77.0238231150787!3d28.460410682486092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDI3JzM3LjUiTiA3N8KwMDEnMzMuNiJF!5e0!3m2!1sen!2sin!4v1680370900664!5m2!1sen!2sin" width="800" height="600" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
        <footer>

          <div>
            <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
          </div>

        </footer>
      </>
    );
  }
}