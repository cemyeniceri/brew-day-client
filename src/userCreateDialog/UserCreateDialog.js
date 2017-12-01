import React from "react"
import {connect} from "react-redux"
import { Modal } from "react-bootstrap"
import {
    createNewUser,
    cancelCreateUser
} from "./actions"
import UserCreateForm from "./UserCreateForm"

class UserCreateDialog extends React.Component {

    handleSubmit = (user) => {
        this.props.createNewUser(user);
    };

    handleCancel = () => {
        this.props.cancelCreateUser();
    };

    render() {
        return (
            <Modal bsSize="large" show={this.props.isShowing} onHide={() => this.handleCancel()}>
                <Modal.Header closeButton>
                    <Modal.Title componentClass='h3'>
                        <i className="glyph-icon icon-beer mrg10R font-blue"></i>
                        Create Your Brew Day Account :)
                    </Modal.Title>
                </Modal.Header>
                <UserCreateForm
                    onSubmit={this.handleSubmit.bind(this)}
                    onCancel={this.handleCancel.bind(this)}
                />
            </Modal>
        )
    }
}

const mapStateToProps = ({userReducer: {isShowing}}) => ({
    isShowing
});

export default connect(
    mapStateToProps,
    {
        createNewUser,
        cancelCreateUser
    }
)(UserCreateDialog)
