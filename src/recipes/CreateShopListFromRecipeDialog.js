import React, { Component } from "react"
import { Modal } from "react-bootstrap"
import { Button, ButtonToolbar } from "react-bootstrap"
import {reduxForm, Field} from "redux-form";
import {renderField} from "../common/fields";
import IngredientList from '../ingredientCommon/IngredientList'
import {VALUE_IS_INVALID, VALUE_IS_REQUIRED} from "../constants/message";

const validate = (values, props) => {
    const errors = {};

    if (!values.name) {
        errors.name = VALUE_IS_REQUIRED;
    }

    props.shopList.shopListIngredients.forEach(ingredient => {
        if(!values[ingredient.objId]) {
            errors[ingredient.objId] = VALUE_IS_REQUIRED;
        } else {
            const isNumber = (values[ingredient.objId] != null) && (values[ingredient.objId].match(/^-?\d*(\.\d+)?$/));
            if(!isNumber) {
                errors[ingredient.objId] = VALUE_IS_INVALID;
            }
        }
    });

    return errors;
};

class CreateShopListFromRecipeDialog extends Component {

    render(){
        return (
            <Modal bsSize="large" show={this.props.isShowing} onHide={this.props.handleCancel}>
                <Modal.Header closeButton>
                    <Modal.Title componentClass='h3'>
                        CREATE SHOP LIST FROM RECIPE
                    </Modal.Title>
                </Modal.Header>

                <form className="form-horizontal bordered-row" onSubmit={this.props.handleSubmit}>
                    <Modal.Body>
                        <div className="row">
                            <div className="col-md-9">
                                <Field name="name"   type="text" component={renderField} label="* Shop List Name" placeHolder="Name"/>
                            </div>
                        </div>
                        <hr/>

                        <IngredientList ingredients={this.props.shopList.shopListIngredients}
                                        handleDeleteIngredient={this.props.deleteIngredient}
                        />
                    </Modal.Body>
                    <Modal.Footer>
                        <ButtonToolbar>
                            <Button bsStyle="danger"  type="button" onClick={this.props.handleCancel}>Cancel</Button>
                            <Button bsStyle="success" type="submit">Submit</Button>
                        </ButtonToolbar>
                    </Modal.Footer>
                </form>
            </Modal>
        )
    }
}

CreateShopListFromRecipeDialog = reduxForm({
    form: 'createShopListFromRecipeDialog',
    validate,
    enableReinitialize: true
})(CreateShopListFromRecipeDialog);

export default CreateShopListFromRecipeDialog;