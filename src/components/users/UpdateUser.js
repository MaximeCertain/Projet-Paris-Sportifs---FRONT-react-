import React, {Component} from 'react';
import UserServices from "../../services/users.service";

class UpdateUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            id: '',
            lastName: '',
            firstName: '',
            password: '',
            user_type: '',
            success: false,
            msgSuccess: 'le message est enregistré avec succès'
        }
    }

    async componentWillMount() {
        let id = this.props.match.params.id;
        let response = await UserServices.details(id);
        if (response.ok) {
            let data = await response.json();
            //La réponse est de type 200
            this.setState({
                email: data.user.email,
                id: data.user._id,
                lastName: data.user.lastName,
                firstName: data.user.firstName,
                password: data.user.password,
                role: data.user.user_type.label
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
            email: this.state.email,
            password: this.state.password,
            lastName: this.state.lastName,
            firstName: this.state.firstName
        };

        let response = await UserServices.update(this.state.id, body);
        if (response.ok) {
            this.setState({
                success: true,
                msgSuccess: "user modifie avec succès"
            });
            this.props.history.push('/users');
        }
    }

    async deleteUser(id) {
        let response = await UserServices.delete(id);
        if (response.ok) {
            this.props.history.push('/users');
        }
    }


    render() {
        return (<div className="row">
                <div className="col-md-12 card card-primary">
                    <div className="card-header">
                        <h3 className="card-title">Modifier l'utilisateur {this.state.lastName} {this.state.firstName}</h3>
                        {
                            this.state.role === "ROLE_USER" &&
                            <button type="submit" className="btn delete"
                                    onClick={() => this.deleteUser(this.state.id)}>Supprimer
                            </button>
                        }
                    </div>
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
                        <div className="card-footer">
                            <button type="submit" className="btn btn-primary">Enregistrer</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default UpdateUser;