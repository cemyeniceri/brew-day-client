import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {Button, ButtonToolbar} from "react-bootstrap"
import {renderField} from "../../common/fields"
import {VALUE_IS_REQUIRED} from "../../constants/message";

const validate = values => {
    const errors = {};
    if (!values.name) {
        errors.name = VALUE_IS_REQUIRED;
    }
    return errors;
};

let ShopListAddForm = (props) => {
    const {handleSubmit, onCancel} = props;

    return (
        <div className="panel">
            <div className="panel-body">
                <h3 className="title-hero">
                    Create / Edit Shop List
                </h3>
                <form className="form-horizontal bordered-row" onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-6">
                            <Field name="name"   type="text" component={renderField} label="* Name" placeHolder="Name"/>
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

ShopListAddForm = reduxForm({
    form: 'shopListAddForm',
    validate,
    enableReinitialize: true
})(ShopListAddForm);

export default ShopListAddForm;
