/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Alert,
  TouchableOpacity
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import styles from "./styles";


type Props = {};
export default class Home extends Component {

  loginPress(){
    Actions.login();
  }

  registrationPress(){
    Actions.singup();
  }

  render() {
    return (
      <View style={styles.container}>

        <Image
          resizeMode="contain"
          style={styles.image}
          source={{uri: 'https://helpet.com.co/wp-content/themes/twentyseventeen/assets/images/logo.png'}}
        />
      
        <View style={styles.buttons}>
          <TouchableOpacity activeOpacity={.5} onPress={this.loginPress} >
            <View style={styles.loginButton}>
              <Text style={styles.buttonText}>Iniciar Sesión</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={.5} onPress={this.registrationPress}>
            <View style={styles.registerButton}>
              <Text style={styles.buttonText}>Registrate</Text>
            </View>
          </TouchableOpacity>
        </View>   
        
      </View>  
    );
  }
}