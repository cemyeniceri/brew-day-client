import React from "react"
import {Table} from "react-bootstrap"
import {Field} from 'redux-form'
import {renderField} from "../common/fields";

const IngredientList = (props) => {

    const {handleCreateIngredient, handleEditIngredient, handleDeleteIngredient, ingredients, availableIngredients} = props;

    // Available Ingredients Check
    const availabilityCheck = ((availableIngredients !== undefined) && (Object.keys(availableIngredients).length !== 0));

    const tableInstance = (
        <Table bordered condensed>
            <thead>
            <tr>
                <th>Type</th>
                <th>Name</th>
                <th>Unit</th>
                <th>Amount</th>
                {handleEditIngredient !== undefined ? <th>Update</th> : null}
                <th>Delete</th>
                {
                    availabilityCheck ? <th className="text-center" style={{width: 80}}>Available</th> : null
                }
            </tr>
            </thead>
            <tbody>
            {ingredients.map(ingredient =>
                <tr key={ingredient.objId}>
                    <td>{ingredient.type}</td>
                    <td>{ingredient.name}</td>
                    <td>{ingredient.unit}</td>
                    {
                        handleEditIngredient !== undefined ?
                            <td>{ingredient.amount}</td> :
                            <td><Field name={ingredient.objId} type="text" component={renderField}/></td>
                    }
                    {
                        handleEditIngredient !== undefined ?
                            <td>
                                <button className="btn btn-warning btn-sm" onClick={() => handleEditIngredient(ingredient)}>
                                    <i className="glyphicon glyphicon-pencil"></i>
                                </button>
                            </td> :
                            null

                    }
                    <td>
                        <button className="btn btn-danger btn-sm" onClick={() => handleDeleteIngredient(ingredient.objId)}>
                            <i className="glyph-icon icon-minus-circle"></i>
                        </button>
                    </td>
                    {
                        availabilityCheck ?
                            <td className="text-center">
                                {
                                    availableIngredients[ingredient.objId].state ?
                                        <i className="glyph-icon font-blue icon-check"></i> :
                                        <i className="glyph-icon font-red  icon-remove"></i>
                                }
                            </td> :
                            null
                    }
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
                {
                    handleCreateIngredient !== undefined ?
                    <button className="btn btn-primary btn-sm float-right" onClick={() => handleCreateIngredient()}>
                        <i className="glyph-icon icon-plus-circle"></i>
                    </button>:
                    ""
                }
                </div>

            </div>
            <div>
                {tableInstance}
            </div>
        </div>
    )
};

export default IngredientList;
