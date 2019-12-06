import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class InfoUser extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="card card-primary card-outline">
                <div className="card-body box-profile">
                    <div className="text-center">
                        <img className="profile-user-img img-fluid img-circle"
                             src="https://image.flaticon.com/icons/png/512/536/536066.png" alt="User profile picture"/>
                    </div>
                    <h3 className="profile-username text-center">{this.props.data.firstName} {this.props.data.lastName}</h3>
                    <p className="text-muted text-center">{this.props.data.email}</p>
                    <ul className="list-group list-group-unbordered mb-3">

                        <li className="list-group-item">
                            <b>Capital</b> <a className="float-right">{this.props.data.capital} <i className="fa fa-euro-sign"/></a>
                        </li>
                    </ul>
                </div>
                {/* /.card-body */}
            </div>

        )
    }
}

export default InfoUser;