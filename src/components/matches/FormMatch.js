import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class FormMatch extends Component {
    constructor(props) {
        super(props);


    }

    componentDidMount() {
        console.log(this.props.data);
    }

    render() {
        return (
            <div className="card card-primary"> <h1>{this.props.data.adversaire1}</h1>
                <div className="card-header">
                    <h3 className="card-title">General</h3>
                    <div className="card-tools">
                        <button type="button" className="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
                            <i className="fas fa-minus" /></button>
                    </div>
                </div>
                <div className="card-body" style={{display: 'block'}}>
                    <div className="form-group">
                        <label htmlFor="inputName">Project Name</label>
                        <input type="text" id="inputName" className="form-control" defaultValue="AdminLTE" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputDescription">Project Description</label>
                        <textarea id="inputDescription" className="form-control" rows={4} defaultValue={"Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terr."} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputStatus">Status</label>
                        <select className="form-control custom-select">
                            <option selected disabled>Select one</option>
                            <option>On Hold</option>
                            <option>Canceled</option>
                            <option selected>Success</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputClientCompany">Client Company</label>
                        <input type="text" id="inputClientCompany" className="form-control" defaultValue="Deveint Inc" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputProjectLeader">Project Leader</label>
                        <input type="text" id="inputProjectLeader" className="form-control" defaultValue="Tony Chicken" />
                    </div>
                </div>
                {/* /.card-body */}
            </div>

        )
    }
}

export default FormMatch;