/*
 * @Author: samantha 
 * @Date: 2019-03-21 14:51:51 
 * @Last Modified by: Samantha
 * @Last Modified time: 2019-03-21 15:36:10
 */
import React from 'react';
import { Link } from 'react-router-dom';

class NavTop extends React.Component {
    constructor(props) {
        super(props);
    }
    // 退出登录
    onLogout() {

    }
    render() {
        return (
            <div className="navbar navbar-default top-navbar">
                <div className="navbar-header">
                    <Link className="navbar-brand" to="index.html"><b>MALL</b></Link>
                </div>

                <ul className="nav navbar-top-links navbar-right">
                    <li className="dropdown">
                        <a className="dropdown-toggle" href="javascript:;">
                            <i className="fa fa-user fa-fw"></i> 
                            <span>欢迎，adminXXX</span>
                            <i className="fa fa-caret-down"></i>
                        </a>
                        <ul className="dropdown-menu dropdown-user">
                            <li>
                                <a onClick={() => {this.onLogout()}}>
                                    <i className="fa fa-sign-out fa-fw"></i> 
                                    <span>退出登录</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        );
    }
}

export default NavTop;