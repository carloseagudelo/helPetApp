/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {Router, Scene} from 'react-native-router-flux';

import Home from '../Home';
import Login from '../Login';
import SingUp from '../SingUp';

export default class Routers extends Component {
  render() {
    return (
      <Router>
      	<Scene key="root" >
  	      <Scene key="home" component={Home} hideNavBar/>
  	      <Scene key="login" component={Login} hideNavBar/>
          <Scene key="singup" component={SingUp} hideNavBar/>
	    </Scene>
      </Router>
    );
  }
}