import React from "react"
import {connect} from "react-redux"
import {Link} from 'react-router'
import {
    fetchIngredients,
    deleteIngredient,
    createIngredientStart,
    updateIngredientStart,
    cancelFromDelete,
    askForDelete
} from "./actions"
import IngredientsList from "./IngredientList"
import ConfirmationForm from "../components/confirmationDialog/ConfirmationDialogForm"
import ingredientReducer from "./reducer";

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

    onUpdate = () => {
        this.props.updateIngredientStart();
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
                <IngredientsList ingredients={this.props.ingredients}
                                 updateIngredient={this.onUpdate.bind(this)}
                                 deleteIngredient={this.onAskForDelete.bind(this)}
                />
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
