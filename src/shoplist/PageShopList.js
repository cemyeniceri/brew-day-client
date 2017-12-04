import React from "react"
import {connect} from "react-redux"
import {Button, ButtonToolbar} from "react-bootstrap"
import { browserHistory } from 'react-router';
import {
    /* Shop List */
    fetchShopLists,
    fetchShopList,
    deleteShopList,
    updateShopListStart,
    createShopListStart,
    askForDeleteShopList,
    /* Ingredient */
    startUpdateShopListIngredient,
    startCreateShopListIngredient,
    deleteSelectedShopListIngredient,
    askForDeleteShopListIngredient,
    updateShopListIngredient,
    createShopListIngredient,
    cancelFromSaveShopListIngredient,
    /* All */
    cancelFromDelete
} from "./actions"
import ConfirmationForm from '../components/confirmationDialog/ConfirmationDialogForm'
import SelectShopListComboBox from './subForms/SelectShopListComboBox'
import ShopListShowForm from './ShopListShowForm';
import {TYPE_SHOP_LIST, TYPE_INGREDIENT} from "../constants";

class PageShopList extends React.Component {
    componentWillMount() {
        this.props.fetchShopLists();
    };

    /* ShopList Operations */
    onSelectShopList(selectedShopList) {
        this.props.fetchShopList(selectedShopList.value);
    };

    onCreateShopListStart = () => {
        this.props.createShopListStart();
        browserHistory.push('/shop-lists/new');
    };

    onUpdateSelectedShopListStart = () => {
        this.props.updateShopListStart();
        browserHistory.push('/shop-lists/' + this.props.selectedShopList.objId);
    };

    onAskForDeleteSelectedShopList = (objId) => {
        this.props.askForDeleteShopList(objId);
    };

    /* Ingredient Operations */
    onCreateShopListIngredient = () => {
        this.props.startCreateShopListIngredient();
    };

    onEditShopListIngredient = (ingredient) => {
        this.props.startUpdateShopListIngredient(ingredient);
    };

    onSaveShopListIngredient = (ingredient) => {
        if(this.props.isIngredientUpdate) {
            this.props.updateShopListIngredient(this.props.selectedShopList.objId, ingredient);
        } else {
            this.props.createShopListIngredient(this.props.selectedShopList.objId, ingredient);
        }
    };

    onCancelSaveShopListIngredient = () => {
        this.props.cancelFromSaveShopListIngredient();
    };

    onDeleteShopListIngredient = (objId) => {
        this.props.askForDeleteShopListIngredient(objId);
    };


    /* ALL */
    onDeleteSelectedItem = (confirmationParameters) => {
        if(confirmationParameters.type === TYPE_SHOP_LIST)
            this.props.deleteShopList(this.props.selectedShopList.objId);
        else if(confirmationParameters.type === TYPE_INGREDIENT)
            this.props.deleteSelectedShopListIngredient(this.props.selectedShopList.objId, confirmationParameters.objId);
    };

    onHideModal = () => {
        this.props.cancelFromDelete();
    };

    render() {
        return (
            <div>
                <div id="page-title">
                    <h2>Shop Lists</h2>
                </div>
                <ConfirmationForm onConfirm={this.onDeleteSelectedItem.bind(this)} onCancel={this.onHideModal.bind(this)} />
                <div className="example-box-wrapper">
                    <div className="row">
                        <ButtonToolbar className="float-right">
                            <Button bsStyle="warning" type="button" disabled={!this.props.selectedShopList} onClick={() => this.onUpdateSelectedShopListStart()}>Edit</Button>
                            <Button bsStyle="primary" type="button" onClick={() => this.onCreateShopListStart()}>Create</Button>
                        </ButtonToolbar>
                    </div>
                </div>
                <div className="panel">
                    <div className="panel-body">
                        <SelectShopListComboBox initialValues={this.props.selectedShopList ? {shopList: this.props.selectedShopList.objId} : {shopList: null}}
                                                shopLists={this.props.shopLists}
                                                handleSelectShopList={this.onSelectShopList.bind(this)}
                        />

                        <ShopListShowForm selectedShopList={this.props.selectedShopList}
                                          ingredients={this.props.ingredients}
                                          isShownIngredientForm={this.props.isShownIngredientForm}
                                          handleDeleteShopList={this.onAskForDeleteSelectedShopList.bind(this)}

                                          selectedIngredient={this.props.selectedIngredient}
                                          handleCreateIngredient={this.onCreateShopListIngredient.bind(this)}
                                          handleEditIngredient={this.onEditShopListIngredient.bind(this)}
                                          handleSaveIngredient={this.onSaveShopListIngredient.bind(this)}
                                          handleCancelSaveIngredient={this.onCancelSaveShopListIngredient.bind(this)}
                                          handleDeleteIngredient={this.onDeleteShopListIngredient.bind(this)}
                        />
                    </div>
                </div>
            </div>

        )
    }
}

const mapStateToProps = ({shopListReducer: {initialValues, shopLists, selectedShopList, ingredients, selectedIngredient, isIngredientUpdate, isShownIngredientForm}}) => ({
    /* Shop List */
    initialValues,
    shopLists,
    selectedShopList,
    /* Ingredient */
    ingredients,
    selectedIngredient,
    isIngredientUpdate,
    isShownIngredientForm,
});

export default connect(
    mapStateToProps,
    {
        /* Shop List */
        fetchShopLists,
        fetchShopList,
        deleteShopList,
        updateShopListStart,
        createShopListStart,
        askForDeleteShopList,
        /* Ingredient */
        startUpdateShopListIngredient,
        startCreateShopListIngredient,
        deleteSelectedShopListIngredient,
        askForDeleteShopListIngredient,
        updateShopListIngredient,
        createShopListIngredient,
        cancelFromSaveShopListIngredient,
        /* All */
        cancelFromDelete
    }
)(PageShopList)
