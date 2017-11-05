import React from "react"
import {connect} from "react-redux"
import {AlertList} from "react-bs-notifier"
class AlertContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            position: "top-right",
            alerts: [],
            timeout: 5000,
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.commons !== this.props.commons) {

            const {message, type}= nextProps.commons;
            this.generate(type, message);

            setTimeout(function () {
                this.clearAlerts();
            }.bind(this), this.state.timeout);
        }
    }

    generate(type, message) {
        const newAlert = {
            id: (new Date()).getTime(),
            type: type,
            headline: type,
            message: message
        };

        this.setState({
            alerts: [...this.state.alerts, newAlert]
        });
    }

    clearAlerts() {
        this.setState({
            alerts: []
        });
    }

    render() {
        return (
            <div>
                <AlertList
                    position={this.state.position}
                    alerts={this.state.alerts}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        commons: state.commons
    }
};

export default connect(
    mapStateToProps,
    {}
)(AlertContainer)
