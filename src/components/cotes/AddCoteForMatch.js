import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import MatchesService from "../../services/matches.service";
import CotesTypesService from "../../services/cotes_types.service";
import UserServices from "../../services/users.service";
import CotesService from "../../services/cotes.service";

class AddCoteForMatch extends Component {
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
                    <form onSubmit={(e) => this.submit(e)}>
                        <div className="form-group">
                            <label>Cote</label>
                            <input type="number" id="cote" className="form-control"
                                   onChange={(e) => this.handleChange(e)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Type de côte</label>
                            <select className="custom-select" value={this.state.type} id="type"
                                    onChange={(e) => this.handleChange(e)}>
                                {
                                    this.state.cotes_types.map(item => {
                                        return <option value={item._id}>{item.label}</option>
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