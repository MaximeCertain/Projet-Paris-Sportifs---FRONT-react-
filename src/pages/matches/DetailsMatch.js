import React, {Component} from 'react';
import MatchService from "../../services/matches.service";
import {Link} from "react-router-dom";
import Match from "../../components/match/Match";

class DetailsMatch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            title: "",
            content: "",
        }
    }

    async componentDidMount() {
        let id = this.props.match.params.id;
        let response = await MatchService.details(id);
        if (response.ok) {
            //La réponse est de type 200
            let data = await response.json();
            console.log(data);
            this.setState({
                id: data.id,
                title: data.title,
                content: data.body
            });
        }
    }

    async deletePost(id){
        let response = await MatchService.delete(id);
        console.log("Here");
        if(response.ok){
            this.props.history.push("/");
        }
    }

    render() {
        return (
            <h1>Hello</h1>
        );
    }
}

export default DetailsMatch;

//this.props.match.params.monparam
