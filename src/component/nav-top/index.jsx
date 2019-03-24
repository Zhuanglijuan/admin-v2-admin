/*
 * @Author: Samantha
 * @Date: 2019-03-21 14:51:51
 * @Last Modified by: Samantha
 * @Last Modified time: 2019-03-22 14:02:27
 */
import React from 'react';
import MUtil from 'util/mm.jsx';
import User from 'service/user-service.jsx';
import {withRouter} from "react-router-dom";

import {Link} from 'react-router-dom';

const _mm = new MUtil();
const _user = new User();


class NavTop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: _mm.getStorage('userInfo').username || ''
        }
    }

    // 退出登录
    onLogout() {
        _user.logout().then(res => {
            _mm.removeStorage('userInfo');
            this.props.history.push('/login');
        }, errMsg => {
            _mm.errorTips(errMsg);
        });
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
                            {
                                this.state.username
                                    ? <span>欢迎，{this.state.username}</span>
                                    : <span>欢迎您</span>

                            }
                            <i className="fa fa-caret-down"></i>
                        </a>
                        <ul className="dropdown-menu dropdown-user">
                            <li>
                                <a onClick={() => {
                                    this.onLogout()
                                }}>
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

export default withRouter(NavTop);
