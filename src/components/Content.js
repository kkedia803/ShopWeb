import React, { Component } from 'react';

export default class Content extends Component {

    render() {

        return (
            <section id="resume">
                <div className="row">
                    <p>OUR WORKS</p>
                    <div className='centerp1'>
                        <div className='centerp2'>
                            <div className='pcontent'>
                                <div className='imgsrc'>
                                    <img className="imgmain" src="images/water-filter.png" alt="" itemScope="" itemProp="image" loading="lazy" />
                                    <span className='imgtxt'>PRODUCTS</span>
                                </div>
                                <div className='imgsrc' href='/service'>
                                    <img className="imgmain" src="images/tool-box.png" alt="" itemScope="" itemProp="image" loading="lazy" />
                                    <span className='imgtxt'>SERVICES</span>
                                </div>
                                <div className='imgsrc'>
                                    <img className="imgmain" src="images/spare-parts.png" alt="" itemScope="" itemProp="image" loading="lazy" />
                                    <span className='imgtxt'>PARTS</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}