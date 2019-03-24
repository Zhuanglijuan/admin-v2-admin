/*
 * @Author: Samantha
 * @Date: 2019-03-22 14:00:00
 * @Last Modified by: Samantha
 * @Last Modified time: 2019-03-22 15:34:29
 */
import React from 'react';
import MUtil from 'util/mm.jsx';
import User from 'service/user-service.jsx';

const _mm = new MUtil();
const _user = new User();
import './index.scss';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            redirect: _mm.getUrlParam('redirect') || '/'
        }
    }

    componentWillMount() {
        document.title = '登陆 - MALL ADMIN';
    }

    // 当用户名发生改变
    onInputChange(e) {
        let inputValue = e.target.value,
            inputName = e.target.name;
        this.setState({
            [inputName]: inputValue
        });
    }

    onInputKeyUp(e) {
        if (e.keyCode === 13) {
            this.onSubmit();
        }
    }

    // 当用户提交表单那
    onSubmit() {
        let loginInfo = {
                username: this.state.username,
                password: this.state.password
            },
            checkResult = _user.checkLoginInfo(loginInfo);
        // 验证通过
        if (checkResult.status) {
            _user.login(loginInfo).then((res) => {
                _mm.setStorage('userInfo', res);
                // 跳回原来的页面
                this.props.history.push(this.state.redirect);
            }, (errMsg) => {
                _mm.errorTips(errMsg);
            })
        }
        // 验证不通过
        else {
            _mm.errorTips(checkResult.msg);
        }
    }

    render() {
        return (
            <div className="col-md-4 col-md-offset-4">
                <div className="panel panel-default login-panel">
                    <div className="panel-heading">欢迎登陆 - MALL管理系统</div>
                    <div className="panel-body">
                        <div>
                            <div className="form-group">
                                <input type="text"
                                       name="username"
                                       className="form-control"
                                       placeholder="请输入用户名"
                                       onKeyUp={e => this.onInputKeyUp(e)}
                                       onChange={e => this.onInputChange(e)}/>
                            </div>
                            <div className="form-group">
                                <input type="password"
                                       name="password"
                                       className="form-control"
                                       placeholder="请输入密码"
                                       onKeyUp={e => this.onInputKeyUp(e)}
                                       onChange={e => this.onInputChange(e)}/>
                            </div>
                            <button className="btn btn-lg btn-primary btn-block"
                                    onClick={e => this.onSubmit(e)}>登陆
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
