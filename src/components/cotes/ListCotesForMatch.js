import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class ListCotesForMatch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cotes: []
        }
    }

    async componentDidMount() {
        await this.setState({
            cotes: this.props.data.cotes
        })
    }

    render() {
        return (
            <div className="card card-info">
                <div className="card-header">
                    <h3 className="card-title">Files</h3>
                    <div className="card-tools">
                        <button type="button" className="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip"
                                title="Collapse">
                            <i className="fas fa-minus"/></button>
                    </div>
                </div>
                <div className="card-body p-0" style={{display: 'block'}}>

                    {this.state.cotes.length > 1 && this.state.cotes.length !== undefined}?
                        <table className="table">
                            <thead>
                            <tr>
                                <th>Type de Paris</th>
                                <th>Cote</th>
                                <th/>
                            </tr>
                            </thead>
                            <tbody>
                            {console.log(this.state.cotes)}
                            </tbody>
                        </table> :
                    <h1>Pas de côtes pour ce match ...</h1>
                </div>
                {/* /.card-body */}
            </div>

        )
    }
}

export default ListCotesForMatch;