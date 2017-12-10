import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {customSelect} from "../../common/fields"
import {Button} from "react-bootstrap"

let SelectShopListComboBox = (props) => {
    const { shopLists, handleSelectShopList, selectedShopList, handleDoneShopList} = props;

    return (
        <div className="row">
            <div className="col-md-6">
                <Field name="shopList" type="text" component={customSelect} options={shopLists} label="* Shop List" placeHolder="Shop List" onChangeFunction={handleSelectShopList}/>
            </div>
            <Button bsStyle="info" className="float-right" type="button" disabled={!selectedShopList} onClick={() => handleDoneShopList()}>Complete Shop List</Button>
        </div>
    )
};

SelectShopListComboBox = reduxForm({
    form: 'selectShopListComboBox',
    enableReinitialize: true
})(SelectShopListComboBox);

export default SelectShopListComboBox;
