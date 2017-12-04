import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {customSelect} from "../../common/fields"

let SelectShopListComboBox = (props) => {
    const { shopLists, handleSelectShopList } = props;

    return (
        <div className="row">
            <div className="col-md-6">
                <Field name="shopList" type="text" component={customSelect} options={shopLists} label="* Shop List" placeHolder="Shop List" onChangeFunction={handleSelectShopList}/>
            </div>
        </div>
    )
};

SelectShopListComboBox = reduxForm({
    form: 'selectShopListComboBox',
    enableReinitialize: true
})(SelectShopListComboBox);

export default SelectShopListComboBox;
