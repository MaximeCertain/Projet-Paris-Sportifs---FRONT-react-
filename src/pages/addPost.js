import React, {Component} from 'react';

class AddPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: ''
        }
    }

    handleChange(e){
        this.setState({
          [e.target.id]: e.target.value
        });
    }
    render() {
        return (
            <div className="container">
                <h1>Ajouter un post</h1>
                <div className="form-group">
                    <label>titre</label>
                    <input className="form-control" required id="title" type="text" onChange={(e) => this.handleChange(e)} />
                </div>
                <div className="form-group">
                    <label>contenu</label>
                    <input className="form-control" required id="content" type="text" onChange={(e) => this.handleChange(e)} />
                </div>
            </div>
        );
    }
}

export default AddPost;

//this.props.match.params.monparam
