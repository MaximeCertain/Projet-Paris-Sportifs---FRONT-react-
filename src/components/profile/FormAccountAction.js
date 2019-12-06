import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import MatchesService from "../../services/matches.service";
import CotesTypesService from "../../services/cotes_types.service";
import UserServices from "../../services/users.service";
import CotesService from "../../services/cotes.service";
import BetsService from "../../services/bets.service";
import AccountActionsService from "../../services/account_actions.service";
import ErrorFormMessage from "../form/ErrorFormMessage";

class FormAccountAction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: '',
            type: '',
            message:'',
            errorTitle:''
        }
    }

    handleChange(e) {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    async submit(e) {
        //annuler l'evenement onclick
        e.preventDefault();
        this.setState({success: false});
        let body = {
            amount: this.state.amount,
            type: this.props.type
        };
        let idUser = localStorage.getItem('idUser');
        let response = await AccountActionsService.create(body, idUser);
        if (response.ok) {
            let data = await response.json();
            if (data.message === "capital_too_low") {
                this.setState({
                    message: "Vous ne pouvez retirer cette somme",
                    errorTitle: "Fonds insuffisants"
                });
            }else{
                window.location.replace("/profile")
            }
        }
    }


    render() {
        return (
            <div className="modal-dialog">
                <div className="modal-content bg-gradient-light">
                    <div className="modal-header">
                        {this.props.type === "DEPOSIT" ?
                            <h4 className="modal-title">Faire un dépôt d'argent</h4>
                            :
                            <h4 className="modal-title">Faire un retrait d'argent</h4>
                        }
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <form onSubmit={(e) => this.submit(e)}>
                        {this.state.message !== '' &&
                        <ErrorFormMessage title={this.state.errorTitle} message={this.state.message}/>
                        }
                        <div className="modal-body">
                            <div className="form-group">
                                <label>Montant à {this.props.type === "DEPOSIT" ? <span>déposer depuis</span> :
                                    <span>retirer sur</span>} votre compte bancaire</label>
                                <input type="number" step="0.01" id="amount" className="form-control"
                                       onChange={(e) => this.handleChange(e)}/>
                            </div>
                        </div>
                        <div className="modal-footer justify-content-between">
                            <button type="button" className="btn btn-outline-dark" data-dismiss="modal">Close
                            </button>
                            <button type="submit" className="btn btn-outline-dark">Valider</button>
                        </div>
                    </form>

                </div>
                {/* /.modal-content */}
            </div>
        )
    }
}

export default FormAccountAction;