import React, { Component } from 'react';
import './style.scss';

class Content extends Component {
    render(){
        return (
            <section className="clasifd-section inner-all" style={{marginTop: '0px'}}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="row wow slideInUp">
                                <div className="col-lg-12 pl-0">
                                    <div className="doctors-details">
                                        <img src={require('../../assets/images/doctor-details.jpg')} alt="" className="pull-left" />
                                        <h1>Ayman Elazm</h1>
                                        <h3>Pediatricians</h3>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                                    </div>	
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 pl-0 wow slideInUp">
                                    <div className="adress-details">
                                        <h3>Our Details</h3>
                                        <table>
                                            <tr>
                                                <th>Address:</th>
                                                <td>Lorem Ipsu m is simply dummy text of the printing </td>
                                            </tr>
                                            <tr>
                                                <th>Phone:</th>
                                                <td>5481287554 - 8521287257</td>
                                            </tr>
                                            <tr>
                                                <th>Fax:</th>
                                                <td>5481287554 - 8521287257</td>
                                            </tr>
                                            <tr>
                                                <th>Email:</th>
                                                <td>info@american-muslim.com</td>
                                            </tr>
                                            <tr>
                                                <th>Connect:</th>
                                                <td>
                                                    <ul className="d-flex">
                                                        <li><a href="#"><img src="images/fb.png" alt="" /></a></li>
                                                        <li><a href="#"><img src="images/tw.png" alt="" /></a></li>
                                                        <li><a href="#"><img src="images/ins.png" alt="" /></a></li>
                                                        <li><a href="#"><img src="images/in.png" alt="" /></a></li>
                                                    </ul>
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                                <div className="col-md-6 wow slideInUp">
                                    <div className="adress-details details2">
                                        <h3>Working Hours</h3>
                                        <table>
                                            <tr>
                                                <th>Monday:</th>
                                                <td>09:00 AM</td>
                                                <td>06:30PM</td>
                                            </tr>
                                            <tr>
                                                <th>Tuesday:</th>
                                                <td>09:00 AM</td>
                                                <td>06:30PM</td>
                                            </tr>
                                            <tr>
                                                <th>Wednesday:</th>
                                                <td>09:00 AM</td>
                                                <td>06:30PM</td>
                                            </tr>
                                            <tr>
                                                <th>Thursday:</th>
                                                <td>09:00 AM</td>
                                                <td>06:30PM</td>
                                            </tr>
                                            <tr>
                                                <th>Friday:</th>
                                                <td>09:00 AM</td>
                                                <td>06:30PM</td>
                                            </tr>
                                            <tr>
                                                <th>Saturday:</th>
                                                <td colspan="2">Fixed Off</td>
                                            </tr>
                                        </table>
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