import React, {PropTypes} from "react"
import {Table} from "react-bootstrap"
import {Link} from 'react-router'

const IngredientList = (props) => {

    const {deleteIngredient, updateIngredient, ingredients} = props;

    const tableInstance = (
        <Table bordered condensed>
            <thead>
            <tr>
                <th>Type</th>
                <th>Name</th>
                <th>Unit</th>
                <th>Amount</th>
                <th>Update</th>
                <th>Delete</th>
            </tr>
            </thead>
            <tbody>
            {ingredients.map(ingredient =>
                <tr key={ingredient.objId}>
                    <td>{ingredient.type}</td>
                    <td>{ingredient.name}</td>
                    <td>{ingredient.unit}</td>
                    <td>{ingredient.amount}</td>
                    <td>
                        <Link to={'/ingredients/' + ingredient.objId} className="btn btn-warning btn-sm" onClick={() => updateIngredient(ingredient)}>
                            <i className="glyphicon glyphicon-pencil"></i>
                        </Link>
                    </td>
                    <td>
                        <button className="btn btn-danger btn-sm" onClick={() => deleteIngredient(ingredient.objId)}>
                            <i className="glyph-icon icon-minus-circle"></i>
                        </button>
                    </td>
                </tr>
            )}
            </tbody>
        </Table>
    );

    return (
        <div>
            <h3 className="title-hero">
                Ingredient List
            </h3>
            <div> {tableInstance} </div>
        </div>
    )
};

IngredientList.propTypes = {
    roles: PropTypes.array
};

export default IngredientList
