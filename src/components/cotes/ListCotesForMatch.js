import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import FormAccountAction from "../profile/FormAccountAction";
import UpdateCote from "./UpdateCote";

class ListCotesForMatch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cotes: null
        }
    }

    async componentDidMount() {
        await this.setState({
            cotes: this.props.data,
        });
    }

     async updateLineAfterUpdate(index, newCote){
         await this.props.updateLineAfterUpdateParent(index, newCote);
    }


    render() {
        return (
            <div className="card card-info">
                <div className="card-header">

                    <h3 className="card-title">Cotes du match ({this.props.data.length}/6 )</h3>
                    <div className="card-tools">
                        <button type="button" className="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip"
                                title="Collapse">
                            <i className="fas fa-minus"/></button>
                    </div>
                </div>
                <div className="card-body p-0" style={{display: 'block'}}>
                    <span>Assurez vous d'avoir les 6 cotes pour ce match ...</span>
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
                        this.props.data.map((item, index) => {
                            return <tr>
                                <th>{item.type.label}</th>
                                <th>{item.cote}</th>
                                <th>
                                  <button data-toggle="modal"
                                            data-target={"#modal-cote-"+item._id} className="btn btn-warning"
                                            style={{marginRight: 12}}>
                                        <i className="fa fa-pencil-ruler"/> <b>Modifier</b>
                                    </button>
                                    <div className="modal fade" id={"modal-cote-"+item._id}>
                                        <UpdateCote data={item} index={index} updateLineAfterUpdate={(i, newCote)=>this.updateLineAfterUpdate(i, newCote)}/>
                                    </div>
                                </th>
                            </tr>
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListCotesForMatch;