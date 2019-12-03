import React, {Component} from 'react';
import PostService from "../../services/posts.service";
import SportsService from "../../services/sports.service";
import {Link} from "react-router-dom";

class ListSports extends Component {
    constructor(props) {
        super(props);
        //base de donnée interne
        this.state = {
            title: "Liste des sports",
            sports: []
        }
    }


    componentWillMount() {
        console.log("will");
    }


    onClickButton() {
        console.log("je clique");
    }

    async componentDidMount() {
        let response = await SportsService.list();
        if (response.ok) {
            //La réponse est de type 200
            let data = await response.json();
            this.setState({
                sports: data.sports
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
                <Link type="submit" to={'add-sport'} className="btn btn-success">Ajouter un nouveau sport</Link>
                {
                    this.state.sports.length !== 0 ?
                        <table className="table">
                            <thead>
                            <tr>
                                <th>Libellé</th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.state.sports.map((item, index) => {
                                return (<tr>
                                    <td>{item.label}</td>
                                    <td>  <Link className="btn btn-primary" to={`/update-sport/${item._id}`} >
                                        <i className="fas fa-football-ball" />Voir/Modifier</Link></td>
                                </tr>)
                            })
                            }
                            </tbody>
                        </table>
                        :
                        <h1>Vous n'avez renseigné aucun sport</h1>
                }
            </div>
        )
    }
}

export default ListSports;