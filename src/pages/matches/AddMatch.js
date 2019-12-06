import React, {Component} from 'react';
import SportsService from "../../services/sports.service";
import CotesTypesService from "../../services/cotes_types.service";
import MatchesService from "../../services/matches.service";

class AddMatch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            adversaire1: '',
            adversaire2: '',
            date: '',
            sport:'',
            sports :[]
        }
    }
    //on modifie les valeurs du msg success
   async componentDidMount() {
        let response = await SportsService.list();
       if (response.ok) {
           //La réponse est de type 200
           let data = await response.json();
           this.setState({
               sports: data.sports,
               sport:data.sports[0]._id
           });
       }
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
            adversaire1: this.state.adversaire1,
            adversaire2: this.state.adversaire2,
            date: this.state.date,
            sport: this.state.sport

        };
        let response  = await MatchesService.create(body);
        if (response.ok){
            this.props.history.replace('/matches');
        }
    }
    render() {
        return (
            <div className="container">
                <form onSubmit={(e) => this.submit(e)}>
                    <h1>Ajouter un nouveau match</h1>
                    <div className="form-group">
                        <label>Adversaire 1</label>
                        <input className="form-control" required id="adversaire1" type="text" value={this.state.adversaire1}
                               onChange={(e) => this.handleChange(e)}/>
                    </div>
                    <div className="form-group">
                        <label>Adversaire 2</label>
                        <input className="form-control" required id="adversaire2" type="text" value={this.state.adversaire2}
                               onChange={(e) => this.handleChange(e)}/>
                    </div>
                    <div className="form-group">
                        <label>Date</label>
                        <input className="form-control" required id="date" type="date"
                               onChange={(e) => this.handleChange(e)} value={this.state.date}/>
                    </div>
                    <div className="form-group">
                        <label>Sport</label>
                        <select className="custom-select" value={this.state.sport} id="sport"
                                onChange={(e) => this.handleChange(e)}>
                            {
                                this.state.sports.map(item => {
                                    return <option value={item._id} selected={item._id === this.state.sport}>{item.label}</option>
                                })
                            }
                        </select>
                    </div>
                    <button className="btn btn-primary">Ajouter un match</button>
                </form>
            </div>
        );
    }
}

export default AddMatch;

//this.props.matches.params.monparam
