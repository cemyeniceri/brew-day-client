import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {Button, ButtonToolbar} from "react-bootstrap"
import {customSelect, renderField} from "../common/fields"
import { connect } from 'react-redux'
import {
    VALUE_IS_REQUIRED,
    MUST_BE_15_CHAR_OR_LESS,
    MUST_BE_BETWEEN_6_15_CHAR,
    INVALID_EMAIL
} from "../constants/message";

const validate = values => {
    const errors = {};
    if (!values.username) {
        errors.username = VALUE_IS_REQUIRED;
    } else if (values.username.length > 15) {
        errors.username = MUST_BE_15_CHAR_OR_LESS;
    }

    if (!values.password) {
        errors.password = VALUE_IS_REQUIRED;
    } else if (values.password.length < 6 || values.password.length > 15) {
        errors.password = MUST_BE_BETWEEN_6_15_CHAR;
    }

    if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = INVALID_EMAIL;
    }

    if (!values.userStatus) {
        errors.userStatus = VALUE_IS_REQUIRED;
    }
    return errors
};

let PrincipalForm = (props) => {
    const {handleSubmit, pristine ,clearPrincipal, submitting, isUpdate} = props;

    const userStatus = [
        {value: 'ACTIVE', label: 'Active'},
        {value: 'PENDING', label: 'Pending'},
        {value: 'PASSIVE', label: 'Passive'},
        {value: 'DELETED', label: 'Deleted'}
    ];

    function clearForm() {
        clearPrincipal();
    }

    return (
        <div className="panel">
            <div className="panel-body">
                <h3 className="title-hero">
                    Create/Update Principals
                </h3>
                <form className="form-horizontal bordered-row" onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-6">
                            <Field name="username" type="text" component={renderField} label="* Username" placeHolder="Username"/>
                            <Field name="password" type="text" component={renderField} label="* Password" placeHolder="Password"/>
                            <Field name="title" type="text" component={renderField} label="Title" placeHolder="Title"/>
                            <Field name="userStatus" type="text" component={customSelect} options={userStatus} label="* Status" placeHolder="Status"/>
                        </div>
                        <div className="col-md-6">
                            <Field name="name" type="text" component={renderField} label="Name" placeHolder="Name"/>
                            <Field name="surname" type="text" component={renderField} label="Surname" placeHolder="Surname"/>
                            <Field name="email" type="email" component={renderField} label="Email" placeHolder="Email"/>
                            <Field name="gsm" type="number" component={renderField} label="Gsm" placeHolder="Gsm"/>
                        </div>
                    </div>
                    <div className="button-pane">
                        <ButtonToolbar>
                            <Button bsStyle="success" type="submit" disabled={submitting}>Submit</Button>
                            <Button type="button" disabled={ (pristine || submitting) && !isUpdate} onClick={() => clearForm()}>Clear Values</Button>
                        </ButtonToolbar>
                    </div>
                </form>
            </div>
        </div>
    )
};

PrincipalForm = reduxForm({
    form: 'principalForm',
    validate,
    enableReinitialize: true
})(PrincipalForm);

const mapStateToProps = ({principalReducer: {initialValues, isUpdate}}) => ({
    initialValues,
    isUpdate
});

export default connect(
    mapStateToProps
)(PrincipalForm);

