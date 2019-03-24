/**
 * Created by Samantha on 2019/3/24 下午3:35
 */
import React from 'react';
import {Link} from 'react-router-dom';
import PageTitle from 'component/page-title/index.jsx';

class Error extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="page-wrapper">
                <PageTitle title="出错啦!"/>
                <div className="row">
                    <div className="col-md-12">
                        找不到该路径，
                        <Link to="/">点我返回首页</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Error;

