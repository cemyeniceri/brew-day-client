import React from 'react';
import {Table} from "react-bootstrap"

const BrewTodayList = (props) => {

    const { brewList, handleOpenRecipe } = props;

    const tableInstance = (
        <Table bordered condensed>
            <thead>
            <tr>
                <th>Name</th>
                <th>Description</th>
            </tr>
            </thead>
            <tbody>
            {Object.values(brewList).map( brew =>
                <tr className="row-hover" key={brew.objId} onClick={() => handleOpenRecipe(brew.objId)}>
                    <td>{brew.name}</td>
                    <td>{
                        brew.detail.length > 255 ?
                            brew.detail.substring(0,255) + '...' :
                            brew.detail
                    }</td>
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

export default BrewTodayList;