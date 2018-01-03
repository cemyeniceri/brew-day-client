import React from 'react';
import {Table} from "react-bootstrap"

const PublicRecipeList = (props) => {

    const { recipes, handleImportRecipe } = props;

    const tableInstance = (
        <Table bordered condensed>
            <thead>
            <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Import</th>
            </tr>
            </thead>
            <tbody>
            {Object.values(recipes).map( recipe =>
                <tr key={recipe.objId}>
                    <td>{recipe.name}</td>
                    <td>{
                        recipe.detail.length > 255 ?
                            recipe.detail.substring(0,255) + '...' :
                            recipe.detail
                    }</td>
                    <td className="center-div center-margin">
                        <button className="btn btn-primary btn-sm" disabled={!recipe.isImport} onClick={() => handleImportRecipe(recipe.objId)}>
                            <i className="glyph-icon icon-copy"></i>
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
                        Recipe List
                    </h3>
                </div>
            </div>
            <div>
                {tableInstance}
            </div>
        </div>
    )
};

export default PublicRecipeList;