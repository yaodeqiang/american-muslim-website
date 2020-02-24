import React, { Component } from 'react';
import style from './menuNav.module.scss';
import { Input, Button } from 'antd';
const { Search } = Input;

class MenuNav extends Component {
    render() {
        return (
            <header className={style.headercontroller}>
                <div className={style.headerbox}>
                    <div className={style.logo}>
                        <img src={require('../../../assets/images/logo.png')}/>
                    </div>
                    <Search
                        placeholder="请输入要搜索的内容"
                        enterButton="Search"
                        size="large"
                        onSearch={value => console.log(value)}
                    />
                    <div className="login-module">
                        <Button type="link" className="register" shape="round" ghost size={'large'}>Register</Button>
                        <Button type="primary" className="login" shape="round" size={'large'}>Login</Button>
                    </div>
                </div>
            </header>
        )
    }
}

export default MenuNav