import React, { Component } from 'react';
import '../../assets/scss/public.scss';
import './style.scss'

class Content extends Component {
    render(){
        return (
            <section className="clasifd-section-list inner-all">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="doctors-details">
                                <h1 className="details-list-title">Our All Physicians</h1>
                                <div className="row wow slideInUp">
                                    <div className="col-md-4">
                                        {/* <div className="orb details-list">
                                            <div className="repead-row">
                                                <div className="col-md-5">
                                                    <div className="img-object">
                                                        <img src="" alt="" />
                                                    </div>
                                                </div>
                                                <div className="col-md-7">
                                                    <div className="content-object">
                                                        <h5>Ayman Elazm</h5>
                                                        <a className="link-object" href="#">Pediatricians</a>
                                                        <p>Mobile: 305102651</p>
                                                        <a className="mailoto-object" href="#">ayama@yahoo.com</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 wow slideInRight">
                            <div className="doctor-collum">
                                <div className="rows">
                                    <div className="repead-row">
                                        
                                    </div>
                                    <div className="marqee-height marqee-height-sigbar">
                                        <div className="marquee--inner">
                                            {/* <div className="orb">
                                                <div className="repead-row">
                                                    <div className="col-md-5">
                                                        <div className="img-object">
                                                            <img src="images/restorent1.jpg" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-7">
                                                        <div className="content-object">
                                                            <h5>Ayman Elazm</h5>
                                                            <a className="link-object" href="#">Pediatricians</a>
                                                            <p>Mobile: 305102651</p>
                                                            <a className="mailoto-object" href="#">ayama@yahoo.com</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Content