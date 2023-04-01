import React, { Component } from 'react';
export default class About extends Component {
   render() {
      return (
         <section id="about">
            <div className="row work">

               <div className="three columns">

                  <img className="profile-pic" src="images/about.jpg" alt="" />

               </div>

               <div className="nine columns main-col">

                  <h2 className='aboutinfo'>ABOUT</h2>
                  <p>
                     <strong>
                        Welcome to our shop, the one-stop destination for all your air cooling and water filtration needs! We offer a wide range of air coolers and water filter systems, along with spare parts for these machines. Additionally, our team provides efficient and reliable repair services for all your cooling and filtration devices. Trust us for quality products and excellent customer service.
                     </strong>
                  </p>
               </div>
            </div>
         </section>
      );
   }
}