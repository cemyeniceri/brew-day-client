import React from "react"
import {connect} from "react-redux"
import {
    fetchPrincipals,
    createPrincipal,
    deletePrincipal,
    loadPrincipal,
    updatePrincipal,
    clearPrincipal,
    cancelFromDelete,
    askForDelete
} from "./actions"
import PrincipalList from "./PrincipalList"
import PrincipalForm from "./PrincipalForm"
import ConfirmationForm from "../components/confirmationDialog/ConfirmationDialogForm"


class Page extends React.Component {
    componentWillMount() {
        this.props.fetchPrincipals();
    }

    handleSubmit = (principal) => {
        if(this.props.isUpdate) {
            this.props.updatePrincipal(principal);
        } else {
            this.props.createPrincipal(principal);
        }
    };

    handleClear = () => {
        this.props.clearPrincipal();
    };

    onDelete = (objId) => {
        this.props.deletePrincipal(objId);
    };

    onUpdate = (principal) => {
        this.props.loadPrincipal(principal);
    };

    onAskForDelete = (objId) => {
        this.props.askForDelete(objId);
    };

    onHideModal = () => {
        this.props.cancelFromDelete();
    };

    render() {
        const {principals} = this.props;
        return (
            <div>
                <div id="page-title">
                    <h2>Principal Operations</h2>
                    <p>Principal create, update and list operations</p>
                </div>
                <ConfirmationForm onConfirm={this.onDelete.bind(this)} onCancel={this.onHideModal.bind(this)} />
                <PrincipalForm clearPrincipal={this.handleClear.bind(this)} onSubmit={this.handleSubmit.bind(this)}/>
                <PrincipalList principals={principals} updatePrincipal={this.onUpdate.bind(this)} deletePrincipal={this.onAskForDelete.bind(this)}/>
            </div>
        )
    }
}

const mapStateToProps = ({principalReducer: {principals, isUpdate}}) => ({
    principals,
    isUpdate
});

export default connect(
    mapStateToProps,
    {
        fetchPrincipals,
        createPrincipal,
        deletePrincipal,
        loadPrincipal,
        updatePrincipal,
        clearPrincipal,
        cancelFromDelete,
        askForDelete
    }
)(Page)
