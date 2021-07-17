import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PrivateRoute from "./pages/PrivateRoute";
import { useSignInListener } from "./firebase/auth";
import { useListenToMessage } from "./firebase/firestore"
import './scss/style.css'


function App() {
  const listen = useSignInListener()
  const listenDB = useListenToMessage()

  return(
    <Router>
      <Switch>
        <PrivateRoute exact path='/' component={Home}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/signup' component={Signup}/>
      </Switch>
    </Router>
  )
}

export default App;
