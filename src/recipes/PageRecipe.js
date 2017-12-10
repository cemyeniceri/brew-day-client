import React from "react"
import {connect} from "react-redux"
import {Button, ButtonToolbar} from "react-bootstrap"
import { browserHistory } from 'react-router';
import {
    /* Recipe */
    fetchRecipes,
    fetchRecipe,
    deleteRecipe,
    updateRecipeStart,
    createRecipeStart,
    askForDeleteRecipe,
    /*Check Ingredients and Create Shop List*/
    checkForIngredientAvailability,
    openCreateShopListDialog,
    deleteIngredientFromRecipeShopList,
    saveRecipeShopList,
    cancelFromCreateShopList,
    /* Ingredient */
    startUpdateRecipeIngredient,
    startCreateRecipeIngredient,
    deleteSelectedRecipeIngredient,
    askForDeleteRecipeIngredient,
    updateRecipeIngredient,
    createRecipeIngredient,
    cancelFromSaveRecipeIngredient,
    /* Comment */
    startUpdateRecipeComment,
    startCreateRecipeComment,
    deleteSelectedRecipeComment,
    askForDeleteRecipeComment,
    updateRecipeComment,
    createRecipeComment,
    cancelFromSaveRecipeComment,
    /* All */
    cancelFromDelete
} from "./actions"
import ConfirmationForm from '../components/confirmationDialog/ConfirmationDialogForm'
import SelectRecipeComboBox from './subForms/SelectRecipeComboBox'
import RecipeShowForm from './RecipeShowForm';
import CreateShopListFromRecipeDialog from './CreateShopListFromRecipeDialog'
import {TYPE_RECIPE, TYPE_INGREDIENT, TYPE_COMMENT} from "../constants";

class PageRecipe extends React.Component {
    componentWillMount() {
        this.props.fetchRecipes();
    };

    /* Recipe Operations */
    onSelectRecipe(selectedRecipe) {
        this.props.fetchRecipe(selectedRecipe.value);
    };

    onCreateRecipeStart = () => {
        this.props.createRecipeStart();
        browserHistory.push('/recipes/new');
    };

    onUpdateSelectedRecipeStart = () => {
        this.props.updateRecipeStart();
        browserHistory.push('/recipes/' + this.props.selectedRecipe.objId);
    };

    onAskForDeleteSelectedRecipe = (objId) => {
        this.props.askForDeleteRecipe(objId);
    };

    /* Available Ingredients Check And Create ShopList From Recipe Dialog Methods */
    onAvailabilityControl() {
        this.props.checkForIngredientAvailability(this.props.selectedRecipe.objId);
    };

    onOpenCreateShopListFromRecipeDialog = () => {
        this.props.openCreateShopListDialog();
    };

    onSaveShopListFromRecipe = (formValues) => {
        this.props.saveRecipeShopList(formValues, this.props.shopListFromRecipe);
    };

    onCancelFromCreateShopListFromRecipe = () => {
        this.props.cancelFromCreateShopList();
    };


    /* Ingredient Operations */
    onCreateRecipeIngredient = () => {
        this.props.startCreateRecipeIngredient();
    };

    onEditRecipeIngredient = (ingredient) => {
        this.props.startUpdateRecipeIngredient(ingredient);
    };

    onSaveRecipeIngredient = (ingredient) => {
        if(this.props.isIngredientUpdate) {
            this.props.updateRecipeIngredient(this.props.selectedRecipe.objId, ingredient);
        } else {
            this.props.createRecipeIngredient(this.props.selectedRecipe.objId, ingredient);
        }
    };

    onCancelSaveRecipeIngredient = () => {
        this.props.cancelFromSaveRecipeIngredient();
    };

    onDeleteRecipeIngredient = (objId) => {
        this.props.askForDeleteRecipeIngredient(objId);
    };


    /* Comment Operations */
    onCreateRecipeComment = () => {
        this.props.startCreateRecipeComment();
    };

    onEditRecipeComment = (comment) => {
        this.props.startUpdateRecipeComment(comment);
    };

    onSaveRecipeComment = (comment) => {
        if(this.props.isCommentUpdate) {
            this.props.updateRecipeComment(this.props.selectedRecipe.objId, comment)
        } else {
            this.props.createRecipeComment(this.props.selectedRecipe.objId, comment)
        }
    };

    onCancelSaveRecipeComment = () => {
        this.props.cancelFromSaveRecipeComment();
    };

    onDeleteRecipeComment = (objId) => {
        this.props.askForDeleteRecipeComment(objId)
    };


    /* ALL */
    onDeleteSelectedItem = (confirmationParameters) => {
        if(confirmationParameters.type === TYPE_RECIPE)
            this.props.deleteRecipe(this.props.selectedRecipe.objId);
        else if(confirmationParameters.type === TYPE_INGREDIENT)
            this.props.deleteSelectedRecipeIngredient(this.props.selectedRecipe.objId, confirmationParameters.objId);
        else if(confirmationParameters.type === TYPE_COMMENT){
            this.props.deleteSelectedRecipeComment(this.props.selectedRecipe.objId, confirmationParameters.objId);
        }

    };

    onHideModal = () => {
        this.props.cancelFromDelete();
    };

    render() {
        return (
            <div>
                <div id="page-title">
                    <h2>Recipes</h2>
                </div>
                <ConfirmationForm onConfirm={this.onDeleteSelectedItem.bind(this)} onCancel={this.onHideModal.bind(this)} />
                <div className="example-box-wrapper">
                    <div className="row">
                        <ButtonToolbar className="float-right">
                            <Button bsStyle="warning" type="button" disabled={!this.props.selectedRecipe} onClick={() => this.onUpdateSelectedRecipeStart()}>Edit</Button>
                            <Button bsStyle="primary" type="button" onClick={() => this.onCreateRecipeStart()}>Create</Button>
                        </ButtonToolbar>
                    </div>
                </div>
                <div className="panel">
                    <div className="panel-body">
                        <SelectRecipeComboBox initialValues={this.props.selectedRecipe ? {recipe: this.props.selectedRecipe.objId} : {recipe: null}}
                                              recipes={this.props.recipes}
                                              selectedRecipe={this.props.selectedRecipe}
                                              handleSelectRecipe={this.onSelectRecipe.bind(this)}
                                              handleCheckAvailability={this.onAvailabilityControl.bind(this)}
                        />

                        <RecipeShowForm selectedRecipe={this.props.selectedRecipe}
                                        ingredients={this.props.ingredients}
                                        comments={this.props.comments}
                                        isShownIngredientForm={this.props.isShownIngredientForm}
                                        isShownCommentForm={this.props.isShownCommentForm}
                                        handleDeleteRecipe={this.onAskForDeleteSelectedRecipe.bind(this)}
                                        handleCreateShopListFromRecipe={this.onOpenCreateShopListFromRecipeDialog.bind(this)}

                                        selectedIngredient={this.props.selectedIngredient}
                                        handleCreateIngredient={this.onCreateRecipeIngredient.bind(this)}
                                        handleEditIngredient={this.onEditRecipeIngredient.bind(this)}
                                        handleSaveIngredient={this.onSaveRecipeIngredient.bind(this)}
                                        handleCancelSaveIngredient={this.onCancelSaveRecipeIngredient.bind(this)}
                                        handleDeleteIngredient={this.onDeleteRecipeIngredient.bind(this)}
                                        availableIngredients={this.props.availableIngredients}
                                        isShopListDoable={this.props.isShopListDoable}

                                        selectedComment={this.props.selectedComment}
                                        handleCreateComment={this.onCreateRecipeComment.bind(this)}
                                        handleEditComment={this.onEditRecipeComment.bind(this)}
                                        handleSaveComment={this.onSaveRecipeComment.bind(this)}
                                        handleCancelSaveComment={this.onCancelSaveRecipeComment.bind(this)}
                                        handleDeleteComment={this.onDeleteRecipeComment.bind(this)}
                        />

                        <CreateShopListFromRecipeDialog initialValues={this.props.shopListDialogInitValues}
                                                        isShowing={this.props.isShownCreateRecipeDialog}
                                                        shopList={this.props.shopListFromRecipe}
                                                        handleCancel={this.onCancelFromCreateShopListFromRecipe.bind(this)}
                                                        onSubmit={this.onSaveShopListFromRecipe.bind(this)}
                                                        createIngredient={(ingredient) => this.props.createIngredientForRecipeShopList(ingredient)}
                                                        deleteIngredient={(objId) => this.props.deleteIngredientFromRecipeShopList(objId)}

                        />
                    </div>
                </div>
            </div>

        )
    }
}

const mapStateToProps = ({recipeReducer:{recipes, selectedRecipe, availableIngredients, shopListFromRecipe, shopListDialogInitValues, isShopListDoable, isShownCreateRecipeDialog, ingredients, selectedIngredient, isIngredientUpdate, isShownIngredientForm, comments, selectedComment, isCommentUpdate, isShownCommentForm}}) => ({
    /* Recipe */
    recipes,
    selectedRecipe,
    /* Check Ingredients and Create Shop List */
    availableIngredients,
    shopListFromRecipe,
    shopListDialogInitValues,
    isShopListDoable,
    isShownCreateRecipeDialog,
    /* Ingredient */
    ingredients,
    selectedIngredient,
    isIngredientUpdate,
    isShownIngredientForm,
    /* Comment */
    comments,
    selectedComment,
    isCommentUpdate,
    isShownCommentForm
});

export default connect(
    mapStateToProps,
    {
        /* Recipe */
        fetchRecipes,
        fetchRecipe,
        deleteRecipe,
        updateRecipeStart,
        createRecipeStart,
        askForDeleteRecipe,
        /*Check Ingredients and Create Shop List*/
        checkForIngredientAvailability,
        openCreateShopListDialog,
        deleteIngredientFromRecipeShopList,
        saveRecipeShopList,
        cancelFromCreateShopList,
        /* Ingredient */
        startUpdateRecipeIngredient,
        startCreateRecipeIngredient,
        deleteSelectedRecipeIngredient,
        askForDeleteRecipeIngredient,
        updateRecipeIngredient,
        createRecipeIngredient,
        cancelFromSaveRecipeIngredient,
        /* Comment */
        startUpdateRecipeComment,
        startCreateRecipeComment,
        deleteSelectedRecipeComment,
        askForDeleteRecipeComment,
        updateRecipeComment,
        createRecipeComment,
        cancelFromSaveRecipeComment,
        /* All */
        cancelFromDelete
    }
)(PageRecipe)
