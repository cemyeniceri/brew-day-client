import React from "react"
import { Modal } from "react-bootstrap"
import IngredientAddForm from '../../ingredient/IngredientAddForm'

const RecipeIngredientAddForm = (props) => {

    const {isShowing, onSubmit, handleCancel, initialValues} = props;

    return (
        <Modal bsSize="large" show={isShowing} onHide={() => handleCancel()}>
            <Modal.Header closeButton>
                <Modal.Title componentClass='h3'>
                    INGREDIENT
                </Modal.Title>
            </Modal.Header>
            <IngredientAddForm
                initialValues={initialValues}
                onSubmit={onSubmit}
                onCancel={handleCancel}
            />
        </Modal>
    )
};

export default RecipeIngredientAddForm;