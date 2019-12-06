import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Match from "../../components/matches/Match";
import FormMatch from "../../components/matches/FormMatch";
import ListCotesForMatch from "../../components/cotes/ListCotesForMatch";
import AddCoteForMatch from "../../components/cotes/AddCoteForMatch";
import MatchesService from "../../services/matches.service";
import SetResultToMatch from "../../components/matches/SetResultToMatch";
import update from 'immutability-helper';

class DetailsMatch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            matchs: {},
            id: '',
            cotes: []
        }

    }

    async componentWillMount() {
        let id = this.props.match.params.id;
        let response = await MatchesService.details(id);
        if (response.ok) {
            //La réponse est de type 200
            let data = await response.json();
            this.setState({
                matchs: data.matchs,
                id: id,
                cotes: data.matchs.cotes
            });
        }
    }

    async componentDidMount() {
    }

  async updateLineAfterUpdateParent(index, newCote){
      let updatedCote = await (this.state.cotes[index]);
      let newArray = update(this.state.cotes, {
          [index]: {
              cote: {$set: newCote}
          }
      });
      this.setState({cotes: newArray})

    }
    async addCoteToCotesArray(cote) {
        this.setState( {
            cotes: this.state.cotes.concat(cote)
        })
    }

    render() {
        return (

            <section className="content">
                <div className="row">
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-12">
                                <FormMatch  data={this.state.matchs}/>
                            </div>
                            <div className="col-md-12">
                                {this.state.matchs.result === '' &&
                                    <SetResultToMatch idMatch={this.props.match.params.id}/>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-12">
                                <ListCotesForMatch data={this.state.cotes} updateLineAfterUpdateParent={(index, newCote) => this.updateLineAfterUpdateParent(index, newCote)}/>
                            </div>
                            <div className="col-md-12">
                                <AddCoteForMatch data={this.state.matchs} idMatch={this.props.match.params.id}
                                                 addCoteToCotesArray={(cote) => this.addCoteToCotesArray(cote)}/>
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
