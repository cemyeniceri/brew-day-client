import React from "react"
import { connect } from 'react-redux';
import TodaysBrewList from './brewToday/BrewToday'
import PublicRecipeList from './publicRecipeList/PublicRecipeList';

import {
    openTodaysBrewList
} from "./brewToday/actions";

import {
    fetchPublicRecipes,
    importRecipeList
} from "./publicRecipeList/actions";

class Home extends React.Component {

    componentDidMount() {
        this.props.fetchPublicRecipes();
    }

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
                <PublicRecipeList recipes={this.props.publicRecipes}
                                  handleImportRecipe={this.props.importRecipeList}
                />
            </div>
        )
    }
}

const mapStateToProps = ({publicRecipesReducer: {publicRecipes}}) => ({
    publicRecipes
});

export default connect(
    mapStateToProps,
    {
        fetchPublicRecipes,
        openTodaysBrewList,
        importRecipeList
    }
)(Home);
