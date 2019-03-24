/*
 * @Author: Samantha
 * @Date: 2019-03-21 14:11:17
 * @Last Modified by: Samantha
 * @Last Modified time: 2019-03-21 16:54:29
 */
import React from 'react';
import NavTop from 'component/nav-top/index.jsx';
import NavSide from 'component/nav-side/index.jsx';
import './theme.css';

class Layout extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id="wrapper">
                <NavTop />
                <NavSide />
                {this.props.children}
            </div>
        );
    }
}

export default Layout;
