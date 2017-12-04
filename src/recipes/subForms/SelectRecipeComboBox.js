import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {customSelect} from "../../common/fields"
import {Button} from "react-bootstrap"

let SelectRecipeComboBox = (props) => {
    const { recipes, selectedRecipe,  handleSelectRecipe, handleCheckAvailability } = props;

    return (
        <div className="row">
            <div className="col-md-6">
                <Field name="recipe" type="text" component={customSelect} options={recipes} label="* Recipe" placeHolder="Recipe" onChangeFunction={handleSelectRecipe}/>
            </div>
            <div className="col-md-6">
                <Button bsStyle="info" className="float-right" type="button" disabled={!selectedRecipe} onClick={() => handleCheckAvailability()}>Check Ingredients</Button>
            </div>
        </div>
    )
};

SelectRecipeComboBox = reduxForm({
    form: 'selectRecipeComboBox',
    enableReinitialize: true
})(SelectRecipeComboBox);

export default SelectRecipeComboBox;
