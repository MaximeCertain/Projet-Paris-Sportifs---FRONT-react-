import React, {Component} from 'react';
import Post from "../components/Post";
import PostService from "../services/posts.service";

class Home extends Component {
    //state = local storage du composant
    constructor(props) {
        super(props);
        //base de donnée interne
        this.state = {
            title: "Blog HITEMA",
            posts: [
                {
                    id: 1,
                    title: "mon titre22",
                    content: "mon contenu"
                },
                {
                    id: 2,
                    title: "mon titre4",
                    content: "mon contenu"
                }
            ]
        }
    }

    componentWillMount() {
        console.log("will");
    }

    async deletePost(id) {
        let response = await PostService.delete(id);
        if(response.ok){
            let posts= this.state.posts;
            let index = posts.findIndex(post => post.id === id);
            posts.splice(index, 1);
            this.setState({posts: posts});
        }
    }

    onClickButton() {
        console.log("je clique");

    }

    async componentDidMount() {
        console.log("did");
        let response = await PostService.list();
        if (response.ok) {
            //La réponse est de type 200
            let data = await response.json();
            console.log(data);
            this.setState({
                posts: data
            });
        }
    }

    render() {
        return (
            <div className="ma-section" style={{fontSize: 50}}>
                <h1> {this.state.title}</h1>
                <button onClick={() => this.onClickButton()}>Je clique</button>
                <table className="table">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>titre</th>
                        <th>contenu</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.posts.map((item, index) => {
                            return (<Post key={index} data={item} deletePost={(id) => this.deletePost(id)}/> /*
                                <tr key={index}><td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td>{item.content}</td>
                                    <td><button className="btn btn-danger">Supprimer</button></td>

                                </tr>*/
                            )
                        })
                    }
                    </tbody>
                </table>
                <h2>2eme titre </h2>
                <h3> 3eme titre</h3>
                je suis dans la page home héhé
                <ul>
                    {
                        this.state.posts.map((item, index) => {
                            return (<li key={index}>{item.title} - {item.content}</li>)
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default Home;