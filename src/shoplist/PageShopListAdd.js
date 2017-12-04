import React from "react"
import {connect} from "react-redux"
import {browserHistory} from "react-router"
import {
    fetchShopListForShopListUpdate,
    createShopList,
    updateShopList
} from "./actions"
import {CREATE_ITEM_ROUTE} from "../constants/index";
import ShopListAddForm from "./subForms/ShopListAddForm";

class PageShopListAdd extends React.Component {
    componentWillMount() {
        if(this.props.shopObjId !== CREATE_ITEM_ROUTE) {
            this.props.fetchShopListForShopListUpdate(this.props.shopObjId);
        }
    };

    handleSubmit = (shopList) => {
        if(this.props.isShopListUpdate) {
            this.props.updateShopList(shopList);
        } else {
            this.props.createShopList(shopList);
        }
    };

    handleCancel = () => {
        browserHistory.push('/shop-lists');
    };

    render() {
        return (
            <div>
                <div id="page-title">
                    <h2>Shop Lists</h2>
                </div>

                <ShopListAddForm initialValues={this.props.initialValues}
                                 onSubmit={this.handleSubmit.bind(this)}
                                 onCancel={this.handleCancel.bind(this)}
                />
            </div>
        )
    }
}

const mapStateToProps = ({shopListReducer:{isShopListUpdate, initialValues}}, {params:{shopObjId}}) => ({
    shopObjId,
    isShopListUpdate,
    initialValues
});

export default connect(
    mapStateToProps,
    {
        fetchShopListForShopListUpdate,
        createShopList,
        updateShopList
    }
)(PageShopListAdd)
