import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import UserServices from "../../services/users.service";
import SportsService from "../../services/sports.service";


class UpdateSport extends Component {
    constructor(props) {
        super(props);
        this.state = {
            label: '',
            id: ''
        }
    }

    async componentWillMount() {
        let id = this.props.match.params.id;
        let response = await SportsService.details(id);
        if (response.ok) {
            let data = await response.json();
            console.log(data);
            //La réponse est de type 200
            this.setState({
                label: data.sports.label,
                id: data.sports._id
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
        let body = {
            label: this.state.label
        };
        let response = await SportsService.update(this.state.id, body);
        if (response.ok) {
            this.setState({
                success: true,
                msgSuccess: "user modifie avec succès"
            });
            this.props.history.push('/sports');
        }
    }

    async deleteUser(id) {
        let response = await UserServices.delete(id);
        if (response.ok) {
            this.props.history.push('/users');
        }
        console.log(response);
    }


    render() {
        return (<div className="row">
                <div className="col-md-12 card card-pink">
                    <div className="card-header">
                        <h3 className="card-title">Modifier le sport {this.state.label}</h3>
                        {/*   <button type="submit" className="btn delete"
                                onClick={() => this.deleteUser(this.state.id)}>Supprimer
                        </button>*/}
                    </div>
                    {/* form start */}
                    <form onSubmit={(e) => this.submit(e)}>
                        <div className="card-body">
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Libellé</label>
                                <input type="text" required className="form-control" id="label"
                                       value={this.state.label} onChange={(e) => this.handleChange(e)}/>
                            </div>
                        </div>
                        <div className="card-footer">
                            <button type="submit" className="btn btn-primary">Enregistrer</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default UpdateSport;