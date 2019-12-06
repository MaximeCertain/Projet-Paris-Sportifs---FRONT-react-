import React, {Component} from 'react';
import {Link} from "react-router-dom";
import UserServices from "../services/users.service";
import FormFilter from "./filter/FormFilter";


class Header extends Component {
    constructor(props) {
        super(props);
    }

    async submit(e) {
        e.preventDefault();
        localStorage.clear();
        window.location.replace('/login');
    }

    render() {
        return (
            <nav className="main-header navbar navbar-expand navbar-white navbar-light"><i className="fa"/>
                {/* Left navbar links */}
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" data-widget="pushmenu" href="#"><i className="ion ion-bars"/></a>
                    </li>
                    {localStorage.getItem('role') === 'ROLE_USER' ?
                    <div>
                        <li className="nav-item d-none d-sm-inline-block">
                            <Link to={"/"} className="nav-link">Accueil</Link>
                        </li>
                        <li className="nav-item d-none d-sm-inline-block">
                            <Link to={"/profile"} className="nav-link">Profil</Link>
                        </li>
                    </div>
                        :
                        <FormFilter/>
                    }
                </ul>
                {/* SEARCH FORM */}
                {/* Right navbar links */}
                <ul className="navbar-nav ml-auto">

                    <li className="nav-item">
                        <button className="btn btn-app" onClick={(e) => this.submit(e)}>
                            <i className="fas fa-save"/> Se déconnecter
                        </button>
                    </li>
                </ul>
            </nav>);
    }
}

export default Header;

//this.props.matches.params.monparam
