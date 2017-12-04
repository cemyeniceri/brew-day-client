import React, {Component} from 'react';
import {connect} from "react-redux"
import {logoutAndRedirect} from "./auth/actions"
import AlertContainer from "./container/AlertContainer"
import LoadingPage from "./components/loadingPage/loadingPage"
import './App.css';

class App extends Component {

    logout = () => {
        this.props.logoutAndRedirect()
    };

    render() {
        const {isAuthenticated} = this.props;
        const navbarInstance = (
            <div id="page-header" className="bg-gradient-9">
                <div id="header-logo" className="logo-bg">
                    <a href="/" className="logo-content-big" title="MonarchUI">
                        Brew Day <i>CET</i>
                        <span>The perfect solution for home brewer</span>
                    </a>
                    <a href="/" className="logo-content-small" title="MonarchUI">
                        Brew Day <i>CET</i>
                        <span>The perfect solution for home brewer</span>
                    </a>
                </div>

                <div id="header-nav-right">
                    <a className="header-btn" id="logout-btn" href="#" title="Logout" onClick={this.logout.bind(this)}>
                        <i className="glyph-icon icon-linecons-lock">
                        </i>
                    </a>
                </div>
            </div>
        );

        const leftSideBar = (
            <div id="page-sidebar">
                <div className="scroll-sidebar">
                    <div className="am-logo"></div>
                    <ul id="sidebar-menu" className="sf-js-enabled sf-arrows">
                        <li className="header"><span>Home Brewer</span></li>
                        <li className="divider"></li>
                        <li className="no-menu">
                            <a href="/recipes" title="Recipes Page" className="sfActive">
                                <i className="glyph-icon icon-pencil"></i>
                                <span>Recipes</span>
                            </a>
                        </li>
                        <li className="no-menu">
                            <a href="/ingredients" title="Ingredients Page" className="sfActive">
                                <i className="glyph-icon icon-cubes"></i>
                                <span>Ingredients</span>
                            </a>
                        </li>
                        <li className="no-menu">
                            <a href="/shop-lists" title="Shop List Page" className="sfActive">
                                <i className="glyph-icon icon-shopping-cart"></i>
                                <span>Shop List</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );

        return (
            <div>
                <LoadingPage />
                {isAuthenticated ?
                    <div>
                        <div id="page-wrapper">
                            <div>{navbarInstance}</div>
                            <div>{leftSideBar}</div>
                            <div id="page-content-wrapper">
                                <div id="page-content">
                                    <div id="container">
                                        {this.props.children}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> : <div>{this.props.children} </div>
                }
                <AlertContainer/>
            </div>
        );
    }
}

const mapStateToProps = ({authReducer: {isAuthenticated}}) => ({
    isAuthenticated
});

export default connect(
    mapStateToProps,
    {logoutAndRedirect}
)(App)
