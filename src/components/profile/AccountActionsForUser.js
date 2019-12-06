import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import FormAccountAction from "./FormAccountAction";

class AccountActionsForUser extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log(this.props.data)
    }

    render() {
        return (
            <div>
                <div className="card-body">
                    <button data-toggle="modal"
                            data-target="#modal-warning" className="btn btn-danger" style={{marginRight: 12}}>
                     <i className="fa fa-less"/>   <b>Dépôt</b></button>
                    <button data-toggle="modal"
                            data-target="#modal-withdrawal" className="btn btn-success" style={{marginRight: 12}}>
                        <i className="fa fa-plus-square"/>    <b>Retrait</b></button>
                    <div className="modal fade" id="modal-warning">
                        <FormAccountAction type={"DEPOSIT"}/>
                    </div>
                    <div className="modal fade" id="modal-withdrawal">
                        <FormAccountAction type={"WITHDRAWAL"}/>
                    </div>
                    <table className="table table-bordered">
                        <thead>
                        <tr>
                            <th>Type</th>
                            <th>Montant</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.props.data.map(item => {
                            return <tr>
                                <td>{item.type === "WITHDRAWAL" ?
                                    <span className="badge bg-success">Retrait</span>
                                    : <span className="badge bg-danger">Dépôt</span>
                                }
                                </td>
                                <td>
                                    {item.amount}
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

export default AccountActionsForUser;