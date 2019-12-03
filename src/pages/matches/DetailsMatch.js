import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Match from "../../components/matches/Match";
import FormMatch from "../../components/matches/FormMatch";
import ListCotesForMatch from "../../components/cotes/ListCotesForMatch";
import AddCoteForMatch from "../../components/cotes/AddCoteForMatch";
import PostService from "../../services/posts.service";
import MatchesService from "../../services/matches.service";

class DetailsMatch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            matchs: {},
            id:'',
            cotes: []
        }
    }
  async  componentWillMount() {
        console.log("parent");
        let id = this.props.match.params.id;
        let response = await MatchesService.details(id);
        if (response.ok) {
            //La réponse est de type 200
            let data = await response.json();
            this.setState({
                matchs: data.matchs,
                id: id,
                cotes : data.matchs.cotes
            });
        }
        console.log("will");
    }

    async componentDidMount() {
    }

/*
    async deletePost(id) {
        let response = await MatchService.delete(id);
        console.log("Here");
        if (response.ok) {
            this.props.history.push("/");
        }
    }
*/
    render() {
        return (
            <section className="content">
                <div className="row">
                    <div className="col-md-6">
                        <FormMatch data={this.state.matchs}  />
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-12">
                                <ListCotesForMatch data={this.state.cotes} />
                            </div>
                            <div className="col-md-12">
                                <AddCoteForMatch data={this.state.matchs} idMatch={this.props.match.params.id}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default DetailsMatch;

//this.props.matches.params.monparam
