import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import MatchesService from "../../services/matches.service";
import CotesTypesService from "../../services/cotes_types.service";
import UserServices from "../../services/users.service";
import CotesService from "../../services/cotes.service";
import BetsService from "../../services/bets.service";
import BetsForUser from "../profile/BetsForUser";
import Header from "../Header";

class ErrorFormMessage extends Component {
    constructor(props) {
        super(props);
    }

    /**
     * Affiche message d'erreur personalisable (titre et message) dans les différents formulaires
     * @returns {*}
     */
    render() {
        return (
            <div className="toast bg-danger fade show col-md-12" role="alert" aria-live="assertive"
                 aria-atomic="true" style={{maxWidth: 1000}}>
                <div className="toast-header"><strong className="mr-auto">{this.props.title}</strong>
                </div>
                <div className="toast-body">{this.props.message}</div>
            </div>

        )
    }
}

export default ErrorFormMessage;