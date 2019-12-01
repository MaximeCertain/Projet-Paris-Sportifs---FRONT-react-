import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PostService from "../../services/posts.service";
import UserServices from "../../services/users.service";

class FormUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            lastName: '',
            firstName: '',
            password: '',
            success: false,
            msgSuccess:'le message est enregistré avec succès'
        }
    }

    handleChange(e) {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    async submit(e){
        console.log("submit");
        //annuler l'evenement onclick
        e.preventDefault();
        this.setState({success: false});
        let body = {
            email: this.state.email,
            password: this.state.password,
            lastName: this.state.lastName,
            firstName: this.state.firstName,
            user_type: "5ddfc19bf113672c480ad9f7",
        };
        let response  = await UserServices.create(body);
        if (response.ok){
            this.setState({
                success: true,
                msgSuccess: "post cree avec succès"
            });
            this.props.history.push('/users');
            /* on retourne sur l'url precedent
               this.props.history.push('/');*/
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
                                       value={this.state.email} onChange={(e) => this.handleChange(e)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input type="password" required className="form-control" id="password"
                                       value={this.state.password} onChange={(e) => this.handleChange(e)} />
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