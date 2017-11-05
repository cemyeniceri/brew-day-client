import React from "react"
import {connect} from "react-redux"
import LoginForm from "./LoginForm"
import {loginUser} from "./actions"

class LoginPage extends React.Component {
    componentWillMount() {
    }

    handleSubmit = (loginForm) => {
        this.props.loginUser(loginForm)
    };

    render() {

        return (
            <div>
                <img src="images/blurred-bg-3.jpg" className="login-img wow fadeIn animated">
                </img>
                <br/><br/><br/><br/><br/><br/>
                <div className="center-vertical">
                    <div className="center-content row">
                        <div className="col-md-3 center-margin">
                            <br/>
                            <div className="content-box wow bounceInDown modal-content animated">
                                <h3 className="content-box-header content-box-header-alt bg-default">
                                    <span className="header-wrapper">   </span>
                                    Members area
                                    <small>Login to your account.</small>
                                </h3>
                                <LoginForm onSubmit={this.handleSubmit.bind(this)}/>
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
    {loginUser}
)(LoginPage)
