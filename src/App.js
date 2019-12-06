import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
//import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Burger from "./components/Burger";
import ListMatches from "./pages/matches/ListMatches";
import DetailsMatch from "./pages/matches/DetailsMatch";
import ListUsers from "./pages/users/ListUsers";
import FormUser from "./components/users/FormUser";
import UpdateUser from "./components/users/UpdateUser";
import PageNotFound from "./components/404";
import Login from "./pages/Login";
import ListSports from "./pages/sports/ListSports";
import UpdateSport from "./pages/sports/UpdateSport";
import AddSport from "./pages/sports/AddSport";
import AddMatch from "./pages/matches/AddMatch";
import Profile from "./pages/Profile";
import Register from "./pages/Register";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                {localStorage.getItem('idUser') ?
                    <div>
                        <Header/>
                        <Burger/>
                        <div className="content-wrapper" style={{minHeight: 216}}>

                            {localStorage.getItem('role') === "ROLE_SUPER_ADMIN" ?
                                <div>
                                    <Switch>
                                        <Route path="/matches" exact component={ListMatches}/>
                                        <Route path="/matches/:id" exact component={DetailsMatch}/>
                                        <Route path="/users" exact component={ListUsers}/>
                                        <Route path="/add-user" exact component={FormUser}/>
                                        <Route path="/update-user/:id" exact component={UpdateUser}/>
                                        <Route path="/page-not-found" exact component={PageNotFound}/>
                                        <Route path="/sports" exact component={ListSports}/>
                                        <Route path="/update-sport/:id" exact component={UpdateSport}/>
                                        <Route path="/add-sport" exact component={AddSport}/>
                                        <Route path="/add-match" exact component={AddMatch}/>
                                        <Route component={PageNotFound}/>
                                    </Switch>

                                </div>
                                :
                                <div>
                                    <Switch>
                                        <Route path="/" exact component={Home}/>
                                        <Route path="/profile" exact component={Profile}/>
                                        <Route component={PageNotFound}/>
                                    </Switch>
                                </div>
                            }

                        </div>
                        <Footer/>
                    </div> :
                    <div>
                        <Route path="/login" exact component={Login}/>
                        <Route path="/register" exact component={Register}/>
                    </div>
                }

            </BrowserRouter>
        );
    }
}

export default App;
