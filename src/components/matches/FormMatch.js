import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import MatchesService from "../../services/matches.service";

class FormMatch extends Component {
    constructor(props) {
        super(props);


        this.state = {
            date: '',
            adversaire1: '',
            adversaire2: ''
        };
    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({
            adversaire1: nextProps.data.adversaire1,
            adversaire2: nextProps.data.adversaire2,
            date: nextProps.data.date
        })
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
            adversaire1: this.state.adversaire1,
            adversaire2: this.state.adversaire2,
            date: this.state.date
        };
        console.log(body);

        let response = await MatchesService.update(this.props.data._id, body);
        if (response.ok) {
            window.location.replace(`/matches`);
        }
    }

    render() {
        return (
            <div className="card card-primary">
                <div className="card-header">
                    <h3 className="card-title">Modifier ce match
                        match {this.props.data.adversaire1} - {this.props.data.adversaire2}</h3>
                    <div className="card-tools">
                        <button type="button" className="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip"
                                title="Collapse">
                            <i className="fas fa-minus"/></button>
                    </div>
                </div>
                <div className="card-body" style={{display: 'block'}}>
                    <form onSubmit={(e) => this.submit(e)}>
                        <div className="form-group">
                            <label htmlFor="inputName">Adversaire 1</label>
                            <input type="text" id="adversaire1" className="form-control"
                                   value={this.state.adversaire1} onChange={(e) => this.handleChange(e)}
                                   />
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputDescription">Adversaire 2</label>
                            <input type="text" id="adversaire2" className="form-control"
                                   value={this.state.adversaire2} onChange={(e) => this.handleChange(e)}
                                   />
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputName">Date</label>
                            <input type="date" className="form-control" id="date" value={this.state.date.substr(0,10)}
                                   onChange={(e) => this.handleChange(e)}/>
                        </div>
                        <button className="btn btn-success">Enregistrer</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default FormMatch;