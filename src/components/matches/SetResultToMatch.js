import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import CotesService from "../../services/cotes.service";
import MatchesService from "../../services/matches.service";

class SetResultToMatch extends Component {
    constructor(props) {
        super(props);
        this.state={
            result: '1'
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
        let body = {
            result: this.state.result
        };

        let response = await MatchesService.giveResult(this.props.idMatch, body);
        if (response.ok) {
             window.location.replace(`/matches`);
        }
    }

    render() {
        return (
            <div className="card card-success">
                <div className="card-header">
                    <h3 className="card-title">Résultat du Match</h3>
                    <div className="card-tools">
                        <button type="button" className="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip"
                                title="Collapse">
                            <i className="fas fa-minus"/>
                        </button>
                    </div>
                </div>
                <div className="card-body" style={{display: 'block'}}>
                    <span>Cette action cloturera la modification du match et les gains seront reversés aux gagnants</span>
                    <form onSubmit={(e) => this.submit(e)}>
                        <div className="form-group">
                            <label htmlFor="inputName">Résultat</label>
                            <select className="custom-select" value={this.state.result} id="result"
                                    onChange={(e) => this.handleChange(e)}>
                                <option selected value="1">Equipe 1</option>
                                <option value="X">Match nul</option>
                                <option value="2">Equipe 2</option>
                            </select>
                        </div>
                        <button className="btn btn-success">Enregistrer</button>
                    </form>
                </div>

            </div>

        )
    }
}

export default SetResultToMatch;