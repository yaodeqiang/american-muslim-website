import React, { Component } from 'react';
import style from './home.module.scss';
import MenuNav from '../../components/home/header/menuNav';
import Header from '../../components/home/header/header';

class Home extends Component {
    render() {
        return (
            <div className={style.homepage}>
                <MenuNav/>
                <Header/>
            </div>
        )
    }
}

export default Home