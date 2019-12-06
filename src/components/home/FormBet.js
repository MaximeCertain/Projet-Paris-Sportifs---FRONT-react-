import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import MatchesService from "../../services/matches.service";
import CotesTypesService from "../../services/cotes_types.service";
import UserServices from "../../services/users.service";
import CotesService from "../../services/cotes.service";
import BetsService from "../../services/bets.service";
import BetsForUser from "../profile/BetsForUser";
import Header from "../Header";
import ErrorFormMessage from "../form/ErrorFormMessage";

class FormBet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: '',
            type:'',
            message: '',
            errorTitle: ''
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
           type: nextProps.data.type.label
        });

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
            amount: this.state.amount
        };
        let idUser = localStorage.getItem('idUser');
        let response = await BetsService.create(idUser,this.props.idMatch, this.props.data._id, body);
        if (response.ok) {
            let data = await response.json();
            if (data.message === "capital_too_low") {
                this.setState({
                    message: "Votre capital est insuffisant, veuillez déposer de l'argent dans votre profil",
                    errorTitle: "Fonds insuffisants"
                });
            } else {
                window.location.replace("/");
            }
        }
    }


    render() {
        return (
            <div className="modal-dialog">
                <div className="modal-content bg-gradient-light">
                    <div className="modal-header">
                        <h4 className="modal-title">Parier sur ce match - {this.state.type}</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span></button>
                    </div>
                    {this.state.message !== '' &&
                    <ErrorFormMessage title={this.state.errorTitle} message={this.state.message}/>
                    }
                    <form onSubmit={(e) => this.submit(e)}>
                        <div className="modal-body">
                            <div className="form-group">
                                <label>Montant du pari</label>
                                <input type="number" step="0.01" id="amount" className="form-control"
                                       onChange={(e) => this.handleChange(e)} value={this.state.amount}/>
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

export default FormBet;