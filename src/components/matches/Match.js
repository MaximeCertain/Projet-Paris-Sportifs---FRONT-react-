import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Match extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log(this.props);
    }

    render() {
        return (
            <tr>
                <td><Link to={`/posts/${this.props.data._id}`}>{this.props.data.adversaire1}</Link></td>
                <td>{this.props.data.adversaire2}</td>
                <td>{this.props.data.date}</td>
                <td>{this.props.data.result}</td>
                <td>{this.props.data.result}</td>
                <td>
                    <Link className="btn btn-primary" to={`/matches/${this.props.data._id}`} >
                        <i className="fas fa-pencil-alt" />Voir/Modifier</Link>
                </td>
            </tr>

        )
    }
}

export default Match;