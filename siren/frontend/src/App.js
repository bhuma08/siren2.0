import React from "react";
import { Switch, Route, Redirect } from 'react-router-dom'
import LandingPage from "./Containers/LandingPage";
import { connect } from 'react-redux';
// import PrivateRoute from "./Components/PrivateRoute";
import Home from './Containers/Home'
import "./styles/App.css";
import {auth} from "./Actions";

class App extends React.Component {
  
  componentDidMount() {
    this.props.loadUser();
  }

  PrivateRoute = ({component: ChildComponent, ...rest}) => {
    return <Route {...rest} render={props => {
      if (this.props.auth.isLoading) {
        return <em>Loading...</em>;
      } else if (!this.props.auth.isAuthenticated) {
        return <Redirect to="/" />;
      } else {
        return <ChildComponent {...props} />
      }
    }} />
  }

  render() {
    let {PrivateRoute} = this;
    return (
      <>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <PrivateRoute path="/home" component={Home} />
      </Switch>
       
                
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadUser: () => {
      return dispatch(auth.loadUser());
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
