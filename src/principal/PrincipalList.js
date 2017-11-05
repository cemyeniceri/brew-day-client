import React, {PropTypes} from "react"
import {Table} from "react-bootstrap"

const PrincipalList = (props) => {

    const {deletePrincipal, updatePrincipal, principals} = props;

    function deleteByObjId(objId){
        deletePrincipal(objId);
    }

    function updateObject(principal) {
        updatePrincipal(principal);
    }

    function capitalize_Words(str)
    {
        if(str !== null)
            return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
        else
            return str;
    }

    const tableInstance = (
        <Table bordered condensed>
            <thead>
            <tr>
                <th>Status</th>
                <th>Username</th>
                <th>Title</th>
                <th>Name</th>
                <th>Surname</th>
                <th>E-mail</th>
                <th>Gsm</th>
                <th>Update/Delete</th>
            </tr>
            </thead>
            <tbody>
            {principals.map(principal =>
                <tr key={principal.objId}>
                    <td>{capitalize_Words(principal.userStatus)}</td>
                    <td>{principal.username}</td>
                    <td>{principal.title}</td>
                    <td>{principal.name}</td>
                    <td>{principal.surname}</td>
                    <td>{principal.email}</td>
                    <td>{principal.gsm}</td>
                    <td>
                        <button className="btn btn-warning btn-sm" onClick={() => updateObject(principal)}>
                            <i className="glyphicon glyphicon-pencil"></i>
                        </button>

                        <button className="btn btn-danger btn-sm" onClick={() => deleteByObjId(principal.objId)}>
                            <i className="glyph-icon icon-minus-circle"></i>
                        </button>
                    </td>
                </tr>
            )}
            </tbody>
        </Table>
    );
    return (
        <div className="panel">
            <div className="panel-body">
                <h3 className="title-hero">
                    Principal List
                </h3>
                <div>{tableInstance}</div>
            </div>
        </div>
    )
};

PrincipalList.propTypes = {
    principals: PropTypes.array
};

export default PrincipalList
