import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import MatchesService from "../../services/matches.service";
import CotesTypesService from "../../services/cotes_types.service";
import UserServices from "../../services/users.service";
import CotesService from "../../services/cotes.service";
import ErrorFormMessage from "../form/ErrorFormMessage";

class AddCoteForMatch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cotes_types: [],
            type: "",
            cote: "",
            idMatch: null,
            errorMessage: '',
            errorTitle:'',
            errorCoteTypeMessage:''
        }
    }

    async componentDidMount() {
        let response = await CotesTypesService.list();
        if (response.ok) {
            //La réponse est de type 200
            let data = await response.json();
            this.setState({
                cotes_types: data.cotes_types,
                type: data.cotes_types[0]._id,
                idMatch: this.props.idMatch
            });
        }
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
        if(this.state.cote <= 1){
            this.setState({
                errorTitle: "Erreur d'enregistrement",
                errorMessage: "La cote ne peut être inférieure à 1.01"
            })
        }else{
            let body = {
                type: this.state.type,
                cote: this.state.cote
            };
            let response = await CotesService.create(body, this.state.idMatch);
            if (response.ok) {
                //recupération nouvelle cote avec son type pour l'afficher dans le tableau
                let data = await response.json();
                if(data.message === "cote_type_already_entered_for_match"){
                    this.setState({
                        errorTitle: "Erreur d'enregistrement",
                        errorMessage: "Vous avez déjà renseigné ce type de cote pour ce match"
                    })
                }else{
                    let coteWithDetails = await CotesService.details(data.cote._id);
                    let coteWithDetailsData = await coteWithDetails.json();
                    await this.props.addCoteToCotesArray(coteWithDetailsData.cote);
                }
            }
        }
    }

    render() {
        return (
            <div className="card card-secondary">
                <div className="card-header">
                    <h3 className="card-title">Ajouter une cote</h3>
                    <div className="card-tools">
                        <button type="button" className="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip"
                                title="Collapse">
                            <i className="fas fa-minus"/></button>
                    </div>
                </div>
                <div className="card-body" style={{display: 'block'}}>
                    {this.state.errorMessage !== '' && typeof this.state.errorMessage !== "undefined" &&
                    <ErrorFormMessage title={this.state.errorTitle} message={this.state.errorMessage}/>
                    }
                    <form onSubmit={(e) => this.submit(e)}>
                        <div className="form-group">
                            <label>Cote</label>
                            <input type="number" step="0.01" id="cote" className="form-control"
                                   onChange={(e) => this.handleChange(e)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Type de côte</label>
                            <select className="custom-select" value={this.state.type} id="type"
                                    onChange={(e) => this.handleChange(e)}>
                                {
                                    this.state.cotes_types.map(item => {
                                        return <option value={item._id} selected={item._id === this.state.type} >{item.label}</option>
                                    })
                                }
                            </select>
                        </div>
                        <button className="btn btn-warning" type="submit">Ajouter</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddCoteForMatch;