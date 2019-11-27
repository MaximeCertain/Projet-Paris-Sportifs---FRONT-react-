import React, {Component} from 'react';
import PostService from "../services/posts.service";

class DetailsPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: [
                {
                    id: 1,
                    title: "mon titre22",
                    content: "mon contenu"
                }
            ]
        }
    }
    async componentDidMount() {
          let id = this.props.match.params.id;
        let response = await PostService.details(id);
        if (response.ok) {
            //La réponse est de type 200
            let data = await response.json();
            console.log(data);
            this.setState({
                post: data
            });
        }
    }

    render() {
        return (
            <div>
                <h1> {this.state.post.id}</h1>
                <p>{this.state.post.title}</p>
                  {this.state.post.body}

            </div>
        );
    }
}

export default DetailsPost;

//this.props.match.params.monparam
