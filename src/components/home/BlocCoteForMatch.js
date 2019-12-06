import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import MatchesService from "../../services/matches.service";
import CotesTypesService from "../../services/cotes_types.service";
import UserServices from "../../services/users.service";
import CotesService from "../../services/cotes.service";
import FormBet from "./FormBet";

class BlocCoteForMatch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cotes_types: [],
            type: "",
            cote: "",
            idMatch: null
        }
    }

    async componentDidMount() {
        let response = await CotesTypesService.list();
        if (response.ok) {
            //La réponse est de type 200
            let data = await response.json();
            this.setState({
                cotes_types: data.cotes_types,
                idMatch: this.props.idMatch
            });
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
            type: this.state.type,
            cote: this.state.cote
        };

        let response = await CotesService.create(body, this.state.idMatch);
        if (response.ok) {
            // this.props.history.push(`/matches/${this.state.idMatch}`);
        }
    }


    render() {
        return (
            <div className="col-sm-4 border-right">
                <div className="description-block" style={{fontSize: 11}}>
                    <span className="col-md-12">{this.props.data.type.label}</span>
                    <button type="button" className="btn btn-primary col-md-12" data-toggle="modal"
                            data-target={"#modal-cote-"+this.props.data._id}>
                        <i className="fas fa-money-bill"/> {this.props.data.cote}
                    </button>
                </div>
                <div className="modal fade" id={"modal-cote-"+this.props.data._id}>
                   <FormBet data={this.props.data} idCote={this.props.data._id} idMatch={this.props.idMatch} />
                </div>
            </div>
        )
    }
}

export default BlocCoteForMatch;