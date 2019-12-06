import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Match extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        return (
            <tr>
                <td>{this.props.data.adversaire1}</td>
                <td>{this.props.data.adversaire2}</td>
                <td>{this.props.data.date.substr(0, 10)}</td>
                <td>{this.props.data.sport.label}</td>
                <td>{this.props.data.result === "1" ?
                    <span className="badge badge-success"> {this.props.data.adversaire1}</span> :
                    this.props.data.result === "2" ?
                        <span className="badge badge-success"> {this.props.data.adversaire2}</span> :
                        this.props.data.result === "X" ?
                            <span className="badge badge-primary">Match nul</span> :
                            <span className="badge badge-warning">En cours</span>
                }</td>
                <td>
                    {this.props.data.cotes.length}/6
                </td>
                <td>
                    <Link className="btn btn-primary" to={`/matches/${this.props.data._id}`}>
                        <i className="fas fa-pencil-alt"/>Voir/Modifier</Link>
                </td>
            </tr>

        )
    }
}

export default Match;