import React from "react"
import {connect} from "react-redux"
import {browserHistory} from "react-router"
import {
    createIngredient,
    updateIngredient,
    fetchIngredient
} from "./actions"
import IngredientAddForm from "./IngredientAddForm"
import {CREATE_ITEM_ROUTE} from "../constants/index";

class PageParameterAdd extends React.Component {
    componentWillMount() {

        if(this.props.ingredientObjId !== CREATE_ITEM_ROUTE) {
            this.props.fetchIngredient(this.props.ingredientObjId);
        }
    };

    handleSubmit = (ingredient) => {
        if(this.props.isUpdate) {
            this.props.createIngredient(ingredient);
        } else {
            this.props.updateIngredient(ingredient);
        }
    };

    handleCancel = () => {
        browserHistory.push('/ingredients');
    };

    render() {
        return (
            <div>
                <div id="page-title">
                    <h2>Ingredients</h2>
                </div>
                <IngredientAddForm initialValues={this.props.initialValues}
                                   onSubmit={this.handleSubmit.bind(this)}
                                   onCancel={this.handleCancel.bind(this)}
                />
            </div>
        )
    }
}

const mapStateToProps = ({ingredientReducer:{isUpdate, initialValues}}, {params:{ingredientObjId}}) => ({
    ingredientObjId,
    isUpdate,
    initialValues
});

export default connect(
    mapStateToProps,
    {
        createIngredient,
        updateIngredient,
        fetchIngredient
    }
)(PageParameterAdd)
