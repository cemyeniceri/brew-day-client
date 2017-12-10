import React from 'react'
import {  Button, Modal } from "react-bootstrap"
import { connect } from 'react-redux'

const ConfirmationDialogForm = (props) => {
    const {message, onConfirm, onCancel, isShowing, confirmationParameters} = props;

    return (
        <Modal show={isShowing} onHide={() => onCancel()}>
            <Modal.Header closeButton>
                <Modal.Title componentClass='h3'>Delete Item</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {message}
            </Modal.Body>
            <Modal.Footer>
                <Button bsStyle="danger" type="submit" onClick={() => onConfirm(confirmationParameters)}>Confirm</Button>
                <Button type="submit" onClick={() => onCancel()}>Cancel</Button>
            </Modal.Footer>
        </Modal>
    );
};

const mapStateToProps = ({confirmationReducer: {isShowing, message, confirmationParameters}}) => ({
    isShowing,
    message,
    confirmationParameters
});

export default connect(
    mapStateToProps
)(ConfirmationDialogForm);