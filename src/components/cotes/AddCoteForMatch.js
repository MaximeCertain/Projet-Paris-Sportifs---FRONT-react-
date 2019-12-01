import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class AddCoteForMatch extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log(this.props);
    }

    render() {
        return (
                    <div className="card card-secondary">
            <div className="card-header">
            <h3 className="card-title">Budget</h3>
        <div className="card-tools">
            <button type="button" className="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip"
                    title="Collapse">
                <i className="fas fa-minus"/></button>
        </div>
        </div>
        <div className="card-body" style={{display: 'block'}}>
            <div className="form-group">
                <label htmlFor="inputEstimatedBudget">Estimated budget</label>
                <input type="number" id="inputEstimatedBudget" className="form-control" defaultValue={2300}
                       step={1}/>
            </div>
            <div className="form-group">
                <label htmlFor="inputSpentBudget">Total amount spent</label>
                <input type="number" id="inputSpentBudget" className="form-control" defaultValue={2000}
                       step={1}/>
            </div>
            <div className="form-group">
                <label htmlFor="inputEstimatedDuration">Estimated project duration</label>
                <input type="number" id="inputEstimatedDuration" className="form-control" defaultValue={20}
                       step="0.1"/>
            </div>
        </div>
        {/* /.card-body */}
    </div>
        )
    }
}

export default AddCoteForMatch;