import React, {Component} from 'react';
import PostService from "../services/posts.service";
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
                window.location.replace("/matches");
                //local storage clear ou remove item
            }else{
                console.log("echec");
            }
            this.setState({
                success: true,
                msgSuccess: "utilisateur connecté"
            });
            /* on retourne sur l'url precedent
               this.props.history.push('/');*/
        }
        console.log(response);

    }

    render() {
        return (
            <div className="login-box">
                <div className="login-logo">
                    <a href=""><b>Admin</b>LTE</a>
                </div>
                {/* /.login-logo */}
                <div className="card">
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
                                <div className="col-4">
                                    <button type="submit" className="btn btn-primary btn-block">Sign In</button>
                                </div>
                            </div>
                        </form>
                        <p className="mb-0">
                            <a href="" className="text-center">S'inscrire</a>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;

//this.props.matches.params.monparam
