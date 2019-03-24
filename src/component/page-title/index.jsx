/*
 * @Author: Samantha 
 * @Date: 2019-03-21 16:53:36 
 * @Last Modified by: Samantha
 * @Last Modified time: 2019-03-22 14:02:29
 */
import React from 'react';

class PageTitle extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount(){
        document.title = this.props.title + ' - MALL';
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <h1 className="page-header">{this.props.title}</h1>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default PageTitle;