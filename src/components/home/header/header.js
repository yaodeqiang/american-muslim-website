import React, { Component } from 'react';
import Swiper from 'swiper/js/swiper.js';
import 'swiper/css/swiper.min.css';
import './header.scss';

class Header extends Component {
    componentDidMount(){
        let mySwiper = new Swiper('.swiper-container');
    }

    render() {
        return (
            <div className="header-box">
                <section className="banner">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-3 wow slideInLeft">
                                <div className="swiper-container">
                                    <div className="swiper-wrapper owl-carousel" id="bannerSliderLeft">
                                        <div class="swiper-slide item">
                                            <img src={require('../../../assets/images/slider-left-img.png')} className="w-100"/>
                                        </div>
                                        <div class="swiper-slide item">
                                            <img src={require('../../../assets/images/slider-left-img.png')} className="w-100"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-9 wow slideInRight">
                                <img src={require('../../../assets/images/slider-video.png')} className="w-100"/>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Header