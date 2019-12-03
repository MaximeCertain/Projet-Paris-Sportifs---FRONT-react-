import React, {Component} from 'react';
import SportsService from "../../services/sports.service";

class AddSport extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: ''
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
        let body = {
            label: this.state.label
        };
        let response  = await SportsService.create(body);
        if (response.ok){
            this.setState({
                success: true,
                msgSuccess: "post cree avec succès"
            });
               this.props.history.replace('/sports');
        }
    }
    render() {
        return (
            <div className="container">
                <form onSubmit={(e) => this.submit(e)}>
                    <h1>Ajouter un sport</h1>
                    <div className="form-group">
                        <label>label</label>
                        <input className="form-control" required id="label" type="text" value={this.state.label}
                               onChange={(e) => this.handleChange(e)}/>
                    </div>
                    <button className="btn btn-primary">Ajouter</button>
                </form>
            </div>
        );
    }
}

export default AddSport;

//this.props.matches.params.monparam
