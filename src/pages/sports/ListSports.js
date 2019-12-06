import React, {Component} from 'react';
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

    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
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
                                    <td><Link className="btn btn-primary" to={`/update-sport/${item._id}`}>
                                        <i className="fas fa-football-ball"/>Voir/Modifier</Link></td>
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