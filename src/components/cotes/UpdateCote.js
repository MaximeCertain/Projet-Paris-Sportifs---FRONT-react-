import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import MatchesService from "../../services/matches.service";
import CotesTypesService from "../../services/cotes_types.service";
import UserServices from "../../services/users.service";
import CotesService from "../../services/cotes.service";
import ErrorFormMessage from "../form/ErrorFormMessage";

class UpdateCote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cote: '',
            idMatch: null,
            errorMessage: '',
            errorTitle: ''
        }
    }

    componentDidMount() {
        this.setState({
            cote: this.props.data.cote
        })
    }


    handleChange(e) {
        this.setState({
            [e.target.id]: e.target.value
        });
    }



    /**
     * enregistre la cote, cette dernière doit etre supérieure à 1
     * @param e
     * @returns {Promise<void>}
     */
    async submit(e) {

        this.setState({
            errorTitle: "",
            errorMessage: ""
        });
        //annuler l'evenement onclick
        e.preventDefault();

        if (this.state.cote <= 1) {
            this.setState({
                errorTitle: "Erreur d'enregistrement",
                errorMessage: "La cote ne peut être inférieure à 1.01"
            })
        } else {
            let body = {
                cote: this.state.cote
            };
            let response = await CotesService.update(this.props.data._id, body);
            if (response.ok) {
                await this.props.updateLineAfterUpdate(this.props.index, this.state.cote);
            }
        }

    }

    render() {
        return (
            <div className="modal-dialog">
                <div className="modal-content bg-gradient-light">
                    <div className="modal-header">
                            <h4 className="modal-title">Modifier la cote "{this.props.data.type.label}"</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="card-body" style={{display: 'block'}}>
                        {this.state.errorMessage !== '' && typeof this.state.errorMessage !== "undefined" &&
                        <ErrorFormMessage title={this.state.errorTitle} message={this.state.errorMessage}/>
                        }
                        <form onSubmit={(e) => this.submit(e)}>
                            <div className="form-group">
                                <label>Cote</label>
                                <input type="number" step="0.01" id="cote" className="form-control"
                                   value={this.state.cote}    onChange={(e) => this.handleChange(e)}
                                />
                            </div>
                            <button className="btn btn-warning" type="submit">Modifier</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default UpdateCote;