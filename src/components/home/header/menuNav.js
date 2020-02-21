import React, { Component } from 'react';
import style from './menuNav.scss';
import { Input, Button } from 'antd';

class MenuNav extends Component {
    render() {
        return (
            <header className="header-controller wow zoomInDown">
                <div className="relative container-fluid">
                    <div className="row">
                        <div className="col-lg-12 d-flex justify-content-between align-items-center">
                            <a href="javascript:;" className="navbar-brand"> 
                                <img src={require('../../../assets/images/logo.png')} className="logo"> 
                            </a>
                            <div className="search-container">
                                <form>
                                    <Input className="input-ment" size="large" placeholder="Enter your email" />
                                    <Button className="btn-ment" type="primary" size={'large'}>Subscribe</Button>
                                </form>
                            </div>
                            <nav className="navbar navbar-expand-lg navbar-light">
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> 
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse justify-content-end" id="topnave">
                                <ul className="navbar-nav main-nave">
                                    <li className="nav-item"> 

                                    </li>
                                </ul>
                            </div>
                            </nav>
                        </div>	
                    </div> 	
                </div>
            </header>
        )
    }
}

export default MenuNav