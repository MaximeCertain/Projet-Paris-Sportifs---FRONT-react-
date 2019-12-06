import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import MatchesService from "../../services/matches.service";
import UserServices from "../../services/users.service";

class EditProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lastName: '',
            firstName: '',
            password: '',
            email: ''
        }
    }
    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({
            lastName: nextProps.data.lastName,
            firstName: nextProps.data.firstName,
            password: nextProps.data.password,
            email: nextProps.data.email
        })
    }

    componentDidMount() {
        this.setState({
            lastName: this.props.data.lastName,
            firstName: this.props.data.firstName,
            password: this.props.data.password,
            email: this.props.data.email
        })
    }

    /**
     * @param e
     */
    handleChange(e) {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    /**
     * @param e
     * @returns {Promise<void>}
     */
    async submit(e) {
        //annuler l'evenement onclick
        e.preventDefault();
        let body = {
            lastName: this.state.lastName,
            firstName: this.state.firstName,
            email: this.state.email,
            password: this.state.password
        };
        let response = await UserServices.update(localStorage.getItem('idUser'), body);
        if (response.ok) {
            console.log(response);
            window.location.replace('/profile');
        }
    }

    render() {
        return (
            <form className="form-horizontal" onSubmit={(e) => this.submit(e)}>
            <div className="form-group row">
                    <label htmlFor="inputName">Nom</label>
                        <input type="text" className="form-control" required id="lastName"
                           value={this.state.lastName} onChange={(e) => this.handleChange(e)}/>
                </div>
                <div className="form-group row">
                    <label htmlFor="inputName" className="col-sm-2 col-form-label">Prénom</label>
                    <input type="text" className="form-control" required id="firstName"
                           value={this.state.firstName} onChange={(e) => this.handleChange(e)}/>
                </div>
                <div className="form-group row">
                    <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Email</label>
                    <input type="email" className="form-control" required id="email" value={this.state.email}
                           onChange={(e) => this.handleChange(e)}/>
                </div>
                <div className="form-group row">
                    <label htmlFor="inputName2" className="col-sm-2 col-form-label">password</label>
                    <input type="password" className="form-control" required id="password"
                           value={this.state.password} onChange={(e) => this.handleChange(e)}/>
                </div>

                <div className="form-group row">
                    <div className="offset-sm-2 col-sm-10">
                        <button type="submit" className="btn btn-danger">Enregistrer</button>
                    </div>
                </div>
            </form>
        )
    }
}

export default EditProfile;