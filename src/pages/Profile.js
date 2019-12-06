import React, {Component} from 'react';
import Post from "../components/Post";
import BlocMatch from "../components/home/BlocMatch";
import MatchesService from "../services/matches.service";
import Match from "../components/matches/Match";
import UserServices from "../services/users.service";
import BetsForUser from "../components/profile/BetsForUser";
import EditProfile from "../components/profile/EditProfile";
import InfoUser from "../components/profile/InfoUser";
import AccountActionsForUser from "../components/profile/AccountActionsForUser";

class Profile extends Component {
    //state = local storage du composant
    constructor(props) {
        super(props);
        //base de donnée interne
        this.state = {
            title: "",
            user: {},
            bets: [],
            account_actions:[]
        }
    }

    /**
     * Récupération de l'utilisateur connecté avec tous ses détails
     * */
    async componentDidMount() {
        let response = await UserServices.details(localStorage.getItem('idUser'));
        if (response.ok) {
            //La réponse est de type 200

            let data = await response.json();
            console.log(data.user);
            this.setState({
                user: data.user,
                bets: data.user.bets,
                account_actions: data.user.account_actions
            });

        }
    }

    render() {
        return (
            <section className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3">
                            <InfoUser data={this.state.user}/>
                        </div>
                        {/* /.col */}
                        <div className="col-md-9">
                            <div className="card">
                                <div className="card-header p-2">
                                    <ul className="nav nav-pills">
                                        <li className="nav-item"><a className="nav-link active" href="#activity"
                                                                    data-toggle="tab">Paris</a></li>
                                        <li className="nav-item"><a className="nav-link" href="#timeline"
                                                                    data-toggle="tab">Actions</a></li>
                                        <li className="nav-item"><a className="nav-link" href="#settings"
                                                                    data-toggle="tab">Editer profil</a></li>
                                    </ul>
                                </div>
                                <div className="card-body">
                                    <div className="tab-content">
                                        <div className="active tab-pane" id="activity">
                                            <BetsForUser data={this.state.bets}/>
                                        </div>
                                        <div className="tab-pane" id="settings">
                                            <EditProfile data={this.state.user}/>
                                        </div>
                                        <div className="tab-pane" id="timeline">
                                            <AccountActionsForUser data={this.state.account_actions}/>
                                        </div>
                                    </div>
                                    {/* /.tab-content */}
                                </div>
                                {/* /.card-body */}
                            </div>
                            {/* /.nav-tabs-custom */}
                        </div>
                        {/* /.col */}
                    </div>
                    {/* /.row */}
                </div>
                {/* /.container-fluid */}
            </section>

        );
    }
}

export default Profile;