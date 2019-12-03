import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class User extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <tr>
                <td>{this.props.data.lastName} {this.props.data.firstName}</td>
                <td>{this.props.data.capital}</td>
                <td>{this.props.data.bets.length}</td>
                <td>
                    <Link className="btn btn-primary" to={`/update-user/${this.props.data._id}`} >
                        <i className="fas fa-pencil-alt" />Voir/Modifier</Link>
                </td>
            </tr>

        )
    }
}

export default User;