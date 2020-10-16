import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, AuthReducer, ...rest }) => (
    <Route
        {...rest}
        render={(props) => {
            if (AuthReducer.isLoading) {
                return <h2>Loading...</h2>;
            } else if (!AuthReducer.isAuthenticated) {
                return <Redirect to="/" />;
            } else {
                return <Component {...props} />;
            }
        }}
    />
);

const mapStateToProps = (state) => ({
    AuthReducer: state.AuthReducer,
});

export default connect(mapStateToProps)(PrivateRoute);
