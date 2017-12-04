import React from "react"
import {Table} from "react-bootstrap"

const RecipeIngredientList = (props) => {

    const {handleCreateIngredient, handleEditIngredient, handleDeleteIngredient, ingredients} = props;

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
                        <button className="btn btn-warning btn-sm" onClick={() => handleEditIngredient(ingredient)}>
                            <i className="glyphicon glyphicon-pencil"></i>
                        </button>
                    </td>
                    <td>
                        <button className="btn btn-danger btn-sm" onClick={() => handleDeleteIngredient(ingredient.objId)}>
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
            <div className="row">
                <div className="col-md-6">
                    <h3 className="title-hero">
                        Ingredient List
                    </h3>
                </div>
                <div className="col-md-6">
                    <button className="btn btn-primary btn-sm float-right" onClick={() => handleCreateIngredient()}>
                        <i className="glyph-icon icon-plus-circle"></i>
                    </button>
                </div>
            </div>
            <div>
                {tableInstance}
            </div>
        </div>
    )
};

export default RecipeIngredientList
