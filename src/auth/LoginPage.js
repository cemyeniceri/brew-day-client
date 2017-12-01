import React from "react"
import {connect} from "react-redux"
import LoginForm from "./LoginForm"
import {loginUser} from "./actions"
import { Link } from 'react-router';
import UserCreateDialog from '../userCreateDialog/UserCreateDialog'
import {openCreateUserDialog} from "../userCreateDialog/actions";

class LoginPage extends React.Component {
    componentWillMount() {

    }

    handleSubmit = (loginForm) => {
        this.props.loginUser(loginForm)
    };

    openCreateUserDialog() {
        this.props.openCreateUserDialog();
    }

    render() {

        return (
            <div className="login-page">

                {/* CREATE NEW USER */}
                <UserCreateDialog />

                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <div className="center-vertical">
                    <div className="center-content row">
                        <div className="col-md-8 col-lg-6 clearfix center-margin">
                            <div className="row">
                                {/*Explanations About Page*/}
                                <div className="col-md-5">
                                    <br/><br/>
                                    <h3 className="text-transform-upr font-size-26">
                                        <i className="glyph-icon icon-beer mrg10R font-green"></i>
                                        Brew Day
                                    </h3>
                                    <p className="font-gray">Let's go and make your own BEER :)</p>
                                    <div className="divider"></div>
                                    <ul className="reset-ul">
                                        <li className="pad10A font-size-16">
                                            <i className="glyph-icon icon-pencil mrg10R font-green"></i>
                                            Prepare Your Receipts
                                        </li>
                                        <li className="pad10A font-size-16">
                                            <i className="glyph-icon icon-cubes mrg10R font-green"></i>
                                            Save Your Ingredients
                                        </li>
                                        <li className="pad10A font-size-16">
                                            <i className="glyph-icon icon-shopping-cart mrg10R font-green"></i>
                                            Make Your Shop Lists
                                        </li>
                                    </ul>
                                    <div className="divider"></div>
                                    Not a member yet?
                                    <Link title="Register" onClick={() => this.openCreateUserDialog()}> Click here to sign up</Link>
                                </div>

                                {/*Login Form*/}
                                <div className="col-md-7">
                                    <LoginForm onSubmit={this.handleSubmit.bind(this)} onCreateUser={this.openCreateUserDialog.bind(this)}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(
    null,
    {
        loginUser,
        openCreateUserDialog
    }
)(LoginPage)
