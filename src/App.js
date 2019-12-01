import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
//import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./pages/Home";
import DetailsPost from "./pages/DetailsPost";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AddPost from "./pages/addPost";
import Burger from "./components/Burger";
import ListMatches from "./pages/matches/ListMatches";
import DetailsMatch from "./pages/matches/DetailsMatch";
import ListUsers from "./pages/users/ListUsers";
import FormUser from "./components/users/FormUser";
import UpdateUser from "./components/users/UpdateUser";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Header/>
                <Burger/>
                <div className="content-wrapper" style={{minHeight: 216}}>
                    <Route path="/matches" exact component={ListMatches}/>
                    <Route path="/matches/:id" exact component={DetailsMatch}/>
                    <Route path="/users" exact component={ListUsers}/>
                    <Route path="/add-user" exact component={FormUser}/>
                    <Route path="/update-user/:id" exact component={UpdateUser}/>

                    <Route path="/" exact component={Home}/>
                    <Route path="/posts/:id" exact component={DetailsPost}/>
                    <Route path="/ajouter-un-post" exact component={AddPost}/>
                </div>
                <Footer/>
            </BrowserRouter>
        );
    }
}

/*
class App extends Component {
    //constructeur de classe
    constructor(props) {
        super(props);
    }

//appel a l'api
    componentWillMount() {
        console.log("component will mount");
    }

    //traitement
    componentDidMount() {
        console.log("component did mount");
    }

    render() {
        return (
            <div> bonjour monde
            </div>
        );
    }
}

 */

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

export default App;
