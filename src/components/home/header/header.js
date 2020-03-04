import React, { Component } from 'react';
import Swiper from 'swiper/js/swiper.js';
import 'swiper/css/swiper.min.css';
import $ from 'jquery';
import { Player, ControlBar } from 'video-react';
import "video-react/dist/video-react.css";
import './header.scss';

class Header extends Component {
    constructor (props) {
        super(props)
        
        this.state = {
          isPlay: true
        }
    
        this.videoPlayer = React.createRef();
        this.play = this.play.bind(this);
    }

    componentDidMount(){
        new Swiper('.swiper-container', {
            loop: true,
            autoplay: true
        });

        $("#videoPlayer").find(".video-react-big-play-button").remove();
    }

    play(){
        $("#videoPlayer").find(".video-react-control-bar").remove();
      }
    
      pause(){
        const videoPlayer = this.player.getState();
        if(videoPlayer.player.ended){
          this.player.load();
        }
      }
    
      goPlay(){
        this.player.play();
        this.setState({
          isPlay: true
        })
      }
    
      goPause(){
        this.player.pause();
        this.setState({
          isPlay: false
        })
      }

    render() {
        return (
            <div className="header-box">
                <section className="banner">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-3 wow slideInLeft">
                                <div className="swiper-container" style={{height:'100%'}}>
                                    <div className="swiper-wrapper owl-carousel" id="bannerSliderLeft">
                                        <div className="swiper-slide item">
                                            <img src={require('../../../assets/images/slider-left-img.png')} alt="" className="w-100"/>
                                        </div>
                                        <div className="swiper-slide item">
                                            <img src={require('../../../assets/images/slider-left-img.png')} alt="" className="w-100"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-9 wow slideInRight" style={{paddingLeft:'0px'}}>
                                {/*背景视频*/}
                                <Player
                                    className="video-module"
                                    ref={player => { this.player = player }}
                                    autoPlay
                                    muted={true}
                                    fluid={false}
                                    height={'100%'}
                                    onPlay={(e) => this.play(e)}
                                    onPause={(e) => this.pause(e)}
                                >
                                    <source src="http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4" />
                                    <source src="http://mirrorblender.top-ix.org/movies/sintel-1024-surround.mp4" />
                                    <ControlBar autoHide={true}></ControlBar>
                                </Player>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Header