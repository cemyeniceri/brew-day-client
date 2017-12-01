import React from 'react';
import {Field, reduxForm} from 'redux-form';
import { Link } from 'react-router';


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
    const {handleSubmit, submitting, onCreateUser} = props;
    return (
        <form onSubmit={handleSubmit}>
            <div className="content-box">
                <h3 className="content-box-header content-box-header-alt bg-default">
                    <span className="icon-separator">
                        <i className="glyph-icon icon-cog"></i>
                    </span>
                    <span className="header-wrapper">
                        Members area
                        <small>Login to your account.</small>
                    </span>
                    <span className="header-buttons">
                        <Link className="btn btn-sm btn-primary" title="Register" onClick={() => onCreateUser()}>Sign Up</Link>
                    </span>
                </h3>
                <div className="content-box-wrapper">
                    <div className="form-group">
                        <div className="input-group">
                            <Field name="username" type="text" component={renderFieldForLogin} label="* User Name" placeHolder="User Name"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-group">
                            <Field name="password" type="password" component={renderFieldForLogin} label="* Password" placeHolder="Password"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <Link to="/forgot-password" title="Recover password">Forgot Your Password?</Link>
                    </div>
                    <button className="btn btn-success btn-block" type="submit" disabled={submitting}>Submit</button>
                </div>
            </div>
        </form>
    )
};

export default reduxForm({
    form: 'loginForm',
    validate
})(LoginForm)