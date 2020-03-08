import React, { Component } from 'react';
import '../../assets/scss/public.scss';
import style from './home.module.scss';
import MenuNav from '../../components/home/header/menuNav';
import Header from '../../components/home/header/header';
import Content from '../../components/home/content/content';

class Home extends Component {
    render() {
        return (
            <div className={style.homepage}>
                <MenuNav/>
                <Header/>
                <Content/>

                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <p className="copytext">© 2020. American Muslim Today All Rights Reserved</p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Home