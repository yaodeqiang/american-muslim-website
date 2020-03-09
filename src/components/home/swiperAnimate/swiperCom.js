import React, { Component } from 'react';
import Swiper from 'swiper/js/swiper.min.js';
import 'swiper/css/swiper.min.css';
// import $ from 'jquery';
import './style.scss';

class SwiperCom extends Component {
    componentDidMount() {
        new Swiper('.vertical-swiper-container', {
            direction : 'vertical',
            autoplay: {
                delay: 4000,
            },
            // loop: false,
            // autoHeight: true,            //高度随内容变化
            // centeredSlides: false,       //为true设置模块居中
            // spaceBetween: 0,             //slide之间的距离
            //设置4个为一组
            slidesPerView: 4,         
            slidesPerGroup: 4,
        });
      }

    render(){
        return (
            <div className="vertical-swiper-container">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <div className="orb">
                            <div className="repead-row">
                                <div className="col-md-5">
                                    <div className="img-object">
                                        <img src={require('../../../assets/images/doctor2.jpg')} alt=""/>
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
                    </div>
                    <div className="swiper-slide">
                        <div className="orb">
                            <div className="repead-row">
                                <div className="col-md-5">
                                    <div className="img-object">
                                        <img src={require('../../../assets/images/doctor2.jpg')} alt=""/>
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
                    </div>
                    <div className="swiper-slide">
                        <div className="orb">
                            <div className="repead-row">
                                <div className="col-md-5">
                                    <div className="img-object">
                                        <img src={require('../../../assets/images/doctor2.jpg')} alt=""/>
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
                    </div>
                    <div className="swiper-slide">
                        <div className="orb">
                            <div className="repead-row">
                                <div className="col-md-5">
                                    <div className="img-object">
                                        <img src={require('../../../assets/images/doctor2.jpg')} alt=""/>
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
                    </div>
                    <div className="swiper-slide">
                        <div className="orb">
                            <div className="repead-row">
                                <div className="col-md-5">
                                    <div className="img-object">
                                        <img src={require('../../../assets/images/doctor2.jpg')} alt=""/>
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
                    </div>
                    <div className="swiper-slide">
                        <div className="orb">
                            <div className="repead-row">
                                <div className="col-md-5">
                                    <div className="img-object">
                                        <img src={require('../../../assets/images/doctor2.jpg')} alt=""/>
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
                    </div>
                    <div className="swiper-slide">
                        <div className="orb">
                            <div className="repead-row">
                                <div className="col-md-5">
                                    <div className="img-object">
                                        <img src={require('../../../assets/images/doctor2.jpg')} alt=""/>
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
                    </div>
                    <div className="swiper-slide">
                        <div className="orb">
                            <div className="repead-row">
                                <div className="col-md-5">
                                    <div className="img-object">
                                        <img src={require('../../../assets/images/doctor2.jpg')} alt=""/>
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
                    </div>
                    <div className="swiper-slide">
                        <div className="orb">
                            <div className="repead-row">
                                <div className="col-md-5">
                                    <div className="img-object">
                                        <img src={require('../../../assets/images/doctor2.jpg')} alt=""/>
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
                    </div>
                </div>
            </div>
        )
    }
}

export default SwiperCom