import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class ListCotesForMatch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cotes: null
        }
    }

    async componentDidMount() {
        console.log("enfant2");

        await this.setState({
            cotes: this.props.data,
        });
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

                    <table className="table">

                        <thead>
                        <tr>
                            <th>Type de Paris</th>
                            <th>Cote</th>
                            <th/>
                        </tr>
                        </thead>
                        <tbody>
                        {this.props.data !== null &&
                        this.props.data.map(item => {
                            return <tr>
                                <th>{item.cote}</th>
                                <th>{item.cote}</th>
                                <th><a className="btn btn-warning btn-sm">Modifier</a></th>
                            </tr>
                        })}
                        </tbody>
                    </table>
                </div>
                {/* /.card-body */}
            </div>

        )
    }
}

export default ListCotesForMatch;