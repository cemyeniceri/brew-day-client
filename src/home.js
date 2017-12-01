import React from "react"
import {Link} from 'react-router';

class Home extends React.Component {

    render() {
        return (
            <div>
                <h3 className="text-transform-upr font-size-26">
                    <i className="glyph-icon icon-beer mrg10R font-green"></i>
                    Brew Day
                </h3>
                <p className="font-gray">Let's go and make your own BEER :)</p>
                <div className="divider"></div>
                <ul className="reset-ul">
                    <li className="pad10A font-size-16">
                        <Link to="/recipes">
                            <i className="glyph-icon icon-pencil mrg10R font-green"></i>
                            Prepare Your Receipts
                        </Link>
                    </li>
                    <li className="pad10A font-size-16">
                        <Link to="/shop-lists">
                            <i className="glyph-icon icon-cubes mrg10R font-green"></i>
                            Save Your Ingredients
                        </Link>
                    </li>
                    <li className="pad10A font-size-16">
                        <Link to="/ingredients">
                            <i className="glyph-icon icon-shopping-cart mrg10R font-green"></i>
                            Make Your Shop Lists
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Home
