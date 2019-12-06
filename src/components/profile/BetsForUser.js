import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class BetsForUser extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        return (
            <div>
                <div className="card-body">
                    <h4>{this.props.data.length} Paris</h4>
                    <table className="table table-bordered">
                        <thead>
                        <tr>
                            <th>Match</th>
                            <th>Pari</th>
                            <th>Cote</th>
                            <th>Date du pari</th>
                            <th>Mise</th>
                            <th style={{width: '40px'}}>Résultat</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.props.data.map(item => {
                            return <tr>{console.log(item)}
                                <td>
                                    <span className="badge bg-primary">
                                    {item.match.adversaire1} - {item.match.adversaire2} [{item.match.date.substr(0, 10)}]
                                    </span>
                                </td>
                                <td>{item.cote.type.label} </td>
                                <td>{item.cote.cote}</td>
                                <td>{item.date.substr(0, 10)}</td>
                                <td>
                                    {item.amount} €
                                </td>
                                <td>
                                    {item.cote.validation === null ? <span className="badge bg-warning">En cours</span>
                                        : item.cote.validation === true ?
                                            <span className="badge bg-success">{(item.cote.cote) * (item.amount)} €</span> :
                                            <span className="badge bg-danger">0 €</span>}
                                </td>
                            </tr>
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default BetsForUser;