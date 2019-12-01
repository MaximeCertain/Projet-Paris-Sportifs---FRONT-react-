import React, {Component} from 'react';
import PostService from "../../services/posts.service";
import MatchesService from "../../services/matches.service";
import Post from "../../components/Post";
import Match from "../../components/matches/Match";
import UserServices from "../../services/users.service";
import User from "../../components/users/User";
import {Link} from "react-router-dom";

class ListUsers extends Component {
    constructor(props) {
        super(props);
        //base de donnée interne
        this.state = {
            title: "Liste des Utilisateurs",
            users: []
        }
    }


    componentWillMount() {
        console.log("will");
    }


    onClickButton() {
        console.log("je clique");
    }

    async componentDidMount() {
        console.log("did");
        let response = await UserServices.list();
        if (response.ok) {
            //La réponse est de type 200
            let data = await response.json();
            this.setState({
                users: data.users
            });
        }
    }


    render() {
        return (
            <div> <h1>{this.state.title}</h1>
            <Link type="submit" to={'add-user'} className="btn btn-success">Ajouter un nouvel utilisateur</Link>

                {
                    this.state.users.length !== 0 ?
                        <table className="table">
                            <thead>
                            <tr>
                                <th>Nom/Prénom</th>
                                <th>Capital</th>
                                <th>Nombre de Paris</th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.state.users.map((item, index) => {
                                return (<User key={index} data={item} />)
                            })
                            }
                            </tbody>
                        </table>
                        :
                        <h1>Vous n'avez renseigné aucun utilisateur</h1>
                }
            </div>
        )
    }
}

export default ListUsers;