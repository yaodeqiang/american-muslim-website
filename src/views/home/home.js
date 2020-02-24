import React, { Component } from 'react';
import style from './home.module.scss';
import MenuNav from '../../components/home/header/menuNav';

class Home extends Component {
    render() {
        return (
            <div className={style.homepage}>
                <MenuNav/>
            </div>
        )
    }
}

export default Home