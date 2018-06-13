import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native'
import {Actions} from 'react-native-router-flux';
import styles from "./styles";

export default class SignupVriew extends Component {

  loginPress(){
    Actions.login();
  }


  render() {
    return (
      <View style={styles.container}>

        <View style={styles.markWrap}>
          <Image style={styles.mark} 
                 resizeMode="contain" 
                 source={{uri: 'https://helpet.com.co/wp-content/themes/twentyseventeen/assets/images/logo.png'}}
          />
        </View>

        <View style={styles.inputsContainer}>

          <View style={styles.inputContainer}>            
            <TextInput
              style={[styles.input, styles.grayFont]}
              placeholder="Nombres"
              placeholderTextColor="gray"
            />

            <TextInput
              style={[styles.input, styles.grayFont]}
              placeholder="Apellidos"
              placeholderTextColor="gray" 
            />
          </View>

          <View style={styles.inputContainer}>            
            <TextInput
              secureTextEntry={true}
              style={[styles.input, styles.grayFont]}
              placeholder="Sexo"
              placeholderTextColor="gray" 
            />

            <TextInput
              style={[styles.input, styles.grayFont]}
              placeholder="Fecha de Nacimiento"
              placeholderTextColor="gray"
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={[styles.input, styles.grayFont]}
              placeholder="Correo Electronico"
              placeholderTextColor="gray"
            />

            <TextInput
              style={[styles.input, styles.grayFont]}
              placeholder="Numero telefonico"
              placeholderTextColor="gray"
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={[styles.input, styles.grayFont]}
              placeholder="Contraseña"
              placeholderTextColor="gray"
            />

            <TextInput
              style={[styles.input, styles.grayFont]}
              placeholder="Confirmar contraseña"
              placeholderTextColor="gray"
            />
          </View>

        </View>

        <View style={styles.footerContainer}>
          <TouchableOpacity>
            <View style={styles.signup}>
              <Text style={styles.whiteFont}>Resgístrate</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.loginPress}>
            <View style={styles.signin}>
              <Text style={styles.greyFont}>¿Ya tienes cuenta?<Text style={styles.grayFont}> Ingresa</Text></Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}