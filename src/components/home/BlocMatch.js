import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import MatchesService from "../../services/matches.service";
import CotesTypesService from "../../services/cotes_types.service";
import UserServices from "../../services/users.service";
import CotesService from "../../services/cotes.service";
import BlocCoteForMatch from "./BlocCoteForMatch";

class BlocMatch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cotes_types: [],
            type: "",
            cote: "",
            idMatch: null
        }
    }

    async componentDidMount() {
        let response = await CotesTypesService.list();
        if (response.ok) {
            //La réponse est de type 200
            let data = await response.json();
            this.setState({
                cotes_types: data.cotes_types,
                idMatch: this.props.idMatch
            });
        }
    }


    handleChange(e) {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    async submit(e) {
        //annuler l'evenement onclick
        e.preventDefault();
        this.setState({success: false});
        let body = {
            type: this.state.type,
            cote: this.state.cote
        };

        let response = await CotesService.create(body, this.state.idMatch);
        if (response.ok) {
            // this.props.history.push(`/matches/${this.state.idMatch}`);
        }
    }


    render() {
        return (
            <div className="col-md-6">
                <div className="card card-widget widget-user">
                    {/* Add the bg color to the header using any of the bg-* classes */}
                    <div className="widget-user-header text-white"
                         style={{background: 'url("https://wallpapercave.com/wp/4iR0ILG.jpg") center center'}}>
                        <h5 className="widget-user-username text-left">{this.props.data.adversaire1}</h5>
                        <h5 className="widget-user-desc text-right">{this.props.data.adversaire2}</h5>
                    </div>
                    <div className="widget-user-image">
                        <img className="img-circle" src="https://image.flaticon.com/icons/svg/987/987208.svg"
                             alt="User Avatar"/>
                    </div>
                    <div className="card-footer">
                        <div className="row">
                            {this.props.data.cotes.map((item, index) => {
                                return <BlocCoteForMatch data={item} key={index} idMatch={this.props.data._id} />
                            })}
                        </div>
                        {/* /.row */}
                    </div>

                </div>
                {/* /.widget-user */}
            </div>
        )
    }
}

export default BlocMatch;