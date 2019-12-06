import React, {Component} from 'react';
import {Link} from "react-router-dom";
import UserServices from "../services/users.service";

class Login extends Component {
    constructor(props) {
        super(props);
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
        console.log("je submit");
        let body = {
            email: this.state.email,
            password: this.state.password
        };
        let response = await UserServices.checkLogin(body);
        if (response.ok) {
            let data = await response.json();
            if(data.user !== null){
                localStorage.setItem('idUser', data.user._id);
                localStorage.setItem('email', data.user.email);
                localStorage.setItem('role', data.user.user_type.label);
                if(data.user.user_type.label === "ROLE_USER"){
                    window.location.replace("/");
                }else{
                    window.location.replace("/matches");
                }
                //local storage clear ou remove item
            }else{
                console.log("echec de connexion");
            }
            this.setState({
                success: true,
                msgSuccess: "utilisateur connecté"
            });
        }
    }

    render() {
        return (
            <div className="login-box row" style={{
                textAlign: 'center',
                position: 'absolute', /*! top: '50%', */
                left: '50%',
                transform: 'translate(-50%)'
            }}>
                <div className="card-body register-card-body">
                    <img src="https://image.flaticon.com/icons/svg/1809/1809121.svg" alt="AdminLTE Logo"
                         className="brand-image img-circle elevation-3 img-md"
                         style={{opacity: '.8'}}/>
                    <h1 className="brand-text font-weight-light">Se connecter</h1>
                </div>
                {/* /.login-logo */}
                <div className="card col-md-12">
                    <div className="card-body login-card-body">
                        <p className="login-box-msg">Sign in to start your session</p>
                        <form onSubmit={(e) => this.submit(e)}>
                            <div className="input-group mb-3">
                                <input type="email" className="form-control" id="email"
                                       onChange={(e) => this.handleChange(e)}/>
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-envelope"/>
                                    </div>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <input type="password" className="form-control" id="password"
                                       onChange={(e) => this.handleChange(e)}/>
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-lock"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-8">
                                </div>
                                <div className="col-6">
                                    <button type="submit" className="btn btn-primary btn-block">Se connecter</button>
                                </div>
                            </div>
                        </form>
                        <p className="mb-0">
                            <Link to={"/register"} className="text-center">S'inscrire</Link>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;

//this.props.matches.params.monparam
