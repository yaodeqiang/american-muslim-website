import React, { Component } from 'react';
import style from './home.scss';
import HeaderNav from '@components/home/header/menuNav';

class Home extends Component {
    render() {
        return (
            <div className={style.home-page}>
                <HeaderNav/>
            </div>
        )
    }
}

export default Home