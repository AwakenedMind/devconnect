import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Alert = ({ alerts }) =>
  alerts !== 0 &&
  alerts.length > 0 &&
  alerts.map((alert) => (
    <div classname={`alert alert-${alert.alertType}`}>{alert.msg}</div>
  ));

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

Alert.PropTypes = {
  alerts: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(Alert);
