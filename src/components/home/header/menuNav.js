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
                        <img src={require('../../../assets/images/logo.png')} alt=""/>
                    </div>
                    <Search
                        placeholder="请输入要搜索的内容"
                        onSearch={value => console.log(value)}
                        style={{ width: 350 }}
                    />
                    <div className={style.loginmodule}>
                        <Button type="link" shape="round" ghost size={'large'} style={{color:'#1890ff'}}>Categories</Button>
                        <Button type="link" shape="round" ghost size={'large'} style={{color:'#1890ff'}}>Blog</Button>
                        <Button type="link" shape="round" ghost size={'large'} style={{color:'#1890ff'}}>LOGIN</Button>
                        <Button type="primary" shape="round" size={'large'}>REGISTER</Button>
                    </div>
                </div>
            </header>
        )
    }
}

export default MenuNav