import React from 'react'
import { connect } from 'react-redux'

const LoadingPage = (props) => {
    const {isShowing} = props;

    return (
        <div className="loading" style={{display: isShowing?'block':'none'}}>
        </div>
    );
};

const mapStateToProps = ({loadingPageReducer: {isShowing}}) => ({
    isShowing
});

export default connect(
    mapStateToProps
)(LoadingPage);