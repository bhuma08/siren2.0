import React from "react";
import { Switch, Route } from 'react-router-dom'
import LandingPage from "./Containers/LandingPage";
import Home from './Containers/Home'
import Register from './Components/Register'
import PrivateRoute from './Components/PrivateRoute'
import {connect} from "react-redux";
import { loadUser } from './Actions/Auth'
import "./styles/App.css";
import store from "./store";


class App extends React.Component {

  componentDidMount(){
    store.dispatch(loadUser())
  }

  render() {
    
    return (
      <>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/register" component={Register} />
        {/* <Route path="/home" component={Home} /> */}
        <PrivateRoute path='/home' component={Home}/>


      </Switch>
       
                
      </>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     auth: state.auth,
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     loadUser: () => {
//       return dispatch(auth.loadUser());
//     }
//   }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;