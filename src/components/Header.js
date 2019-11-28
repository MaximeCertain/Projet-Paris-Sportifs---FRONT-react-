import React, {Component} from 'react';
import PostService from "../services/posts.service";
import {Link} from "react-router-dom";



class Header extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <a className="navbar-brand" href="#">Carousel</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarCollapse"
                        aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to={"/"}>Accueil</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/ajouter-un-post"}>Ajouter un post</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#" tabIndex="-1"
                               aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                    <form className="form-inline mt-2 mt-md-0">
                        <input className="form-control mr-sm-2" type="text" placeholder="Search"
                               aria-label="Search"/>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        );
    }
}

export default Header;

//this.props.match.params.monparam
