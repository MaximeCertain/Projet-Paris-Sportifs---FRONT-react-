import React, {Component} from 'react';
import PostService from "../services/posts.service";

class AddPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: '',
            success: false,
            msgSuccess:'le message est enregistré avec succès'
        }
    }
    //on modifie les valeurs du msg success
    componentDidMount() {
        this.setState({
            title:"valeur base"
        })
    }

    handleChange(e) {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

  async submit(e){
        //annuler l'evenement onclick
        e.preventDefault();
        this.setState({success: false})
        console.log("je submit");
        let body = {
            title: this.state.title,
            body: this.state.content,
            userId: 1
        };
        let response  = await PostService.create(body);
        if (response.ok){
            this.setState({
                success: true,
                msgSuccess: "post cree avec succès"
            });

         /* on retourne sur l'url precedent
            this.props.history.push('/');*/
        }
    }
    render() {
        return (
            <div className="container">
                <form onSubmit={(e) => this.submit(e)}>
                    <h1>Ajouter un post</h1>
                    <div className="form-group">
                        <label>titre</label>
                        <input className="form-control" required id="title" type="text" value={this.state.title}
                               onChange={(e) => this.handleChange(e)}/>
                    </div>
                    <div className="form-group">
                        <label>contenu</label>
                        <input className="form-control" required id="content" type="text" value={this.state.content}
                               onChange={(e) => this.handleChange(e)}/>
                    </div>
                    <button className="btn btn-primary">Ajouter</button>
                </form>
                {
                    this.state.success ? <p>{this.state.msgSuccess}</p> : null
                }
            </div>
        );
    }
}

export default AddPost;

//this.props.match.params.monparam
