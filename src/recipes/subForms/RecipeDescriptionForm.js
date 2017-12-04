import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {renderTextArea} from "../../common/fields";

let RecipeDescriptionForm = (props) => {
    const { readOnly } = props;

    return (
        <div>
            <h3 className="title-hero">
                Description
            </h3>
            <div className="row">
                <div className="col-md-12">
                    <Field name="description" type="text" component={renderTextArea} label="* Description" placeholder="Description" readOnly={readOnly}/>
                </div>
            </div>
        </div>
    )
};

RecipeDescriptionForm = reduxForm({
    form: 'recipeDescriptionForm',
    enableReinitialize: true
})(RecipeDescriptionForm);

export default RecipeDescriptionForm;
