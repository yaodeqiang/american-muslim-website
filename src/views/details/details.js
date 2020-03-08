import React, { Component } from 'react';
import '../../assets/scss/public.scss';
import style from './details.module.scss';
import MenuNav from '../../components/home/header/menuNav';
import Content from '../../components/details/content';

class Details extends Component {
    render(){
        return (
            <div className={style.listpage}>
                <MenuNav/>
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

export default Details