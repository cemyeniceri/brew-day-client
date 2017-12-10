import React from 'react'
import {  Button, Modal } from "react-bootstrap"
import { connect } from 'react-redux'
import BrewTodayList from './BrewTodayList'
import {
    closeTodaysBrewList,
    openSelectedRecipe
} from "./actions";

const TodaysBrewList = (props) => {
    const {closeTodaysBrewList, openSelectedRecipe, isShowing, brewList} = props;

    return (
        <Modal bsSize="large" show={isShowing} onHide={() => closeTodaysBrewList()}>
            <Modal.Header closeButton>
                <Modal.Title componentClass='h3'>What Should I Brew Today :)</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <BrewTodayList brewList={brewList}
                               handleOpenRecipe={(objId) => openSelectedRecipe(objId)}/>
            </Modal.Body>
            <Modal.Footer>
                <Button type="submit" onClick={() => closeTodaysBrewList()}>Cancel</Button>
            </Modal.Footer>
        </Modal>
    );
};

const mapStateToProps = ({brewTodayReducer: {isShowing, brewList}}) => ({
    isShowing,
    brewList
});

export default connect(
    mapStateToProps,
    {
        closeTodaysBrewList,
        openSelectedRecipe
    }
)(TodaysBrewList);