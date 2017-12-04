import React from "react"
import {connect} from "react-redux"
import {browserHistory} from "react-router"
import {
    fetchRecipeForRecipeUpdate,
    createRecipe,
    updateRecipe
} from "./actions"
import {CREATE_ITEM_ROUTE} from "../constants/index";
import RecipeAddForm from "./subForms/RecipeAddForm";

class PageRecipeAdd extends React.Component {
    componentWillMount() {
        if(this.props.recipeObjId !== CREATE_ITEM_ROUTE) {
            this.props.fetchRecipeForRecipeUpdate(this.props.recipeObjId);
        }
    };

    handleSubmit = (recipe) => {
        if(this.props.isRecipeUpdate) {
            this.props.updateRecipe(recipe);
        } else {
            this.props.createRecipe(recipe);
        }
    };

    handleCancel = () => {
        browserHistory.push('/recipes');
    };

    render() {
        return (
            <div>
                <div id="page-title">
                    <h2>Recipes</h2>
                </div>

                <RecipeAddForm initialValues={this.props.initialValues}
                               onSubmit={this.handleSubmit.bind(this)}
                               onCancel={this.handleCancel.bind(this)}
                />
            </div>
        )
    }
}

const mapStateToProps = ({recipeReducer:{isRecipeUpdate, initialValues}}, {params:{recipeObjId}}) => ({
    recipeObjId,
    isRecipeUpdate,
    initialValues
});

export default connect(
    mapStateToProps,
    {
        fetchRecipeForRecipeUpdate,
        createRecipe,
        updateRecipe
    }
)(PageRecipeAdd)
