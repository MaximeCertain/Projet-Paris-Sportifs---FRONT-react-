import React, {Component} from 'react';
import MatchesService from "../../services/matches.service";
import Post from "../../components/Post";
import Match from "../../components/matches/Match";
import {Link} from "react-router-dom";

class ListMatches extends Component {
    constructor(props) {
        super(props);
        //base de donnée interne
        this.state = {
            title: "Liste des matchs",
            matches: []
        }
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
        console.log(this.props.data);
    }

    render() {
        return (
            <div>
                <h1> {this.state.title}</h1>
                <Link type="submit" to={'add-match'} className="btn btn-success">Ajouter un nouveau match</Link>
                {
                    this.state.matches.length !== 0 ?
                        <table className="table">
                            <thead>
                            <tr>
                                <th>Adversaire 1</th>
                                <th>Adversaire 2</th>
                                <th>Date rencontre</th>
                                <th>Sport</th>
                                <th>Résultat</th>
                                <th>Cotes remplies</th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.state.matches.map((item, index) => {
                                return (<Match key={index} data={item} />)
                            })
                            }
                            </tbody>
                        </table>
                        :
                        <span/>
                }
            </div>
        )
    }
}

export default ListMatches;