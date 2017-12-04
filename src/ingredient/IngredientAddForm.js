import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {Button, ButtonToolbar} from "react-bootstrap"
import {customSelect, renderField} from "../common/fields"

import {VALUE_IS_REQUIRED, VALUE_IS_INVALID} from "../constants/message";

const validate = values => {
    const errors = {};
    if (!values.type) {
        errors.type = VALUE_IS_REQUIRED;
    }
    if (!values.name) {
        errors.name = VALUE_IS_REQUIRED;
    }
    if (!values.unit) {
        errors.unit = VALUE_IS_REQUIRED;
    }
    if (!values.amount) {
        errors.amount = VALUE_IS_REQUIRED;
    } else {
        const isNumber = (values.amount != null) && (values.amount.match(/^-?\d*(\.\d+)?$/));
        if(!isNumber) {
            errors.amount = VALUE_IS_INVALID;
        }
    }

    return errors;
};

let IngredientAddForm = (props) => {
    const {handleSubmit, onCancel} = props;

    const ingredientTypes = [
        {value: 'Malts',     label: 'Malts'     },
        {value: 'Hops',      label: 'Hops'      },
        {value: 'Yeasts',    label: 'Yeasts'    },
        {value: 'Sugars',    label: 'Sugars'    },
        {value: 'Additives', label: 'Additives' }
    ];

    const ingredientUnit = [
        {value: 'kg',    label: 'kg'     },
        {value: 'lt',    label: 'lt'     },
        {value: 'count', label: 'count'  }
    ];

    return (
        <div className="panel">
            <div className="panel-body">
                <h3 className="title-hero">
                    Create / Edit Ingredient
                </h3>
                <form className="form-horizontal bordered-row" onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-6">
                            <Field name="type"   type="text" component={customSelect} options={ingredientTypes} label="* Type" placeHolder="Type"/>
                            <Field name="name"   type="text" component={renderField} label="* Name" placeHolder="Name"/>
                            <Field name="unit"   type="text" component={customSelect} options={ingredientUnit} label="* Unit" placeHolder="Unit"/>
                            <Field name="amount" type="text" component={renderField} label="* Amount" placeHolder="Amount"/>
                        </div>
                    </div>
                    <div className="button-pane">
                        <ButtonToolbar>
                            <Button bsStyle="danger"  type="button" onClick={onCancel}>Cancel</Button>
                            <Button bsStyle="success" type="submit">Submit</Button>
                        </ButtonToolbar>
                    </div>
                </form>
            </div>
        </div>
    )
};

IngredientAddForm = reduxForm({
    form: 'ingredientAddForm',
    validate,
    enableReinitialize: true
})(IngredientAddForm);

export default IngredientAddForm;
