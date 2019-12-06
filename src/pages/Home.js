import React, {Component} from 'react';
import Post from "../components/Post";
import BlocMatch from "../components/home/BlocMatch";
import MatchesService from "../services/matches.service";
import Match from "../components/matches/Match";

class Home extends Component {
    //state = local storage du composant
    constructor(props) {
        super(props);
        //base de donnée interne
        this.state = {
            title: "",
            matches: []
        }
    }

    async componentDidMount() {
        let response = await MatchesService.list();
        if (response.ok) {
            //La réponse est de type 200
            let data = await response.json();

            let currentMatchs = data.matchs.filter((item) =>{
                return (item.result === '');
            });
            this.setState({
                matches: currentMatchs
            });
        }
    }

    render() {
        return (
            <div className="row">
                {this.state.matches.map((item) => {
                    return (<BlocMatch data={item} />)
                })
                }
            </div>
        );
    }
}

export default Home;