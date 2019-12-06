import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import UserServices from "../../services/users.service";
import CotesTypesService from "../../services/cotes_types.service";
import SportsService from "../../services/sports.service";
import UserTypeService from "../../services/users_types.service";

class FormUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            lastName: '',
            firstName: '',
            password: '',
            idTypeUser: '',
            success: false,
            msgSuccess: 'le message est enregistré avec succès'
        }
    }

    handleChange(e) {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    /**
     * Recupère l'id du type utilisateur pour creer ce dernier
     * @returns {Promise<void>}
     */
    async componentDidMount() {
        let responseCoteType = await UserTypeService.list();
        let dataCoteType = await responseCoteType.json();
        let users_types = dataCoteType.users_types;
        let user_type = users_types.filter(function (item) {
            return (item.label === "ROLE_USER");
        });
        this.setState({
            idTypeUser: user_type[0]._id
        });
    }

    async submit(e) {
        //annuler l'evenement onclick
        e.preventDefault();

        this.setState({success: false});
        let body = {
            email: this.state.email,
            password: this.state.password,
            lastName: this.state.lastName,
            firstName: this.state.firstName,
            user_type: this.state.idTypeUser,
        };
        let response = await UserServices.create(body);
        if (response.ok) {
            this.setState({
                success: true,
                msgSuccess: "utilisateur cree avec succès"
            });
            this.props.history.push('/users');
        }
    }


    render() {
        return (<div className="row">
                <div className="col-md-12 card card-primary">
                    <div className="card-header">
                        <h3 className="card-title">Ajouter un nouvel utilisateur</h3>
                    </div>
                    {/* /.card-header */}
                    {/* form start */}
                    <form onSubmit={(e) => this.submit(e)}>
                        <div className="card-body">
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Adresse Electronique</label>
                                <input type="email" required className="form-control" id="email"
                                       value={this.state.email} onChange={(e) => this.handleChange(e)}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input type="password" required className="form-control" id="password"
                                       value={this.state.password} onChange={(e) => this.handleChange(e)}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Nom</label>
                                <input type="text" required className="form-control" id="lastName"
                                       value={this.state.lastName} onChange={(e) => this.handleChange(e)}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Prénom</label>
                                <input type="text" required className="form-control" id="firstName"
                                       value={this.state.firstName} onChange={(e) => this.handleChange(e)}/>
                            </div>
                        </div>
                        {/* /.card-body */}
                        <div className="card-footer">
                            <button type="submit" className="btn btn-primary">Enregistrer</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default FormUser;