import React, {Component} from 'react';
import PostService from "../../services/posts.service";
import MatchesService from "../../services/matches.service";
import Post from "../../components/Post";
import Match from "../../components/matches/Match";
import UserServices from "../../services/users.service";
import User from "../../components/users/User";

class ListMatches extends Component {
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
            <div> {this.state.title}
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
                        <h1>Vous n'avez renseigné aucun match</h1>
                }
            </div>
        )
    }
}

export default ListMatches;