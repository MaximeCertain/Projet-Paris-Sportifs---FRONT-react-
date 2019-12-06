import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import UserServices from "../services/users.service";
import ErrorFormMessage from "../components/form/ErrorFormMessage";

class Register extends Component {
    //state = local storage du composant
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            lastName: '',
            firstName: '',
            password: '',
            password2: '',
            errorMessage: '',
            titleMessage: ''
        }
    }

    handleChange(e) {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    /**
     * ENregistrement de l'utilisateur ou affichage message erreur si mots de passes non similaires
     * @param e
     * @returns {Promise<void>}
     */
    async submit(e) {
        this.setState({
            message: "",
            title: ""
        });
        e.preventDefault();
        if (this.state.password === this.state.password2) {
            this.setState({success: false});
            let body = {
                email: this.state.email,
                password: this.state.password,
                lastName: this.state.lastName,
                firstName: this.state.firstName,
                user_type: "5ddfc19bf113672c480ad9f7",
            };
            let response = await UserServices.create(body);
            if (response.ok) {
                window.location.replace('/login');
            }
        } else {
            this.setState({
                message: "vos mots de passes doivent être identiques",
                title: "Erreur d'inscription"
            })
        }
    }

    render() {
        return (
            <div className="register-box" style={{
                textAlign: 'center',
                position: 'absolute', /*! top: '50%', */
                left: '50%',
                transform: 'translate(-50%)'
            }}>
                <div className="register-logo">
                    <a href="#">Winamaximus</a>
                </div>
                <div className="card">
                    <div className="card-body register-card-body">
                        <img src="https://image.flaticon.com/icons/svg/1809/1809121.svg" alt="AdminLTE Logo"
                             className="brand-image img-circle elevation-3 img-md"
                             style={{opacity: '.8'}}/>
                        <h1 className="brand-text font-weight-light">S'inscrire</h1>
                        {this.state.message !== '' && typeof this.state.message !== "undefined" &&
                        <ErrorFormMessage title={this.state.title} message={this.state.message}/>
                        }

                        <form onSubmit={(e) => this.submit(e)}>
                            <div className="row input-group mb-3">
                                <label className="col-lg-12">Nom</label>
                                <input type="text" id="lastName" required className="form-control col-lg-12"
                                       onChange={(e) => this.handleChange(e)}/>
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-user"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row input-group mb-3">
                                <label className="col-lg-12">Prénom</label>
                                <input type="text" id="firstName" required className="form-control col-lg-12"
                                       onChange={(e) => this.handleChange(e)}/>
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-user"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row input-group mb-3">
                                <label className="col-lg-12">Email</label>
                                <input type="email" id="email" required className="form-control col-lg-12"
                                       onChange={(e) => this.handleChange(e)}/>
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-envelope"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row input-group mb-3">
                                <label className="col-lg-12">Mot de Passe</label>
                                <input type="password" id="password" required className="form-control col-lg-12"
                                       onChange={(e) => this.handleChange(e)}/>
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-lock"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row input-group mb-3">
                                <label className="col-lg-12">Resaisir le mot de passe</label>
                                <input type="password" id="password2" required className="form-control col-lg-12"
                                       onChange={(e) => this.handleChange(e)}/>
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-lock"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-8">
                                    <div className="icheck-primary">
                                        <input type="checkbox" id="agreeTerms" required
                                               name="terms" defaultValue="agree"
                                        />
                                        <label htmlFor="agreeTerms">
                                            I agree to the <a href="#">terms</a>
                                        </label>
                                    </div>
                                </div>
                                {/* /.col */}
                                <div className="col-4">
                                    <button type="submit" className="btn btn-primary btn-block">Register</button>
                                </div>
                                {/* /.col */}
                            </div>
                        </form>
                        <div className="social-auth-links text-center">
                            <p>- OR -</p>
                        </div>
                        <Link to={"/login"} className="text-center">Déjà inscrit ?</Link>
                    </div>
                    {/* /.form-box */}
                </div>
                {/* /.card */}
            </div>

        );
    }
}

export default Register;