import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import MatchesService from "../../services/matches.service";
import BlocMatch from "../home/BlocMatch";

class FormFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            matches: '',
            filteredMatches: ''
        };
    }

    async componentDidMount() {
        let response = await MatchesService.list();
        if (response.ok) {
            //La réponse est de type 200
            let data = await response.json();
            this.setState({
                matches: data.matchs
            });
        }
    }

    async submit(e) {
        //annuler l'evenement onclick
        e.preventDefault();
        this.setState({
            filteredMatches: ''
        });
        if (e.target.value.length > 1) {
            let matchFunction = this.state.matches.filter(function (item) {
                return ((item.adversaire1.includes(e.target.value)) || (item.adversaire2.includes(e.target.value)));
            });
            if (matchFunction.length > 0) {
                this.setState({
                    filteredMatches: matchFunction
                });
                document.getElementById("selectMatches").style.display = "block";
            }
        } else {
            document.getElementById("selectMatches").style.display = "none";
        }
    }

    async filterOnMatch(e) {
        localStorage.getItem('role') === 'ROLE_SUPER_ADMIN' &&
        window.location.replace(`/matches/${e.target.value}`)
    }

    render() {
        return (
            <form className="form-inline ml-3">
                <div className="input-group input-group-sm" style={{width: 451, minWidth: 451}}>
                    <input className="form-control form-control-navbar" type="search" placeholder="Filtrer sur un match"
                           onChange={(e) => this.submit(e)}
                           aria-label="Search"/>
                    <div className="input-group-append">
                        <button className="btn btn-navbar" type="submit">
                            <i className="fas fa-search"/>
                        </button>
                    </div>
                </div>
                <select id="selectMatches" className="" multiple data-placeholder="Select a match"
                        style={{width: '100%', display: 'none', maxHeight: 40, maxWidth: 451}}>
                    {this.state.filteredMatches !== '' && this.state.filteredMatches.map(item => {
                        return <option value={item._id}
                                       onClick={(e) => this.filterOnMatch(e)}>{item.adversaire1} - {item.adversaire2}</option>
                    })}
                </select>
            </form>


        )
    }
}

export default FormFilter;