import React from 'react'
import {Field, reduxForm} from 'redux-form'


const renderFieldForLogin = ({input, label, placeHolder, type, meta: {touched, error, warning}}) => (
    <div className="form-group">
        <label>{label}</label>
        <div>
            <input {...input} placeholder={placeHolder} type={type} className="form-control"/>
            {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    </div>
);

const validate = values => {
    const errors = {};
    if (!values.username) {
        errors.username = 'This value is required.'
    }
    if (!values.password) {
        errors.password = 'This value is required.'
    }

    return errors
};

const LoginForm = (props) => {
    const {handleSubmit, submitting} = props;
    return (
        <form onSubmit={handleSubmit}>
                <div className="content-box-wrapper">
                    <Field name="username" type="text" component={renderFieldForLogin} label="* User Name" placeHolder="User Name"/>
                    <Field name="password" type="password" component={renderFieldForLogin} label="* Password" placeHolder="Password"/>
                    <button className="btn btn-success btn-block" type="submit" disabled={submitting}>Submit</button>
                </div>
        </form>
    )
};

export default reduxForm({
    form: 'loginForm',
    validate
})(LoginForm)