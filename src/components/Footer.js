import React, {Component} from 'react';
import PostService from "../services/posts.service";
import {Link} from "react-router-dom";



class Footer extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <footer className="container">
                <p className="float-right"><a href="#">Back to top</a></p>
                <p>© 2017-2019 Company, Inc. · <a href="#">Privacy</a> · <a href="#">Terms</a></p>
            </footer>
        );
    }
}

export default Footer;

//this.props.match.params.monparam
