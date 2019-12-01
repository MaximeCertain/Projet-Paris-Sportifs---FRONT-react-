import React, {Component} from 'react';
import PostService from "../services/posts.service";
import {Link} from "react-router-dom";

class DetailsPost extends Component {
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
        let response = await PostService.details(id);
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
        let response = await PostService.delete(id);
        console.log("Here");
        if(response.ok){
            this.props.history.push("/");
        }
    }

    render() {
        return (
            <div className="container">
                <h1> {this.state.title}</h1>
                <p>{this.state.content}</p>
                <button className="btn btn-danger" onClick={() => this.deletePost(this.state.id)}>Supprimer </button>
            </div>
        );
    }
}

export default DetailsPost;

//this.props.matches.params.monparam
