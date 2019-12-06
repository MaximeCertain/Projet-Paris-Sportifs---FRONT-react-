import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Burger extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                {/* Brand Logo */}
                <a href="" className="brand-link">
                    <img src="https://image.flaticon.com/icons/svg/1809/1809121.svg" alt="AdminLTE Logo" className="brand-image img-circle elevation-3"
                         style={{opacity: '.8'}}/>
                    <span className="brand-text font-weight-light">Winamaximus</span>
                </a>
                {/* Sidebar */}
                <div
                    className="sidebar os-host os-theme-light os-host-overflow os-host-overflow-y os-host-resize-disabled os-host-scrollbar-horizontal-hidden os-host-transition">
                    <div className="os-resize-observer-host">
                        <div className="os-resize-observer observed" style={{left: '0px', right: 'auto'}}/>
                    </div>
                    <div className="os-size-auto-observer" style={{height: 'calc(100% + 1px)', float: 'left'}}>
                        <div className="os-resize-observer observed"/>
                    </div>
                    <div className="os-content-glue" style={{margin: '0px -8px', width: '249px', height: '208px'}}/>
                    <div className="os-padding">
                        <div className="os-viewport os-viewport-native-scrollbars-invisible"
                             style={{overflowY: 'scroll'}}>
                            <div className="os-content" style={{padding: '0px 8px', height: '100%', width: '100%'}}>
                                {/* Sidebar user panel (optional) */}
                                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                                    <div className="image">
                                        <img src="https://image.flaticon.com/icons/png/512/536/536066.png" className="img-circle elevation-2" alt="User Image"/>
                                    </div>
                                    <div className="info">
                                        <Link to={"/profile"} href="#" className="d-block">{localStorage.getItem('email')}</Link>
                                    </div>
                                </div>
                                {/* Menu SUperAdmin */}
                                <nav className="mt-2">
                                    {localStorage.getItem('role') === "ROLE_SUPER_ADMIN" ?
                                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview"
                                            role="menu" data-accordion="false">
                                            {/* Menu SUper Admin */}
                                            <li className="nav-item">
                                                <Link to={`/matches`} className="nav-link">
                                                    <i className="nav-icon fas fa-bowling-ball"/>
                                                    <p>
                                                        Matchs
                                                    </p>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to={`/users`} className="nav-link">
                                                    <i className="nav-icon fas fa-user-circle"/>
                                                    <p>
                                                        Utilisateurs
                                                    </p>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to={`/sports`} className="nav-link">
                                                    <i className="nav-icon fas fa-football-ball"/>
                                                    <p>
                                                        Sports
                                                    </p>
                                                </Link>
                                            </li>
                                        </ul>
                                        :
                                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview"
                                                                                      role="menu" data-accordion="false">
                                        {/* Menu Utilisateur */}
                                        <li className="nav-item">
                                                <Link to={`/`} className="nav-link">
                                                    <i className="nav-icon fas fa-home"/>
                                                    <p>
                                                        Accueil
                                                        <span className="right badge bg-danger">Pariez maintenant</span>
                                                    </p>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to={`/profile`} className="nav-link">
                                                    <i className="nav-icon fas fa-user-edit"/>
                                                    <p>
                                                        Mon profil
                                                    </p>
                                                </Link>
                                            </li>
                                        </ul>

                                    }
                                </nav>
                                {/* /.sidebar-menu */}
                            </div>
                        </div>
                    </div>
                    <div
                        className="os-scrollbar os-scrollbar-horizontal os-scrollbar-unusable os-scrollbar-auto-hidden">
                        <div className="os-scrollbar-track">
                            <div className="os-scrollbar-handle" style={{width: '100%', transform: 'translate(0px)'}}/>
                        </div>
                    </div>
                    <div className="os-scrollbar os-scrollbar-vertical os-scrollbar-auto-hidden">
                        <div className="os-scrollbar-track">
                            <div className="os-scrollbar-handle"
                                 style={{height: '21.0944%', transform: 'translate(0px)'}}/>
                        </div>
                    </div>
                    <div className="os-scrollbar-corner"/>
                </div>
                {/* /.sidebar */}
            </aside>
        );
    }
}

export default Burger;

//this.props.matches.params.monparam
