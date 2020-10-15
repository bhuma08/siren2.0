import React from "react";
import { Switch, Route } from 'react-router-dom'
import LandingPage from "./Containers/LandingPage";

import PrivateRoute from "./Components/PrivateRoute";
import Home from './Containers/Home'
import "./styles/App.css";


class App extends React.Component {
  

  render() {
    
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