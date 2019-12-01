import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class ListCotesForMatch extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log(this.props);
    }

    render() {
        return (
            <div className="card card-info">
                <div className="card-header">
                    <h3 className="card-title">Files</h3>
                    <div className="card-tools">
                        <button type="button" className="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
                            <i className="fas fa-minus" /></button>
                    </div>
                </div>
                <div className="card-body p-0" style={{display: 'block'}}>
                    <table className="table">
                        <thead>
                        <tr>
                            <th>File Name</th>
                            <th>File Size</th>
                            <th />
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Functional-requirements.docx</td>
                            <td>49.8005 kb</td>
                            <td className="text-right py-0 align-middle">
                                <div className="btn-group btn-group-sm">
                                    <a href="#" className="btn btn-info"><i className="fas fa-eye" /></a>
                                    <a href="#" className="btn btn-danger"><i className="fas fa-trash" /></a>
                                </div>
                            </td>
                        </tr><tr>
                            <td>UAT.pdf</td>
                            <td>28.4883 kb</td>
                            <td className="text-right py-0 align-middle">
                                <div className="btn-group btn-group-sm">
                                    <a href="#" className="btn btn-info"><i className="fas fa-eye" /></a>
                                    <a href="#" className="btn btn-danger"><i className="fas fa-trash" /></a>
                                </div>
                            </td>
                        </tr><tr>
                            <td>Email-from-flatbal.mln</td>
                            <td>57.9003 kb</td>
                            <td className="text-right py-0 align-middle">
                                <div className="btn-group btn-group-sm">
                                    <a href="#" className="btn btn-info"><i className="fas fa-eye" /></a>
                                    <a href="#" className="btn btn-danger"><i className="fas fa-trash" /></a>
                                </div>
                            </td>
                        </tr><tr>
                            <td>Logo.png</td>
                            <td>50.5190 kb</td>
                            <td className="text-right py-0 align-middle">
                                <div className="btn-group btn-group-sm">
                                    <a href="#" className="btn btn-info"><i className="fas fa-eye" /></a>
                                    <a href="#" className="btn btn-danger"><i className="fas fa-trash" /></a>
                                </div>
                            </td>
                        </tr><tr>
                            <td>Contract-10_12_2014.docx</td>
                            <td>44.9715 kb</td>
                            <td className="text-right py-0 align-middle">
                                <div className="btn-group btn-group-sm">
                                    <a href="#" className="btn btn-info"><i className="fas fa-eye" /></a>
                                    <a href="#" className="btn btn-danger"><i className="fas fa-trash" /></a>
                                </div>
                            </td>
                        </tr></tbody>
                    </table>
                </div>
                {/* /.card-body */}
            </div>
        )
    }
}

export default ListCotesForMatch;