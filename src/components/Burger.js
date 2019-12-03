import React, {Component} from 'react';
import PostService from "../services/posts.service";
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
                    <img src="" alt="AdminLTE Logo" className="brand-image img-circle elevation-3"
                         style={{opacity: '.8'}}/>
                    <span className="brand-text font-weight-light">AdminLTE 3</span>
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
                                        <img src="" className="img-circle elevation-2" alt="User Image"/>
                                    </div>
                                    <div className="info">
                                        <a href="#" className="d-block">Alexander Pierce</a>
                                    </div>
                                </div>
                                {/* Sidebar Menu */}
                                <nav className="mt-2">
                                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview"
                                        role="menu" data-accordion="false">
                                        {/* Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library */}
                                        <li className="nav-item">
                                            <Link to={`/matches`} className="nav-link">
                                                <i className="nav-icon fas fa-th"/>
                                                <p>
                                                    Matchs
                                                    <span className="right badge badge-danger">New</span>
                                                </p>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to={`/users`} className="nav-link">
                                                <i className="nav-icon fas fa-th"/>
                                                <p>
                                                    Utilisateurs
                                                </p>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to={`/sports`} className="nav-link">
                                                <i className="nav-icon fas fa-th"/>
                                                <p>
                                                    Sports
                                                </p>
                                            </Link>
                                        </li>
                                        <li className="nav-header">EXAMPLES</li>
                                        <li className="nav-item">
                                            <a href="" className="nav-link">
                                                <i className="nav-icon fas fa-calendar-alt"/>
                                                <p>
                                                    Calendar
                                                    <span className="badge badge-info right">2</span>
                                                </p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="" className="nav-link">
                                                <i className="nav-icon far fa-image"/>
                                                <p>
                                                    Gallery
                                                </p>
                                            </a>
                                        </li>
                                        <li className="nav-header">MISCELLANEOUS</li>
                                        <li className="nav-item">
                                            <a href="https://adminlte.io/docs/3.0" className="nav-link">
                                                <i className="nav-icon fas fa-file"/>
                                                <p>Documentation</p>
                                            </a>
                                        </li>
                                        <li className="nav-header">MULTI LEVEL EXAMPLE</li>
                                        <li className="nav-item">
                                            <a href="#" className="nav-link">
                                                <i className="fas fa-circle nav-icon"/>
                                                <p>Level 1</p>
                                            </a>
                                        </li>
                                        <li className="nav-item has-treeview">
                                            <a href="#" className="nav-link">
                                                <i className="nav-icon fas fa-circle"/>
                                                <p>
                                                    Level 1
                                                    <i className="right fas fa-angle-left"/>
                                                </p>
                                            </a>
                                            <ul className="nav nav-treeview">
                                                <li className="nav-item">
                                                    <a href="#" className="nav-link">
                                                        <i className="far fa-circle nav-icon"/>
                                                        <p>Level 2</p>
                                                    </a>
                                                </li>
                                                <li className="nav-item has-treeview">
                                                    <a href="#" className="nav-link">
                                                        <i className="far fa-circle nav-icon"/>
                                                        <p>
                                                            Level 2
                                                            <i className="right fas fa-angle-left"/>
                                                        </p>
                                                    </a>
                                                    <ul className="nav nav-treeview">
                                                        <li className="nav-item">
                                                            <a href="#" className="nav-link">
                                                                <i className="far fa-dot-circle nav-icon"/>
                                                                <p>Level 3</p>
                                                            </a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a href="#" className="nav-link">
                                                                <i className="far fa-dot-circle nav-icon"/>
                                                                <p>Level 3</p>
                                                            </a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a href="#" className="nav-link">
                                                                <i className="far fa-dot-circle nav-icon"/>
                                                                <p>Level 3</p>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="#" className="nav-link">
                                                        <i className="far fa-circle nav-icon"/>
                                                        <p>Level 2</p>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#" className="nav-link">
                                                <i className="fas fa-circle nav-icon"/>
                                                <p>Level 1</p>
                                            </a>
                                        </li>
                                        <li className="nav-header">LABELS</li>
                                        <li className="nav-item">
                                            <a href="#" className="nav-link">
                                                <i className="nav-icon far fa-circle text-danger"/>
                                                <p className="text">Important</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#" className="nav-link">
                                                <i className="nav-icon far fa-circle text-warning"/>
                                                <p>Warning</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#" className="nav-link">
                                                <i className="nav-icon far fa-circle text-info"/>
                                                <p>Informational</p>
                                            </a>
                                        </li>
                                    </ul>
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
