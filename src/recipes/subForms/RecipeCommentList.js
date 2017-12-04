import React from "react"
import {Table} from "react-bootstrap"

const RecipeCommentList = (props) => {
    const {comments, handleCreateComment, handleEditComment, handleDeleteComment} = props;

    const tableInstance = (
        <Table bordered condensed>
            <thead>
            <tr>
                <th>Comment</th>
                <th>Update</th>
                <th>Delete</th>
            </tr>
            </thead>
            <tbody>
            {comments.map(comment =>
                <tr key={comment.objId}>
                    <td>{comment.post}</td>
                    <td>
                        <button className="btn btn-warning btn-sm" onClick={() => handleEditComment(comment)}>
                            <i className="glyphicon glyphicon-pencil"></i>
                        </button>
                    </td>
                    <td>
                        <button className="btn btn-danger btn-sm" onClick={() => handleDeleteComment(comment.objId)}>
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
                        Comments
                    </h3>
                </div>
                <div className="col-md-6">
                    <button className="btn btn-primary btn-sm float-right" onClick={() => handleCreateComment()}>
                        <i className="glyph-icon icon-plus-circle"></i>
                    </button>
                </div>
            </div>
            <div> {tableInstance} </div>
        </div>
    )
};

export default RecipeCommentList;
