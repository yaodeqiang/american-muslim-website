import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Swiper from 'swiper/js/swiper.min.js';
import 'swiper/css/swiper.min.css';
// import $ from 'jquery';
import './style.scss';

class SwiperCom extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        new Swiper('.vertical-swiper-container', {
            direction : 'vertical',
            autoplay: {
                delay: 4000
            },
            loop: false,
            speed: 1000,
            // autoHeight: true,            //高度随内容变化
            // centeredSlides: false,       //为true设置模块居中
            // spaceBetween: 0,             //slide之间的距离
            //设置4个为一组
            // slidesPerView: 4,         
            // slidesPerGroup: 4,
        });
    }

    render(){
        return (
            <div className="vertical-swiper-container">
                <div className="swiper-wrapper">
                    {this.props.data.map((item, index) => {
                        return (
                            <div className="swiper-slide" key={index}>
                                <Router>
                                    <Link to="/details">
                                        <div className="orb">
                                            <div className="repead-row">
                                                <div className="col-md-5">
                                                    <div className="img-object">
                                                        <img src={item.img} alt=""/>
                                                    </div>
                                                </div>
                                                <div className="col-md-7">
                                                    <div className="content-object">
                                                        <h5>{item.name}</h5>
                                                        <a className="link-object" href="javascript:;">{item.content}</a>
                                                        <p>Mobile: {item.mobile}</p>
                                                        <a className="mailoto-object" href="javascript:;">{item.email}</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </Router>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default SwiperCom