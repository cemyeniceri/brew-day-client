import React from 'react'
import {reduxForm} from 'redux-form'
import {Button, ButtonToolbar} from "react-bootstrap"
import IngredientList from '../ingredientCommon/IngredientList'
import IngredientAddDialog from '../ingredientCommon/IngredientAddDialog';

let ShopListShowForm = (props) => {
    const {
        /* Reducers */
        selectedShopList,
        selectedIngredient,
        ingredients,
        isShownIngredientForm,

        /* Actions */
        handleDeleteShopList,

        handleCreateIngredient,
        handleEditIngredient,
        handleSaveIngredient,
        handleCancelSaveIngredient,
        handleDeleteIngredient,
    } = props;

    return (
        <div>
            { selectedShopList !== null ?
                <div>

                    <hr/>
                    <IngredientAddDialog initialValues={selectedIngredient}
                                         isShowing={isShownIngredientForm}
                                         onSubmit={handleSaveIngredient}
                                         handleCancel={handleCancelSaveIngredient}
                    />
                    <IngredientList ingredients={ingredients}
                                    handleCreateIngredient={handleCreateIngredient}
                                    handleEditIngredient={handleEditIngredient}
                                    handleDeleteIngredient={handleDeleteIngredient}
                    />

                    <br/><br/><hr/>
                    <div className="float-right">
                        <ButtonToolbar>
                            <Button bsStyle="danger" type="button" onClick={() => handleDeleteShopList()}>Delete All Shop List Content</Button>
                        </ButtonToolbar>
                    </div>
                </div> : ""
            }
        </div>
    )
};

ShopListShowForm = reduxForm({
    form: 'shopListShowForm',
    enableReinitialize: true
})(ShopListShowForm);

export default ShopListShowForm;
