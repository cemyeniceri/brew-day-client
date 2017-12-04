import React from 'react'
import {reduxForm} from 'redux-form'
import {Button, ButtonToolbar} from "react-bootstrap"
import RecipeDescriptionForm from './subForms/RecipeDescriptionForm';
import RecipeIngredientList from './subForms/RecipeIngredientList';
import RecipeIngredientAddForm from './subForms/RecipeIngredientAddForm';
import RecipeCommentList from './subForms/RecipeCommentList';
import RecipeCommentAddForm from './subForms/RecipeCommentAddForm'

let RecipeShowForm = (props) => {
    const {
        /* Reducers */
        selectedRecipe,
        selectedIngredient,
        selectedComment,
        ingredients,
        comments,
        isShownIngredientForm,
        isShownCommentForm,

        /* Actions */
        handleDeleteRecipe,

        handleCreateIngredient,
        handleEditIngredient,
        handleSaveIngredient,
        handleCancelSaveIngredient,
        handleDeleteIngredient,

        handleCreateComment,
        handleEditComment,
        handleSaveComment,
        handleCancelSaveComment,
        handleDeleteComment
    } = props;

    return (
        <div>
            { selectedRecipe !== null ?
                <div>
                    <hr/>
                    <RecipeDescriptionForm initialValues = {{description: selectedRecipe.detail}}
                                           readOnly={true}
                    />

                    <hr/>
                    <RecipeIngredientAddForm initialValues={selectedIngredient}
                                             isShowing={isShownIngredientForm}
                                             onSubmit={handleSaveIngredient}
                                             handleCancel={handleCancelSaveIngredient}
                    />
                    <RecipeIngredientList ingredients={ingredients}
                                          handleCreateIngredient={handleCreateIngredient}
                                          handleEditIngredient={handleEditIngredient}
                                          handleDeleteIngredient={handleDeleteIngredient}
                    />

                    <br/><hr/>
                    <RecipeCommentAddForm initialValues={selectedComment}
                                          isShowing={isShownCommentForm}
                                          onSubmit={handleSaveComment}
                                          onCancel={handleCancelSaveComment}
                    />
                    <RecipeCommentList comments={comments}
                                       handleCreateComment={handleCreateComment}
                                       handleEditComment={handleEditComment}
                                       handleDeleteComment={handleDeleteComment}
                    />

                    <br/><br/><hr/>
                    <div className="float-right">
                        <ButtonToolbar>
                            <Button bsStyle="danger" type="button" onClick={() => handleDeleteRecipe()}>Delete All Recipe Content</Button>
                        </ButtonToolbar>
                    </div>
                </div> : ""
            }
        </div>
    )
};

RecipeShowForm = reduxForm({
    form: 'recipeShowForm',
    enableReinitialize: true
})(RecipeShowForm);

export default RecipeShowForm;
