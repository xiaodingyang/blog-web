import React, { Component } from 'react';
import { Style } from './Style'
import 'animate.css'
import { NavLink } from 'react-router-dom';
import { isSuper } from 'utils/utils.js';
import { Menu, Button, Icon } from 'antd';
import MenuMap from '@/router/MenuMap';
import { getList } from "@/servers/imgs";
import { Scrollbars } from 'react-custom-scrollbars';
const { SubMenu } = Menu;
export class Menue extends Component {
    state = {
        toggle: false,
        mask: false,
        navImg: [],
        touxiang: '',
    }
    show = () => {
        this.setState({ toggle: true, mask: true })
    }
    close = () => {
        this.refs.nav.style.left = '-300px'
        this.refs.nav.style.opacity = '0'
        this.setState({ mask: false })
        setTimeout(() => this.setState({ toggle: false }), 1000)
    }
    menu(item) {
        if (item.children) {
            return (
                <SubMenu key={item.path} title={
                    <span><Icon type={item.icon} />{item.name}</span>
                } >
                    {
                        item.children.map(item => {
                            return <Menu.Item key={item.path}><NavLink exact to={item.path}><Icon type={item.icon} /> {item.name}</NavLink> </Menu.Item>
                        })
                    }
                </SubMenu>
            )
        } else {
            return <Menu.Item key={item.path}><NavLink exact to={item.path} ><Icon type={item.icon} /> {item.name}</NavLink> </Menu.Item>
        }
    }
    componentDidMount() {
        getList().then(res => {
            this.setState({
                navImg: res[0].navImg,
                touxiang: res[0].otherImg.touxiang,
            })
        })
    }
    render() {
        const { navImg, touxiang } = this.state
        var bg = navImg && Math.floor(Math.random() * navImg.length);
        const defaultSelectedKeys = (window.location.pathname === '/' || window.location.pathname === '/index') ? ['/index'] : [window.location.pathname]
        return (
            <Style className="nav">

                <div className="nav-toggle" onClick={this.show}><Button type="default" icon="menu-unfold" ghost>MENU</Button></div>
                {this.state.mask && <div onClick={this.close} className="mask"></div>}
                {
                    this.state.toggle &&

                    <div ref="nav" className="nav-container animated rollIn" style={{ 'background': `url(${navImg[bg]}) no-repeat center/cover` }}>
                        <Scrollbars>
                            <div className="close" onClick={this.close}>
                                <Button type="link" icon="close" ghost></Button>
                            </div>
                            <div className="header">
                                <div className="logo">
                                    <div className="content">
                                        <div className="img" style={{ 'background': `url(${touxiang}) no-repeat center/cover` }}></div>
                                        <p>SILENCE</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <Menu
                                    defaultSelectedKeys={defaultSelectedKeys}
                                    mode={this.props.mode}
                                    theme={this.props.theme}
                                >
                                    {
                                        MenuMap.map(item => {
                                            if (item.root === 1) {
                                                if (isSuper()) {
                                                    return this.menu(item)
                                                } else {
                                                    return ''
                                                }
                                            } else {
                                                return this.menu(item)
                                            }

                                        })
                                    }
                                </Menu>
                            </div>
                        </Scrollbars>

                    </div>
                }

            </Style>
        );
    }
}

export default Menue;