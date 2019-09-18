import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const GuestRoute = ({ isAuthenticated, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      console.log(props);
      return !isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect to={`/profile/${props.match.params.type}`} />
      );
    }}
  />
);

GuestRoute.propTypes = {
  component: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.login.token,
  };
}

export default connect(mapStateToProps)(GuestRoute);
