import React, { Component } from 'react';
import '../../../assets/scss/public.scss';
import './style.scss';
import SwiperCom from '../swiperAnimate/swiperCom';

class Content extends Component {
    render(){
        return (
            <section className="clasifd-section-home">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="row">
                                <div className="col-md-4 wow slideInLeft">
                                    <div className="doctor-collum">
                                        <h3 className="ob-title1-all ob-title1">Physicians</h3>
                                        <div className="rows">
                                            <div className="marqee-height">
                                                <SwiperCom/>
                                            </div>
                                            <a className="view-all physicians-a" href="#!">
                                                View All Physicians
                                                <i className="fa fa-angle-right" aria-hidden="true"></i>
                                                <i className="fa fa-angle-right" aria-hidden="true"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 wow slideInUp">
                                    <div className="doctor-collum">
                                        <h3 className="ob-title1-all ob-title2">Lawyers </h3>
                                        <div className="rows">
                                            <div className="marqee-height">
                                                {/* <div className="marquee--inner">
                                                    <div className="orb">
                                                        <div className="repead-row">
                                                            <div className="col-md-5">
                                                                <div className="img-object">
                                                                    <img src="images/lawyer.jpg" alt="" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-7">
                                                                <div className="content-object">
                                                                    <h5>Ayman Elazm</h5>
                                                                    <a className="link-object" href="#!">Pediatricians</a>
                                                                    <p>Mobile: 305102651</p>
                                                                    <a className="mailoto-object" href="#!">ayama@yahoo.com</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div> */}
                                            </div>
                                            <a className="view-all lawyers-a" href="#!">
                                                View All Lawyers
                                                <i className="fa fa-angle-right" aria-hidden="true"></i>
                                                <i className="fa fa-angle-right" aria-hidden="true"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 wow slideInUp">
                                    <div className="doctor-collum">
                                        <h3 className="ob-title1-all ob-title3">Restaurants</h3>
                                        <div className="rows">
                                            <div className="marqee-height">
                                                {/* <div className="marquee--inner2">
                                                    <div className="orb">
                                                        <div className="repead-row">
                                                            <div className="col-md-5">
                                                                <div className="img-object">
                                                                    <img src="images/restorent1.jpg" alt="" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-7">
                                                                <div className="content-object">
                                                                    <h5>Ayman Elazm</h5>
                                                                    <a className="link-object" href="#!">Pediatricians</a>
                                                                    <p>Mobile: 305102651</p>
                                                                    <a className="mailoto-object" href="#!">ayama@yahoo.com</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div> */}
                                            </div>
                                            <a className="view-all restaurants-a" href="#!">
                                                View All Restaurants
                                                <i className="fa fa-angle-right" aria-hidden="true"></i>
                                                <i className="fa fa-angle-right" aria-hidden="true"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row bootto-col2">
                                <div className="col-md-4 wow slideInLeft">
                                    <div className="doctor-collum">
                                        <h3 className="ob-title1-all ob-title5">Rentals </h3>
                                        <div className="rows">
                                            <div className="marqee-height2 minus-row">
                                                {/* <div className="marquee--inner">
                                                    <div className="orb">
                                                        <div className="repead-row">
                                                            <div className="col-md-5">
                                                                <div className="img-object">
                                                                    <img src="images/restorent1.jpg" alt="" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-7">
                                                                <div className="content-object">
                                                                    <h5>Ayman Elazm</h5>
                                                                    <a className="link-object" href="#!">Pediatricians</a>
                                                                    <p>Mobile: 305102651</p>
                                                                    <a className="mailoto-object" href="#!">ayama@yahoo.com</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div> */}
                                            </div>
                                            <a className="view-all rentals-a" href="#!">
                                                View All Rentals
                                                <i className="fa fa-angle-right" aria-hidden="true"></i>
                                                <i className="fa fa-angle-right" aria-hidden="true"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 wow slideInRight">
                                    <div className="doctor-collum">
                                        <h3 className="ob-title1-all ob-title6">Looking for work </h3>
                                        <div className="rows">
                                            <div className="marqee-height2 minus-row">
                                                {/* <div className="marquee--inner2 col50">
                                                    <div className="orb">
                                                        <div className="repead-row">
                                                            <div className="col-md-5">
                                                                <div className="img-object">
                                                                    <img src="images/job1.jpg" alt="" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-7">
                                                                <div className="content-object">
                                                                    <h5>Ayman Elazm</h5>
                                                                    <a className="link-object" href="#!">Pediatricians</a>
                                                                    <p>Mobile: 305102651</p>
                                                                    <a className="mailoto-object" href="#!">ayama@yahoo.com</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div> */}
                                            </div>
                                            <a className="view-all looking-work-a" href="#!">
                                                View All Looking for work
                                                <i className="fa fa-angle-right" aria-hidden="true"></i>
                                                <i className="fa fa-angle-right" aria-hidden="true"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 wow slideInRight">
                                    <div className="doctor-collum">
                                        <h3 className="ob-title1-all ob-title7">Accountants </h3>
                                        <div className="rows">
                                            <div className="marqee-height2 minus-row">
                                                {/* <div className="marquee--inner3 col50">
                                                    <div className="orb">
                                                        <div className="repead-row">
                                                            <div className="col-md-5">
                                                                <div className="img-object">
                                                                    <img src="images/job1.jpg" alt="" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-7">
                                                                <div className="content-object">
                                                                    <h5>Ayman Elazm</h5>
                                                                    <a className="link-object" href="#!">Pediatricians</a>
                                                                    <p>Mobile: 305102651</p>
                                                                    <a className="mailoto-object" href="#!">ayama@yahoo.com</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div> */}
                                            </div>
                                            <a className="view-all accountants-a" href="#!">
                                                View All Accountants
                                                <i className="fa fa-angle-right" aria-hidden="true"></i>
                                                <i className="fa fa-angle-right" aria-hidden="true"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 wow slideInRight">
                            <div className="doctor-collum">
                                <h3 className="ob-title1-all ob-title4">Real State</h3>
                                <div className="rows">
                                    <div className="repead-row">
                                        
                                    </div>
                                    <div className="marqee-height marqee-height-sigbar">
                                        {/* <div className="marquee--inner">
                                            <div className="orb">
                                                <div className="repead-row">
                                                    <div className="col-md-5">
                                                        <div className="img-object">
                                                            <img src="images/restorent1.jpg" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-7">
                                                        <div className="content-object">
                                                            <h5>Ayman Elazm</h5>
                                                            <a className="link-object" href="#!">Pediatricians</a>
                                                            <p>Mobile: 305102651</p>
                                                            <a className="mailoto-object" href="#!">ayama@yahoo.com</a>
                                                        </div>
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
            </section>
        )
    }
}

export default Content