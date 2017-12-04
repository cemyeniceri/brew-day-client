import React from "react"
import {connect} from "react-redux"
import {Link, browserHistory} from 'react-router'
import {
    fetchIngredients,
    deleteIngredient,
    createIngredientStart,
    updateIngredientStart,
    cancelFromDelete,
    askForDelete
} from "./actions"
import IngredientsList from "../ingredientCommon/IngredientList"
import ConfirmationForm from "../components/confirmationDialog/ConfirmationDialogForm"

class PageParameter extends React.Component {
    componentWillMount() {
        this.props.fetchIngredients();
    };

    onDelete = (objId) => {
        this.props.deleteIngredient(objId);
    };

    onCreate = () => {
        this.props.createIngredientStart();
    };

    onUpdate = (ingredient) => {
        this.props.updateIngredientStart();
        browserHistory.push('/ingredients/' + ingredient.objId);
    };

    onAskForDelete = (objId) => {
        this.props.askForDelete(objId);
    };

    onHideModal = () => {
        this.props.cancelFromDelete();
    };

    render() {
        return (
            <div>
                <div id="page-title">
                    <h2>Ingredients</h2>
                </div>
                <ConfirmationForm onConfirm={this.onDelete.bind(this)} onCancel={this.onHideModal.bind(this)} />
                <div className="row">
                    <div className="col-md-12">
                        <Link to={"/ingredients/new"} className="btn btn-primary float-right" onClick={() => this.onCreate()}>Create</Link>
                    </div>
                </div>
                <br/>
                <div className="panel">
                    <div className="panel-body">
                        <IngredientsList ingredients={this.props.ingredients}
                                         handleEditIngredient={this.onUpdate.bind(this)}
                                         handleDeleteIngredient={this.onAskForDelete.bind(this)}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ingredientReducer:{ingredients}}) => ({
    ingredients
});

export default connect(
    mapStateToProps,
    {
        fetchIngredients,
        deleteIngredient,
        createIngredientStart,
        updateIngredientStart,
        cancelFromDelete,
        askForDelete
    }
)(PageParameter)
