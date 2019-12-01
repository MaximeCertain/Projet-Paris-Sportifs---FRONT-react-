import React, {Component} from 'react';
import PostService from "../../services/posts.service";
import MatchesService from "../../services/matches.service";
import Post from "../../components/Post";
import Match from "../../components/matches/Match";

class ListMatches extends Component {
    constructor(props) {
        super(props);
        //base de donnée interne
        this.state = {
            title: "Liste des matchs",
            matches: []
        }
    }


    componentWillMount() {
        console.log("will");
    }


    onClickButton() {
        console.log("je clique");
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
    async detailsPost(id) {
        let response = await PostService.delete(id);
        if (response.ok) {
            let posts = this.state.posts;
            let index = posts.findIndex(post => post.id === id);
            posts.splice(index, 1);
            this.setState({posts: posts});
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
                            {this.state.matches.map((item, index) => {
                                return (<Match key={index} data={item} detailsMatch={(id) => this.detailsPost(id)}/>)
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