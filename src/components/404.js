import React, {Component} from 'react';
import {Link} from "react-router-dom";

class PageNotFound extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="content-wrapper" style={{minHeight: '1592.4px'}}>
                {/* Content Header (Page header) */}
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>404 Error Page</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active">404 Error Page</li>
                                </ol>
                            </div>
                        </div>
                    </div>{/* /.container-fluid */}
                </section>
                {/* Main content */}
                <section className="content">
                    <div className="error-page">
                        <h2 className="headline text-warning"> 404</h2>
                        <div className="error-content">
                            <h3><i className="fas fa-exclamation-triangle text-warning" /> Oops! Page not found.</h3>
                            <p>
                                We could not find the page you were looking for.
                                Meanwhile, you may return to login page or try using the search form.
                            </p>
                            <form className="search-form">
                                <div className="input-group">
                                    <div className="input-group-append">

                                    </div>
                                </div>
                                {/* /.input-group */}
                            </form>
                        </div>
                        {/* /.error-content */}
                    </div>
                    {/* /.error-page */}
                </section>
                {/* /.content */}
            </div>
        );
    }
}

export default PageNotFound;

//this.props.matches.params.monparam
