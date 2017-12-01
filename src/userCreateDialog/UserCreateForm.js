import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {renderField} from "../common/fields"
import { Button, Modal } from "react-bootstrap"
import {
    VALUE_IS_REQUIRED,
    MUST_BE_15_CHAR_OR_LESS,
    MUST_BE_BETWEEN_6_15_CHAR,
    PASSWORDS_MUST_BE_SAME,
    INVALID_EMAIL
} from "../constants/message";

const validate = values => {
    const errors = {};
    if (!values.username) {
        errors.username = VALUE_IS_REQUIRED;
    } else if (values.username.length > 15) {
        errors.username = MUST_BE_15_CHAR_OR_LESS;
    }

    if (!values.name) {
        errors.name = VALUE_IS_REQUIRED;
    }

    if (!values.surname) {
        errors.surname = VALUE_IS_REQUIRED;
    }

    if (!values.password) {
        errors.password = VALUE_IS_REQUIRED;
    } else if (values.password.length < 6 || values.password.length > 15) {
        errors.password = MUST_BE_BETWEEN_6_15_CHAR;
    }

    if (!values.rePassword) {
        errors.rePassword = VALUE_IS_REQUIRED;
    } else if (values.rePassword.length < 6 || values.rePassword.length > 15) {
        errors.rePassword = MUST_BE_BETWEEN_6_15_CHAR;
    }

    if(values.rePassword !== values.password) {
        errors.rePassword = PASSWORDS_MUST_BE_SAME;
    }

    if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = INVALID_EMAIL;
    }

    return errors
};

let UserCreateForm = (props) => {
    const {handleSubmit, onCancel} = props;

    return (
        <form className="form-horizontal bordered-row" onSubmit={handleSubmit}>
            <Modal.Body>
                <div className="row">
                    <div className="col-md-6">
                        <Field name="username" type="text" component={renderField} label="* Username" placeHolder="Username"/>
                        <Field name="password" type="password" component={renderField} label="* Password" placeHolder="Password"/>
                        <Field name="rePassword" type="password" component={renderField} label="* Password Again" placeHolder="Password Again"/>
                        <Field name="title" type="text" component={renderField} label="Title" placeHolder="Title"/>
                    </div>
                    <div className="col-md-6">
                        <Field name="name" type="text" component={renderField} label="* Name" placeHolder="Name"/>
                        <Field name="surname" type="text" component={renderField} label="* Surname" placeHolder="Surname"/>
                        <Field name="email" type="email" component={renderField} label="* Email" placeHolder="Email"/>
                        <Field name="gsm" type="number" component={renderField} label="Gsm" placeHolder="Gsm"/>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button bsStyle="danger" type="button" onClick={onCancel}>Cancel</Button>
                <Button bsStyle="btn btn-primary" type="submit">Sign Up</Button>
            </Modal.Footer>
        </form>
    )
};

UserCreateForm = reduxForm({
    form: 'userCreateForm',
    validate,
    enableReinitialize: true
})(UserCreateForm);

export default UserCreateForm;

