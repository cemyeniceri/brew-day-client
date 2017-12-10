import React from "react"
import { connect } from 'react-redux';
import TodaysBrewList from './brewToday/BrewToday'

import {
    openTodaysBrewList
} from "./brewToday/actions";

class Home extends React.Component {

    render() {
        return (
            <div>
                <TodaysBrewList/>
                <div className="row">
                    <div className="col-md-9">
                        <h3 className="text-transform-upr font-size-26">
                            <i className="glyph-icon icon-beer mrg10R font-green"></i>
                            Brew Day
                        </h3>
                        <p className="font-gray">Let's go and make your own BEER :)</p>
                    </div>
                    <div className="col-md-3">
                        <button className="btn btn-success btn-block" onClick={() => this.props.openTodaysBrewList()}>What Should I Brew Today :)</button>
                    </div>
                </div>
                <div className="divider"></div>
            </div>
        )
    }
}

export default connect(
    null,
    {
        openTodaysBrewList
    }
)(Home);
