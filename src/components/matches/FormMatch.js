import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class FormMatch extends Component {
    constructor(props) {
        super(props);


    }

    componentDidMount() {
        console.log("enfant1");
    }

    render() {
        return (
            <div className="card card-primary">
                <div className="card-header">
                    <h3 className="card-title">Modifier ce match</h3>
                    <div className="card-tools">
                        <button type="button" className="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip"
                                title="Collapse">
                            <i className="fas fa-minus"/></button>
                    </div>
                </div>
                <div className="card-body" style={{display: 'block'}}>
                    <form>
                        <div className="form-group">
                            <label htmlFor="inputName">Adversaire 1</label>
                            <input type="text" id="inputName" className="form-control"
                                   value={this.props.data.adversaire1} defaultValue="AdminLTE"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputDescription">Adversaire 2</label>
                            <input type="text" id="inputName" className="form-control"
                                   value={this.props.data.adversaire2} defaultValue="AdminLTE"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputName">Date</label>
                            <input type="date" id="inputName" className="form-control" value={this.props.data.date}
                                   defaultValue="AdminLTE"/>
                        </div>
                        <button className="btn btn-success">Enregistrer</button>
                    </form>
                </div>

            </div>

        )
    }
}

export default FormMatch;