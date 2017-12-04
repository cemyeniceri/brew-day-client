import React from "react"
import { Modal } from "react-bootstrap"
import {Field, reduxForm} from 'redux-form'
import {Button, ButtonToolbar} from "react-bootstrap"
import {renderTextArea} from "../../common/fields"
import {VALUE_IS_REQUIRED} from "../../constants/message";

const validate = values => {
    const errors = {};
    if (!values.post) {
        errors.post = VALUE_IS_REQUIRED;
    }
    return errors
};

let RecipeCommentAddForm = (props) => {

    const {isShowing, handleSubmit, onCancel, comment} = props;

    return (
        <Modal bsSize="large" show={isShowing} onHide={() => onCancel()}>
            <Modal.Header closeButton>
                <Modal.Title componentClass='h3'>
                    COMMENT
                </Modal.Title>
            </Modal.Header>
            <div className="panel">
                <div className="panel-body">
                    <h3 className="title-hero">
                        Create / Edit Comment
                    </h3>
                    <form className="form-horizontal bordered-row" onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-md-12">
                                <Field name="post" type="text" component={renderTextArea} label="Comment" placeholder="Comment" readOnly={false}/>
                            </div>
                        </div>
                        <div className="button-pane">
                            <ButtonToolbar>
                                <Button bsStyle="danger"  type="button" onClick={() => onCancel()}>Cancel</Button>
                                <Button bsStyle="success" type="submit">Submit</Button>
                            </ButtonToolbar>
                        </div>
                    </form>
                </div>
            </div>
        </Modal>
    )
};

RecipeCommentAddForm = reduxForm({
    form: 'recipeCommentAddForm',
    validate,
    enableReinitialize: true
})(RecipeCommentAddForm);

export default RecipeCommentAddForm;